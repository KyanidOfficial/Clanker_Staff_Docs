# Clanker Staff Docs

Approved edits to `staffPortalContent.js` update the staff portal.

## Flow

```text
staff opens PR -> owner approves -> merge to main -> website redeploys
```

## Required Secret

Add this GitHub Actions secret in this repo:

```text
VERCEL_DEPLOY_HOOK_URL
```

Create it in Vercel from the website project:

```text
Project Settings -> Git -> Deploy Hooks -> Create Hook
```

Use the production branch for the hook. After the secret is set, every merge to `main` that changes `staffPortalContent.js` triggers a website redeploy.
