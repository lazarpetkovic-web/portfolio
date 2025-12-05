# Quick Deployment Guide for Hostinger

## Your portfolio is ready! 🎉

The `out` folder contains your complete static website ready for upload.

## Step-by-Step Deployment

### 1. Access Hostinger

- Log into your Hostinger account
- Go to your hosting control panel (hPanel)

### 2. Upload Files

**Method A: File Manager (Easiest)**

1. Click "File Manager" in hPanel
2. Navigate to `public_html` folder (or your domain's folder)
3. Delete any default files (index.html, etc.)
4. Click "Upload" button
5. Select ALL files from the `out` folder
6. Wait for upload to complete

**Method B: FTP**

1. Get FTP credentials from Hostinger (in hPanel → FTP Accounts)
2. Use FileZilla or any FTP client
3. Connect to your server
4. Navigate to `public_html`
5. Upload all contents from `out` folder

### 3. Verify

- Visit your domain (e.g., yourdomain.com)
- Your portfolio should be live!

## Important Notes

✅ Upload the CONTENTS of the `out` folder, not the folder itself
✅ Make sure `public_html` is empty before uploading (or uploading to correct domain folder)
✅ If you have a subdomain, upload to that subdomain's folder instead

## File Structure After Upload

Your `public_html` should look like:
```
public_html/
├── _next/
├── index.html
├── 404.html
├── favicon.ico
└── other files...
```

## Updating Your Site

When you make changes:

1. Edit your files locally
2. Run `npm run build` in the portfolio folder
3. Re-upload the new `out` folder contents to Hostinger
4. Changes are live immediately!

## Need Help?

- Check Hostinger's documentation: https://support.hostinger.com
- Contact Hostinger support if upload issues occur
- Make sure your domain DNS is properly configured

## Next Steps

1. ✏️ Update `app/data/projects.ts` with your real projects
2. 📧 Change email addresses in `app/page.tsx`
3. 🔗 Update social media links
4. 📸 Add project images to `public/projects/`
5. 🚀 Rebuild and redeploy!

---

Your portfolio is built with Next.js static export - it's just HTML, CSS, and JavaScript files. No server-side code, no database, no special requirements. It works on any hosting!
