/* ==========================================================================
   MNDZ FIGHTWEAR PRODUCTS AND TAPX LINKS
   This is the only file you edit to add products, prices, sizes and TapX links.

   BUY NOW appears on a product only when BOTH are true:
     - tapxUrl is the official TapX Gear purchase link for that exact product (starts with https://)
     - status is "active"
   Never guess a link. After any change, click every BUY NOW button to confirm it opens the right product.

   New TapX collection? Add it to COLLECTIONS, then add its products below with that collection id.
   Men's and women's menu items appear automatically once a product for them is listed and not hidden.
   Photos go in the assets folder (WebP or JPG, about 1200px wide). The first photo is the main one.
   ========================================================================== */

window.MNDZ_COLLECTIONS = [
  {
    id:     "originals-graphite",
    name:   "MNDZ Originals, Graphite",
    blurb:  "Gray brushstrokes on black.",
    image:  "assets/youth-duo.webp",
  },
  {
    id:     "originals-red",
    name:   "MNDZ Originals, Red",
    blurb:  "Red splatter with 柔術 and 絆 details.",
    image:  "assets/youth-team.webp",
  },
];

window.MNDZ_PRODUCTS = [
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-rashguard-graphite",
    name:       "Youth Short Sleeve Rashguard",
    colorway:   "Graphite",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "rashguard_ss",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-graphite",
    images:     ["assets/p-graphite-rash.webp", "assets/youth-graphite-flex.webp", "assets/youth-duo.webp"],
    alt:        "Youth athlete wearing the black and graphite MNDZ short sleeve rashguard",
    description:"Black base with graphite brushstroke graphics and the MNDZ Fightwear chest logo with red accent bars.",
    details:    ["Black and graphite brushstroke print","MNDZ Fightwear chest logo with red accent bars","Matches the Graphite grappling shorts"],
  },
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-shorts-graphite",
    name:       "Youth Grappling Shorts",
    colorway:   "Graphite",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "shorts",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-graphite",
    images:     ["assets/p-graphite-shorts.webp", "assets/youth-graphite-flex.webp", "assets/youth-duo.webp"],
    alt:        "Black and graphite MNDZ youth grappling shorts",
    description:"Graphite brushstroke print with the MNDZ logo on the leg and waistband and Japanese jiu-jitsu lettering on the opposite leg.",
    details:    ["Graphite brushstroke print","MNDZ logo on the leg and waistband","Japanese jiu-jitsu lettering on the leg"],
  },
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-set-graphite",
    name:       "Youth No-Gi Set",
    colorway:   "Graphite",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "set",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-graphite",
    images:     ["assets/youth-duo.webp", "assets/p-graphite-rash.webp", "assets/p-graphite-shorts.webp"],
    alt:        "Two young athletes wearing the matching Graphite MNDZ No-Gi set",
    description:"The Graphite short sleeve rashguard and grappling shorts as a matching set.",
    details:    ["Short sleeve rashguard and grappling shorts","Matching graphite brushstroke print"],
  },
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-longsleeve-red",
    name:       "Youth Long Sleeve Rashguard",
    colorway:   "Red",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "rashguard_ls",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-red",
    images:     ["assets/p-red-ls.webp", "assets/youth-medal.webp", "assets/d-patch.webp", "assets/d-sleeve.webp"],
    alt:        "Young athlete wearing the black and red MNDZ long sleeve rashguard",
    description:"Black, red and gray splatter graphics, MNDZ Fightwear chest logo, a 絆 sleeve patch and MNDZ lettering down the sleeve.",
    details:    ["Black, red and gray splatter print","絆 (kizuna, bond) patch on the sleeve","MNDZ lettering down the sleeve"],
  },
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-rashguard-red",
    name:       "Youth Short Sleeve Rashguard",
    colorway:   "Red",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "rashguard_ss",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-red",
    images:     ["assets/p-red-ss.webp", "assets/youth-team.webp", "assets/d-chest.webp"],
    alt:        "Young athlete wearing the black and red MNDZ short sleeve rashguard",
    description:"Black, red and gray splatter graphics with red piping and the MNDZ Fightwear chest logo.",
    details:    ["Black, red and gray splatter print","Red piping","MNDZ logo on the sleeve"],
  },
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-shorts-red",
    name:       "Youth Grappling Shorts",
    colorway:   "Red",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "shorts",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-red",
    images:     ["assets/p-red-shorts.webp", "assets/d-kanji.webp", "assets/d-waist.webp", "assets/youth-team.webp"],
    alt:        "Black and red MNDZ youth grappling shorts",
    description:"Red and gray splatter print with 柔術 (jiu-jitsu) on the leg, an MNDZ waistband and a branded leg logo.",
    details:    ["柔術 (jiu-jitsu) lettering on the leg","MNDZ branded waistband","Red and white side stripes"],
  },
  {
    tapxUrl:    "",                       // paste the official TapX purchase link for this product
    price:      null,                     // retail price on TapX, e.g. 45.00
    sizes:      [],                       // e.g. ["YS", "YM", "YL"]
    status:     "coming_soon",            // "active" | "coming_soon" | "sold_out" | "hidden"
    id:         "youth-set-red",
    name:       "Youth No-Gi Set",
    colorway:   "Red",
    line:       "youth",                    // "men" | "women" | "youth"
    type:       "set",            // "rashguard_ss" | "rashguard_ls" | "shorts" | "set" | "compression"
    collection: "originals-red",
    images:     ["assets/youth-team.webp", "assets/p-red-ss.webp", "assets/p-red-shorts.webp"],
    alt:        "Four young athletes wearing the matching red MNDZ No-Gi set",
    description:"The Red short sleeve rashguard and grappling shorts as a matching set.",
    details:    ["Short sleeve rashguard and grappling shorts","Matching red splatter print"],
  },
];
