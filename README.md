# MNDZ Fightwear website

Static site hosted on GitHub Pages. No checkout and no cart on this site.
Customers browse here and press BUY NOW, which opens that product's official TapX Gear purchase page.

## Add or update TapX links, prices, sizes and collections
Everything lives in **products.js**. You don't need to touch index.html.

1. Open `products.js` (on GitHub you can edit it right in the browser with the pencil icon).
2. Find the product and paste its TapX link into `tapxUrl: ""`. It must start with https://.
3. Set `price` (e.g. 45.00, the same price TapX charges), `sizes` (e.g. ["YS","YM","YL"]) and `status: "active"`.
4. Commit. GitHub Pages updates in a minute or two.
5. Click every BUY NOW button on the live site to confirm it opens the right TapX product.

BUY NOW shows only when a product has a tapxUrl AND status "active". Otherwise it shows Coming soon.

**New TapX collection:** add an entry to `MNDZ_COLLECTIONS` (id, name, blurb, image), then add its products with `collection` set to that id. Upload its photos into `assets/`. Men's and women's menu items appear automatically once a product for them is listed.

**Retire a product:** set `status: "hidden"`. **Out of stock:** `status: "sold_out"`.

## Forms
Paste your Web3Forms access key into `web3formsKey` in the CONFIG block at the top of the script in index.html. The contact form and email signup then send to mndzfightwear@gmail.com.

## Publish on GitHub Pages
1. Push this folder to a GitHub repo.
2. Repo Settings > Pages > Deploy from a branch > main, folder / (root).
3. The CNAME file points the site at www.mndzfightwear.com. At the domain registrar add:
   - CNAME record: `www` -> `<your-github-username>.github.io`
   - A records for the root domain: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
4. In Settings > Pages, tick Enforce HTTPS once the certificate is ready.
