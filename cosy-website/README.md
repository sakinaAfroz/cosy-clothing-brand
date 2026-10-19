# Cosy – Clothing Store Website

A responsive online clothing store for men and women, built with plain HTML, CSS and JavaScript (no frameworks, no backend).

## Features
- Full-screen video cover with the brand logo and a menu over the video (with a pause button, and no autoplay for people who prefer reduced motion)
- Drop-down menus for Men and Women, grouped into Tops, Bottoms and Sets
- Product filters: Men / Women, by group (Tops, Bottoms, Sets) and by type (Shirt, Pant, T-shirt, Lehenga, Shrug)
- Product cards with photos, a photo switcher and a size picker
- Product details window: description, features, fabric, fit, care, size guide
- Shopping cart: add items, change quantity, remove, subtotal. The cart is saved in the browser (localStorage)
- Checkout form (name, phone, address, payment method). The order is sent to the shop on WhatsApp
- Newsletter sign-up form with email check
- Works on phones and computers, and follows the device's light or dark mode

## Folder structure
```
cosy-website/
  index.html        page structure
  css/style.css     all styling
  js/script.js      products, menus, filters, cart, checkout
  images/           logo, video poster, product photos
  videos/cover.mp4  homepage cover video
  README.md         this file
```

## Run it on your computer
Double-click `index.html`. It opens in your browser. Keep the folders together. The fonts load from Google Fonts, so they need internet (a similar font is used if offline).

## Put it online (free)
Option 1 – Netlify Drop (easiest): open https://app.netlify.com/drop and drag the whole `cosy-website` folder onto the page. You get a link at once.

Option 2 – GitHub Pages: create a GitHub repository, upload everything in this folder (so `index.html` is at the top level), then go to Settings > Pages and choose the main branch.

## Set the shop's WhatsApp number
Open `js/script.js`, find this line and put your number inside the quotes. Use digits only, with the country code, no plus sign or spaces:
```
var SELLER_WHATSAPP='';
```
Until you set it, the order button lets the customer choose who to send the message to.

## Add or change a product
In `js/script.js`:
1. Add a line to the `items` list (name, type, price, group, photo path).
2. Add its description to the `info` list (same name).
3. Put its photo in the `images/` folder.
The menus and filters update by themselves.

## Change the cover video
Replace `videos/cover.mp4` with another short MP4 (no sound needed, a few MB is best) and `images/cover-poster.jpg` with a still frame from it. The poster shows while the video loads.

## Notes and limits
- There is no server or database. Orders are not stored on the site; they are sent by WhatsApp.
- There is no online card payment. Payment is cash on delivery or a transfer arranged by message.
- The fabric, fit, care and size-guide text is sample text. Replace it with the real product information.
- The cover video is a stock clip from Mixkit. Mixkit clips are free under the Mixkit license, so check it if you use the site commercially. Use only photos you have the right to use.
