# CDS524 Assignment Web

This project is prepared for deployment with GitHub Pages.

Repository:
`https://github.com/clivexxh123-hub/CDS524-assignment-web`

Expected GitHub Pages URL:
`https://clivexxh123-hub.github.io/CDS524-assignment-web/`

## Files To Upload

Make sure these files are in the project folder:

- `index.html`
- `styles.css`
- `script.js`
- `Xinghao_Xu_CV.docx`

## Push Local Files To GitHub

Open PowerShell in:

`C:\Users\ASUS\Desktop\524 individual project`

Then run:

```powershell
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/clivexxh123-hub/CDS524-assignment-web.git
git push -u origin main
```

## If Git Says The Remote Already Exists

Run:

```powershell
git remote set-url origin https://github.com/clivexxh123-hub/CDS524-assignment-web.git
git push -u origin main
```

## Enable GitHub Pages

After the files are pushed:

1. Open the repository on GitHub.
2. Click `Settings`.
3. Click `Pages`.
4. Under `Source`, choose `Deploy from a branch`.
5. Select branch `main`.
6. Select folder `/ (root)`.
7. Click `Save`.

## Final Website Link

After GitHub finishes deployment, your website should be available at:

`https://clivexxh123-hub.github.io/CDS524-assignment-web/`

## Notes

- The first deployment may take a few minutes.
- Refresh the Pages settings page if the link does not appear immediately.
- If you update the local files later, use:

```powershell
git add .
git commit -m "Update portfolio site"
git push
```
