import re
from pathlib import Path
from datetime import date
import requests

RE_FRONT_MATTER = re.compile(r'^---\n(.*?)\n---\n', re.DOTALL | re.MULTILINE)
RE_LINK = re.compile(r'^link:\s*(.+?)\n', re.MULTILINE)
RE_LAST_UPDATE = re.compile(r'^(lastUpdate:\s*")(.*?)(")', re.MULTILINE)
RE_GITHUB_URL = re.compile(r"https://github.com/([^/]+)/([^/]+?)(?:\.git)?$")
CURRENT_DATE = date.today().isoformat()

def get_last_commit_date(repo_url):
    m = RE_GITHUB_URL.match(repo_url)
    if not m:
        return None
    owner, repo = m.group(1), m.group(2)
    api_url = f"https://api.github.com/repos/{owner}/{repo}/commits?per_page=1"
    try:
        r = requests.get(api_url, timeout=10)
        if r.status_code == 200:
            return r.json()[0]["commit"]["committer"]["date"][:10]
    except Exception:
        pass
    return None

def repl(match):
    inner_yaml = match.group(1)
    if RE_LAST_UPDATE.search(inner_yaml).group(2) == CURRENT_DATE:
        return match.group(0)
    link_match = RE_LINK.search(inner_yaml)
    last_update = get_last_commit_date(link_match.group(1))
    if not last_update:
        return match.group(0)
    if 'lastUpdate:' in inner_yaml:
        updated_inner = RE_LAST_UPDATE.sub(rf'\g<1>{last_update}\g<3>', inner_yaml)
    else:
        updated_inner = inner_yaml + f'\nlastUpdate: "{last_update}"'
    return f"---\n{updated_inner}\n---\n"

any_update = False
self_update = False
for file in Path("_projects").glob("*.md"):
    content = file.read_text(encoding='utf-8')
    new_content = RE_FRONT_MATTER.sub(repl, content, count=1)
    if content != new_content:
        any_update = True
        if file.name == "portfolio.md":
            self_update = True
        file.write_text(new_content, encoding='utf-8', newline='\n')
        print(f"✅ Mis à jour : {file.name}")

if any_update and not self_update:
    def repl(match):
        updated = RE_LAST_UPDATE.sub(rf'\g<1>{date.today().isoformat()}\g<3>', match.group(1))
        return f"---\n{updated}\n---\n"
    file = Path("_projects/portfolio.md")
    content = file.read_text(encoding='utf-8')
    new_content = RE_FRONT_MATTER.sub(
        lambda m: f"---\n{RE_LAST_UPDATE.sub(rf'\g<1>{CURRENT_DATE}\g<3>', m.group(1))}\n---\n",
        content,
        count=1
    )
    file.write_text(new_content, encoding='utf-8', newline='\n')
