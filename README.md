# MNDZ Fightwear website

Static site for GitHub Pages.

Repo layout (must look exactly like this on GitHub):
  index.html, products.js, CNAME, 404.html, favicon.ico, robots.txt, sitemap.xml, README.md
  assets/   <- folder with all photos, videos and logos

## Update TapX links, prices, sizes
Edit products.js on GitHub (pencil icon). For each product: paste the TapX link into tapxUrl, set price (e.g. 45.00), sizes (e.g. ["YS","YM","YL"]) and status "active". Commit.
BUY NOW appears only when a product has a TapX link and status "active".

New photos: open the assets folder on GitHub > Add file > Upload files, then list them in products.js as "assets/file-name.webp".

## Forms
Contact form and email signup send to mndzfightwear@gmail.com through Web3Forms (key already in index.html).

## GitHub Pages
Settings > Pages > Deploy from a branch > main, / (root). Custom domain: www.mndzfightwear.com. Enforce HTTPS.
