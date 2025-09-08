import re
import requests

JS_PATH = "assets/js/project.js"

with open(JS_PATH, "r", encoding="utf-8") as f:
    content = f.read()

def get_last_commit_date(repo_url):
    m = re.match(r"https://github.com/([^/]+)/([^/]+)", repo_url)
    if not m:
        return None
    owner, repo = m.group(1), m.group(2)
    api_url = f"https://api.github.com/repos/{owner}/{repo}/commits?per_page=1"
    r = requests.get(api_url)
    if r.status_code == 200:
        return r.json()[0]["commit"]["committer"]["date"][:10]
    return None

def repl(match):
    project = match.group(0)
    link_match = re.search(r'link:\s*"([^"]+)"', project)
    if not link_match or not link_match.group(1):
        return project
    print(link_match, link_match.group(1))
    last_update = get_last_commit_date(link_match.group(1))
    if not last_update:
        return project
    if 'lastUpdate:' in project:
        return re.sub(r'lastUpdate:\s*"[^"]+"', f'lastUpdate: "{last_update}"', project)
    else:
        return project.rstrip('}') + f',\n    lastUpdate: "{last_update}"\n}}'

new_content = re.sub(r'\{[^}]+\}', repl, content)

with open(JS_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)