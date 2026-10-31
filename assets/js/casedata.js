/* =========================================================
   CASE DATA — one COMPOSED SEQUENCE per project.

   ⭐ REBUILT 2026-09-07. Version 1 gave all five projects the same six
   sections in the same order, and each was a table of prose. Daci: "not
   every project should have the same things, layout etc … it's a bit
   content and writing heavy … let the images and elements do the talking."

   So there is no template here. Each entry lists its own `blocks` in its own
   order, drawn from the registry in caseview.js, and no two projects share a
   sequence. The rule that keeps it honest:

     ⚠ COPY RULE (2026-10-08) — say what the thing IS. No slogans, no contrast pairs
       ("not X, Y"), no aphorisms, no invented campaigns. Captions name what is in the picture.

   Every project still carries a PALETTE and a TYPE moment, because those are
   the two he liked — but never in the same shape twice:
     palette   ONPOINT bars · FORMA stack · ELARA chips · CLERESTORY a band
               of light · ISOCHRONE stack · DESCENT bars
     type      ONPOINT full specimen with the strike · FORMA mini · ELARA
               mini beside the band · CLERESTORY alphabet with hot letters ·
               ISOCHRONE mini in numerals · DESCENT none, by design

   ⛔ IMAGE QUALITY LAW: photographs are real files under assets/img/work/.
   The two concept sites that own their photography (Clerestory, Isochrone)
   ship it in their own repos; Forma and Elara pull theirs from the same
   Unsplash frames the live sites use, downloaded local so the case works on
   file:// too. ONPOINT is entirely Daci's own artwork.
   ========================================================= */
(function () {
  'use strict';

  /* the brand faces, fetched once on the first case open */
  var FONTS = 'https://fonts.googleapis.com/css2'
    + '?family=Cormorant+Garamond:wght@300;400'
    + '&family=Outfit:wght@300;400;500'
    + '&family=Playfair+Display:ital,wght@0,400;0,500;1,400'
    + '&family=Jost:wght@300;400;500'
    + '&family=Instrument+Serif:ital@0;1'
    + '&family=Schibsted+Grotesk:wght@400;600'
    + '&family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500'
    + '&family=Instrument+Sans:wght@400;600'
    + '&family=Fraunces:opsz,wght@9..144,300;9..144,400'
    + '&family=Space+Grotesk:wght@400;500'
    + '&display=swap';

  var C = {};

  /* ═══════════════════════════════════════════════════════════════
     01 · ONPOINT — Daci's own label. Sydney, 2024.
     ⭐⭐ REBUILT 2026-10-03 (Daci: "completely redesign the onpoint project section … dont use
     the cringy board … the main colour background shouldn't be that red, more editorial white
     with some accents … the video of the logo being drawn has black borders, remove that and
     integrate properly … remove any unnecessary writing, just briefly describe the brand
     literally, showcase the products, the video, the logos, the cards … the project title
     should be the actual text with the strikethrough — the font is Horizon, don't write it").
     References (the folder's project layouts, framed 2026-10-03): Komma Komma (giant title,
     ONE meta row, then plain image bands — no prose), Lusion's project page (title + one
     description), Gregor Collienne (images placed at different sizes on a light ground),
     25 West (big type, images set beside it). So: one sentence, one meta row, then only the
     work. The red is an ACCENT now (one logo tile, the card), not the ground.
     `custom` hands the whole case to caseview.js's ONPOINT layout; the launch board and
     every copy block are gone. The title is his wordmark CUT FROM HIS OWN LOGO FILE
     (~/.claude-tools/onpointbake.mjs → wordmark-*.png), never re-typeset.
     ═══════════════════════════════════════════════════════════════ */
  C.onpoint = {
    custom: 'onpoint',
    /* 2026-10-20 (Daci): "specialising in" instead of the dash ("seems too AI"); the role says brand identity */
    line: 'ONPOINT is a streetwear accessories label I founded in Sydney in 2024, specialising in crossbody bags, shoulder pouches and leather goods.',
    meta: [['Founded', '2024'], ['Based', 'Sydney'], ['Products', 'Bags, pouches, leather goods'], ['Role', 'Founder \u00b7 brand identity \u00b7 art direction']],
    film: 'assets/video/work/onpoint-mark.mp4',
    goods: [
      { img: 'onpoint/product-belt-panel.jpg', w: 2200, h: 1228, alt: 'ONPOINT leather belt with the triangle-and-spade buckle' },
      { img: 'onpoint/product-pouch.png', w: 355, h: 486, alt: 'ONPOINT crossbody pouch in dark grey' },
      { img: 'onpoint/product-wallet-panel.jpg', w: 1376, h: 768, alt: 'ONPOINT leather wallet' }
    ],
    marks: [
      { bg: '#FFFFFF', img: 'onpoint/logo-black.png', w: 2107, h: 1824, cls: 'is-logo', alt: 'ONPOINT logo' },
      { bg: '#0A0A0A', img: 'onpoint/logo-white.png', w: 2107, h: 1824, cls: 'is-logo', alt: 'ONPOINT logo, reversed' },
      { bg: '#FFE4E4', img: 'onpoint/spade-black.png', w: 672, h: 784, cls: 'is-spade', alt: 'The spade' },
      { bg: '#C84848', img: 'onpoint/wordmark-white.png', w: 1471, h: 147, cls: 'is-word', alt: 'The wordmark' }
    ],
    tape: 'onpoint/pattern.png',
    hand: [
      'onpoint/card-black.png', 'onpoint/card-grey.png', 'onpoint/card-neworder.png', 'onpoint/card-thanks.png',
      'onpoint/hangtag-front.png', 'onpoint/card-red.png', 'onpoint/card-pink.png'
    ]
  };

  /* ═══════════════════════════════════════════════════════════════
     02–06 · THE FIVE CONCEPT SITES — rebuilt 2026-10-08.
     Daci: "go into every project and remove every ai tell tale sign along with cringe text
     that is obviously ai. the onpoint page is best cause it has great effects, shows much
     but doesnt talk alot. take this into account."
     So each page is ONPOINT's shape: the title, one literal sentence and one row of facts
     (tube.js), the walkthrough, then only pictures, the palette and the type, and the four
     stills. References, walked live 2026-10-06: Léo Parpeix (a project is its name, year and
     role — nothing else) and Gil Huybrecht (the work, with labels only).
     GONE: the invented campaigns (hoardings, press pages, reels, referral cards, letters,
     banners, slides), the display slogans, the "X, not Y" subheads, the Rule / Voice / Banned
     rows, every `why`, and the "/01" numbers. Nothing here is written to sound clever: a
     caption names what is in the picture. backup-2026-10-07/js/casedata.js has the old file.
     ═══════════════════════════════════════════════════════════════ */

  /* 02 · FORMA — architecture and design studio. Ground: obsidian. */
  C.forma = {
    brand: { display: "'Cormorant Garamond',Georgia,serif", body: "'Outfit',system-ui,sans-serif" },
    blocks: [
      { t: 'photo', img: 'forma/villa.jpg' },

      { t: 'band', kick: 'The look',
        panels: [
          { k: 'img', img: 'forma/interior.jpg', f: 2.2 },
          { k: 'fill', hex: '#C9A96E', ink: '#0E0E0E', f: 1, cap: 'CHAMPAGNE' },
          { k: 'type', t: 'I–IV', f: 1 },
          { k: 'img', img: 'forma/stair.jpg', f: 1.6 }
        ] },

      { t: 'swatch', mode: 'stack', kick: 'The palette',
        items: [
          { hex: '#0E0E0E', name: 'Obsidian', note: 'Ground' },
          { hex: '#C9A96E', name: 'Champagne', note: 'Rules and numerals' },
          { hex: '#E8D5B0', name: 'Raw light', note: 'Display type' },
          { hex: '#8A8070', name: 'Stone', note: 'Secondary text' },
          { hex: '#FDFCFA', name: 'Lime', note: 'Paper' }
        ] },

      { t: 'specimen', mini: 1, kick: 'The type',
        glyph: 'Aa', css: "'Cormorant Garamond',Georgia,serif",
        rows: [
          ['Display', 'Cormorant Garamond 300'],
          ['Body', 'Outfit 300'],
          ['Labels', 'Outfit 500, capitals']
        ] }
    ]
  };

  /* 03 · ELARA & CO — wedding photography and film. Ground: linen. */
  C.elara = {
    brand: { display: "'Playfair Display',Georgia,serif", body: "'Jost',system-ui,sans-serif" },
    blocks: [
      { t: 'photo', img: 'elara/couple.jpg' },

      { t: 'band', kick: 'The look',
        panels: [
          { k: 'img', img: 'elara/rings.jpg', f: 1.4 },
          { k: 'fill', hex: '#C8957A', ink: '#FDFAF7', f: .8, cap: 'TERRACOTTA' },
          { k: 'img', img: 'elara/dress.jpg', f: 1.8 },
          { k: 'fill', hex: '#E8C4B2', ink: '#3D2B1F', f: .6, cap: 'BLUSH' },
          { k: 'img', img: 'elara/dance.jpg', f: 1.3 }
        ] },

      { t: 'swatch', mode: 'chips', kick: 'The palette',
        items: [
          { hex: '#FDFAF7', name: 'Linen' },
          { hex: '#E8C4B2', name: 'Blush' },
          { hex: '#C8957A', name: 'Terracotta' },
          { hex: '#3D2B1F', name: 'Walnut' },
          { hex: '#1C1410', name: 'Night' }
        ] },

      { t: 'specimen', mini: 1, kick: 'The type',
        glyph: 'Ee', css: "'Playfair Display',Georgia,serif",
        rows: [
          ['Display', 'Playfair Display 400 italic'],
          ['Body', 'Jost 300']
        ] }
    ]
  };

  /* 04 · CLERESTORY — stained-glass studio, York. Ground: chartres. */
  C.clerestory = {
    brand: { display: "'Instrument Serif',Georgia,serif", body: "'Schibsted Grotesk',system-ui,sans-serif" },
    blocks: [
      { t: 'rail', kick: 'The photography',
        items: [
          { img: 'clerestory/interior-glow.jpg', cap: 'Nave, late afternoon', wide: 1 },
          { img: 'clerestory/macro-blue.jpg', cap: 'Cobalt glass', wide: 1 },
          { img: 'clerestory/grisaille-lancets.jpg', cap: 'Grisaille lancets', tall: 1 },
          { img: 'clerestory/furnace.jpg', cap: 'The kiln', wide: 1 },
          { img: 'clerestory/studio.jpg', cap: 'The bench', wide: 1 },
          { img: 'clerestory/light-vault.jpg', cap: 'Vault, north aisle', tall: 1 }
        ] },

      { t: 'band', kick: 'The palette',
        panels: [
          { k: 'fill', hex: '#07070C', ink: '#F2ECE0', f: 1, cap: 'NUIT' },
          { k: 'fill', hex: '#1E45B8', ink: '#F2ECE0', f: 1.6, cap: 'COBALT' },
          { k: 'img', img: 'clerestory/nave-lancet.jpg', f: 1.5 },
          { k: 'fill', hex: '#C01235', ink: '#F2ECE0', f: 1.1, cap: 'RUBY' },
          { k: 'fill', hex: '#F3C63F', ink: '#07070C', f: .9, cap: 'SILVER STAIN' },
          { k: 'fill', hex: '#F2ECE0', ink: '#07070C', f: .7, cap: 'CHAUX' }
        ] },

      { t: 'photo', img: 'clerestory/chapel.jpg' },

      { t: 'specimen', kick: 'The type',
        glyph: 'C', css: "'Instrument Serif',Georgia,serif",
        hot: ['C', 'L', 'E', 'R', 'S', 'T', 'O', 'Y'],
        rows: [
          ['Display', 'Instrument Serif 400'],
          ['Body', 'Schibsted Grotesk 400'],
          ['Labels', 'Schibsted Grotesk 600, capitals']
        ] }
    ]
  };

  /* 05 · ISOCHRONE — watch manufacture. Ground: technical paper. */
  C.isochrone = {
    brand: { display: "'Bodoni Moda',Didot,Georgia,serif", body: "'Instrument Sans',system-ui,sans-serif" },
    blocks: [
      { t: 'photo', img: 'isochrone/hero-movement.jpg' },

      { t: 'rail', kick: 'The photography',
        items: [
          { img: 'isochrone/watchmaker.jpg', cap: 'Assembly', wide: 1 },
          { img: 'isochrone/guilloche.jpg', cap: 'Guilloché', wide: 1 },
          { img: 'isochrone/tweezers.jpg', cap: 'The balance', tall: 1 },
          { img: 'isochrone/mvt-gold.jpg', cap: 'Gilt bridges', wide: 1 },
          { img: 'isochrone/lathe.jpg', cap: 'The lathe', wide: 1 },
          { img: 'isochrone/valley.jpg', cap: 'Vallée de Joux', wide: 1 }
        ] },

      { t: 'swatch', mode: 'stack', kick: 'The palette',
        items: [
          { hex: '#08090B', name: 'Void', note: 'Ground' },
          { hex: '#E4E1D8', name: 'Paper', note: 'Ground' },
          { hex: '#2B4C9B', name: 'Bleu', note: 'Rules and links' },
          { hex: '#A3243B', name: 'Ruby', note: 'Accent' },
          { hex: '#B08A4E', name: 'Gilt', note: 'Accent' }
        ] },

      { t: 'specimen', mini: 1, kick: 'The type',
        glyph: '4 Hz', css: "'Bodoni Moda',Didot,Georgia,serif",
        rows: [
          ['Display', 'Bodoni Moda, optical sizing on'],
          ['Body', 'Instrument Sans, tabular figures']
        ] }
    ]
  };

  /* 06 · THE DESCENT — self-initiated, no client and no photography. The shortest page. */
  C.descent = {
    brand: { display: "'Fraunces',Georgia,serif", body: "'Space Grotesk',system-ui,sans-serif" },
    blocks: [
      { t: 'swatch', mode: 'bars', kick: 'The palette',
        items: [
          { hex: '#EAF6FA', name: 'Surface', note: '0 m' },
          { hex: '#6FE3FF', name: 'Bioluminescence', note: 'Below 1,000 m' },
          { hex: '#123A5E', name: 'Sunlit', note: '0–200 m' },
          { hex: '#0A2036', name: 'Twilight', note: '200–1,000 m' },
          { hex: '#050E19', name: 'Midnight', note: '1,000–10,935 m' }
        ] },

      { t: 'ledger', rows: [
        ['Client', 'None, self-initiated'],
        ['Built', '2026, one file, no libraries'],
        ['Depth', '10,935 m of page']
      ] }
    ]
  };


  /* ═══════════════════════════════════════════════════════════════
     JOE JAMES · LOW TIDE (2026-10-30) — caseview.js CUSTOM.joejames.
     Facts only from the record: Southend-on-Sea; The Ends, Never Ends, Neighbourhood Recordings, 10 July 2026 (Apple
     Music tracklist); Crack's 2024 cover ("Rising Tide") and the album artwork are George Muncey's photographs. The
     proposal is labelled as one everywhere it appears.
     ═══════════════════════════════════════════════════════════════ */
  C.joejames = {
    custom: 'joejames',
    end: 'Proposal',
    line: 'A creative direction proposal for the rollout of Joe James\u2019s debut album, The Ends, Never Ends.',
    meta: [['Artist', 'Joe James, Southend-on-Sea'], ['Album', 'The Ends, Never Ends \u00b7 Neighbourhood Recordings, 2026'],
      ['Role', 'Creative direction \u00b7 art direction \u00b7 digital'], ['Status', 'Unsolicited proposal']],
    hero: { img: 'joejames/pier-rail.jpg', w: 2000, h: 1333, alt: 'Joe James fishing from a pier rail over a grey sea',
      cap: 'Photograph: George Muncey for Crack, 2024' },
    city: [
      { img: 'joejames/album.jpg', w: 1800, h: 1800, alt: 'Joe James with family and friends around a black cab in front of an estate block', cap: 'The album artwork. George Muncey, 2026' },
      { img: 'joejames/bike.jpg', w: 1600, h: 1067, alt: 'Joe James on a dirt bike in a field, black and white', cap: 'George Muncey for Crack, 2024' },
      { img: 'joejames/portrait-bw.jpg', w: 1200, h: 1500, alt: 'Studio portrait of Joe James in a black vest', cap: 'Press photograph, 2026' }
    ],
    sea: [
      { img: 'joejames/sea-05.jpg', w: 1080, h: 1333, alt: 'Joe James in a seafront shelter; the graffiti reads from the city to the sea', cap: '\u201cFrom the city to the sea\u201d, on the shelter wall. George Muncey for Crack' },
      { img: 'joejames/sea-02.jpg', w: 1080, h: 1333, alt: 'Joe James crouching on the shore at blue hour', cap: 'George Muncey for Crack' },
      { img: 'joejames/sea-03.jpg', w: 1080, h: 1333, alt: 'Joe James at the waterline at night, arcade lights behind him', cap: 'George Muncey for Crack' }
    ],
    low: { img: 'joejames/pier-lowtide.jpg', w: 1920, h: 902, alt: 'People walking Southend Pier at low tide, the estuary drained to mud',
      cap: 'Southend Pier at low tide. Chris Morgan, CC BY-SA 2.0' },
    tide: { city: { img: 'joejames/album.jpg', w: 1800, h: 1800 }, sea: { img: 'joejames/tide-sea.jpg', w: 1920, h: 902 } },
    tracks: [['Who Is She?', ''], ['Back Together', ''], ['Fully Submerged', 'Astr\u00f8nne'], ['Bitterstreet Symphony', ''],
      ['Papercuts', ''], ['Waterloo', 'Hak Baker'], ['206', ''], ['Black Cabbie', ''], ['OBE', 'Lancey Foux'], ['Never Ends', ''],
      ['Why I Luv U', ''], ['Ignorance Was Never Bliss', 'Loyle Carner'], ['Same Emotions', 'Dave'], ['All I Wanted', '']],
    poster: { img: 'joejames/pier-rail.jpg', w: 2000, h: 1333 }
  };

  window.TFI = window.TFI || {};
  window.TFI.cases = C;
  window.TFI.caseFonts = FONTS;
})();
