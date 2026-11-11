# Atma Fathoni Moza — Portfolio Site

A responsive, static portfolio in English. Open `index.html` to review it locally. The site needs no build step or external fonts, scripts, or services.

## Contents

- `index.html`: profile, selected projects, seven-cohort project map, approach, experience, and contact
- `archive.html`: searchable and filterable index of 45 documented projects and three labelled concept studies
- `projects/`: 41 detailed case studies with personal roles and test status
- `assets/`: project images, portrait, favicon, and downloadable CV
- `styles.css` and `script.js`: visual design, mobile navigation, and archive filters

## Publish on GitHub Pages

To publish as a personal site at `https://mozza10-dot.github.io/`:

1. Create or use a repository named `mozza10-dot.github.io` under the `mozza10-dot` account.
2. Put the **contents** of this folder at the repository root, with `index.html` at the top level.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, then `main` and `/(root)`.

The site uses relative links, so it can also live in a project repository on GitHub Pages. The included `.nojekyll` keeps GitHub Pages from processing the files as a Jekyll site.

The downloadable CV is the supplied master CV and includes the owner's phone number, as requested for the public site.

## Editing

The page copy is in the HTML files. Sitewide colors, typography, and layout are in `styles.css`. The mobile menu, archive search and filters, and automatic copyright year are in `script.js`.

The five academic case studies link to their public GitHub project repositories. All 35 Makeable projects have individual local case studies with evidence images hosted in `assets/`. The site contains no visitor-facing Google Drive links. The grouped Makeable enclosure study links to its five individual project records.

Project headings follow the original Pamer.in titles where an exhibit exists. The pH title follows the supplied English PowerPoint portfolio: **IoT pH Monitoring**. Other academic headings also follow the presentation when no exhibit exists. “Makeable Pocket Devices” is a grouped case study; its five original project names appear separately in the archive.

The Hardware Build Ideas entries began with the feasibility brief. Five now have firmware and wiring files in the supplied internship folder; these are labelled as implementation packages, without a physical build claim. Three remain concept studies. The November enclosure set has digital CAD checks, while slicing and physical fit remain pending according to its source README.
