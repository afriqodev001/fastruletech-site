# FastRuleTech website

A static marketing site for FastRuleTech (POTS line replacement, business phone systems and field services in Minnesota), built for GitHub Pages. There's no build step: plain HTML, CSS and a little JavaScript.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `pots-line-replacement.html` | POTS line replacement |
| `business-phone-systems.html` | Business phones / VoIP |
| `partners.html` | Field services for integrators and carriers |
| `about.html` | About |
| `contact.html` | Contact form |
| `404.html` | Not-found page |

Styles are in `assets/css/styles.css`, scripts in `assets/js/main.js`, and the logo is `assets/img/logo.svg`.

## 1. Fill in your details

Edit `site-config.json`:

| Key | Example | Used for |
|---|---|---|
| `PHONE` | `(612) 555-0123` | The displayed phone number |
| `PHONE_LINK` | `+16125550123` | Tap-to-call links |
| `EMAIL` | `info@fastruletech.com` | Email links |
| `CITY` | `Minneapolis` | Where you're based |
| `YEARS` | `6` | "6+ years" of field experience |
| `DOMAIN` | `fastruletech.com` or `USER.github.io/REPO` | Canonical links and sitemap |
| `FORMSPREE_ID` | `xyzabcd` | The contact form (see step 2) |

Then run:

```
python configure.py
```

## 2. Connect the contact form

GitHub Pages can't process forms, so the form posts to [Formspree](https://formspree.io), which has a free tier. Create a form there, copy its ID (the part after `/f/`), and put it in `FORMSPREE_ID`. Until you do, the form tells visitors to call or email instead.

## 3. Publish on GitHub Pages

1. Create a GitHub repository (for example `fastruletech-site`) and push these files to the `main` branch.
2. In the repository, go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. The site goes live at `https://USER.github.io/REPO/` within a minute or two.

## 4. Use your own domain (recommended)

1. Buy the domain (for example `fastruletech.com`) from any registrar.
2. In **Settings → Pages → Custom domain**, enter it. GitHub adds a `CNAME` file to the repo.
3. At your registrar, add DNS records:
   - `A` records for the root domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record for `www` pointing to `USER.github.io`
4. Once DNS has updated, tick **Enforce HTTPS**.

## Before you go live

- Only list licenses, certifications and insurance you actually hold. If you add a Minnesota DLI license number, put it in the footer.
- Product names (DataRemote, Ooma AirDial, Granite EPIK, Sangoma, 3CX) are mentioned only to describe compatibility. Don't use vendor logos unless you're an authorized partner.
- Don't name past clients from Field Nation work orders.
- Set up a Google Business Profile with the same name, phone and address as the site.
