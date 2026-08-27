# How to Push Your Code to GitHub

Step-by-step instructions to get your code live on GitHub.

---

## Prerequisites

1. A **GitHub account** — create one at https://github.com if you don't have it.
2. **Git installed** on your machine. Check with: `git --version`
3. You already have a local folder with your code (this project).

---

## Step 1 — Create a repository on GitHub

1. Go to https://github.com/new
2. Give it a **name** (e.g. `my-app`).
3. Set it to **Public** or **Private**.
4. **Do NOT** check "Add a README / .gitignore / license" — you already have files.
5. Click **Create repository**.

After creating, GitHub shows you commands. Copy the HTTPS URL of your repo.
It looks like: `https://github.com/YOUR-USERNAME/REPO-NAME.git`

---

## Step 2 — Open your project terminal

Open a terminal inside your project folder (where your `package.json` / `.git` lives).

For VSCode: open the project, then `Terminal > New Terminal`.

---

## Step 3 — Initialize Git (only if not already a repo)

```bash
git init
```

> If you see `On branch main ... nothing to commit`, Git is already initialized — skip this.

---

## Step 4 — Connect your local repo to GitHub

Link your folder to the GitHub repo you just created:

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
```

Check it connected:

```bash
git remote -v
```

---

## Step 5 — Add all your files

```bash
git add .
```

This stages everything. Check what's staged:

```bash
git status
```

---

## Step 6 — Commit your files

```bash
git commit -m "Initial commit"
```

---

## Step 7 — Push to GitHub

```bash
git push -u origin main
```

- `-u` remembers the remote so next time you can just run `git push`.
- `main` is your branch name. (GitHub's default branch is `main`; if yours is `master`, push to `master`.)

---

## Step 8 — Enter your credentials (first time only)

On first push, GitHub asks for a username + password.

- Username = your GitHub username.
- Password = **not** your account password — use a **Personal Access Token (PAT)**.

### Create a Personal Access Token

1. GitHub → top-right avatar → **Settings**
2. Left menu → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token**
4. Give it a name, expiry, and check **`repo`** scope.
5. Click **Generate token** and **copy it** (shown only once).

Paste that token as the password when Git asks.

---

## Step 9 — Verify

Refresh your GitHub repo page. Your files should be there.

---

# Deploy to GitHub Pages (public live site)

GitHub Pages **publishes a real website** — anyone with the link can see it.
This project is a **Vite + React** app, so it needs small setup first.

The final live site will look like:

```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

---

## Part A — Make sure the repo is PUBLIC

Anyone viewing the site needs the repo to be public.

1. GitHub → open your repo page.
2. **Settings** → **General**.
3. Scroll to **Danger Zone** → **Change repository visibility**.
4. Choose **Public**, type the repo name to confirm, click **I understand, change repository visibility**.

> If you picked "Public" when creating the repo, skip this part.

---

## Part B — Set the correct `base` path

Vite assumes the site is hosted at the root (`/`). GitHub Pages hosts it in a
subfolder named after your repo, so you must set `base` to `/REPO-NAME/`.

Open **`vite.config.js`** (in the `my-app` folder) and add `base`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/REPO-NAME/',   // <-- replace REPO-NAME with your repo name
})
```

> If the repo name is exactly `YOUR-USERNAME.github.io`, use `base: '/'` instead.

---

## Part C — Add a deploy script

Open **`package.json`** and add the `predeploy` and `deploy` scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## Part D — Install the `gh-pages` tool

From inside the `my-app` folder:

```bash
npm install --save-dev gh-pages
```

---

## Part E — Deploy

```bash
npm run deploy
```

Git will ask for your username + Personal Access Token (see below) the first
time. When it finishes, the site is building on GitHub.

---

## Part F — Enable GitHub Pages & get the link

1. GitHub → repo → **Settings** → **Pages** (left menu).
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. **Branch** = `gh-pages` → `/ (root)` → **Save**.
4. Wait ~1 minute, refresh. The site URL appears at the top:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## Making changes + updating the live site

After editing code, rebuild and redeploy:

```bash
cd my-app
git add .
git commit -m "Describe your change"
git push
npm run deploy
```

---

## Deploying with GitHub Actions (automatic, optional)

Instead of running `npm run deploy` each time, add a workflow file that deploys
on every push:

1. In your repo, create folder `.github/workflows/`.
2. Create a file `.github/workflows/deploy.yml` with the content below.
3. Commit and push. GitHub auto-deploys on every push to `main`.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

Then in **Settings → Pages** choose **Source**: *GitHub Actions*
(the manual `gh-pages` branch step is no longer needed).

---

## Authentication (Personal Access Token)

GitHub no longer accepts your normal password when pushing. Use a **PAT**:

1. GitHub → avatar → **Settings** → **Developer settings**.
2. **Personal access tokens** → **Tokens (classic)** → **Generate new token**.
3. Name it, set expiry, tick **`repo`** (and **`workflow`** if using Actions).
4. **Generate token** → copy it (shown once only).
5. Paste the token as the **password** when Git asks.

---

## Making changes later (repeat cycle)

```bash
git add .
git commit -m "Describe your change"
git push
```

---

## Common issues

| Problem | Fix |
|---|---|
| `fatal: not a git repository` | Run `git init` first |
| `fatal: remote origin already exists` | Run `git remote set-url origin <URL>` |
| `error: src refspec main does not match any` | You committed nothing — run `git commit` |
| `Push rejected ... failed to push some refs` | Pull first: `git pull origin main --rebase`, then `git push` |
| Git asks for password repeatedly | Use a PAT (Step 8) instead of your login password |

---

## Quick reference (all-in-one)

```bash
git init
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git add .
git commit -m "Initial commit"
git push -u origin main
```
