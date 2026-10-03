# SpanNext — Website Shell

Navbar + routing for the full site. **Services pages are real, finished
implementations** (carried over as-is). **Every other page is a placeholder**
that just shows its title, centered — ready for each developer to build out.

## Stack
React 19 + Vite · Tailwind CSS (Royal Blue & White) · React Router DOM v7 · Framer Motion

## Getting started
```bash
npm install
npm run dev
```

## What's real vs. placeholder

| Status | Pages |
|---|---|
| ✅ **Real, built pages** | Services Overview, AI & Machine Learning, CRM Development, ERP Development, Custom Software Development, Additional Core Services, individual Service Detail pages |
| 🔲 **Placeholder — build these** | Home, About, Industries, Portfolio, Case Studies, Blog, Careers, Contact, FAQ, Testimonials, 404 |

Don't touch the files under `src/pages/services/` or their supporting
components (`src/components/sections`, `src/components/showcase`,
`src/data/services.js`, `src/data/servicesPart2.js`) — those are finished.

## Folder structure
```
src/
├─ data/
│  ├─ navigation.js         # Single source of truth for Navbar + mega menu
│  ├─ services.js           # Real service catalog (do not edit)
│  └─ servicesPart2.js      # Real service catalog, part 2 (do not edit)
├─ utils/
│  └─ image.js              # Placeholder image helper used by service pages
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.jsx          # Sticky navbar
│  │  ├─ MegaMenu.jsx        # Services mega menu
│  │  ├─ DropdownMenu.jsx    # "Resources" dropdown (Blog/FAQ/Testimonials)
│  │  ├─ MobileMenu.jsx      # Mobile hamburger menu
│  │  ├─ Footer.jsx          # Site footer (real)
│  │  ├─ PageTransition.jsx  # Route-change fade/slide (real)
│  │  └─ ScrollToTop.jsx     # Resets scroll on navigation (real)
│  ├─ common/
│  │  ├─ PagePlaceholder.jsx # "<Title> Page" placeholder screen
│  │  ├─ ScrollProgress.jsx  # Top scroll progress bar (real)
│  │  └─ ... (Breadcrumbs, Button, Icon, etc. — used by real service pages)
│  ├─ sections/              # Real section blocks used by service pages
│  └─ showcase/              # Real service showcase component
├─ pages/
│  ├─ Home.jsx, About.jsx, Industries.jsx, Portfolio.jsx,        ← placeholders
│  │  CaseStudies.jsx, Blog.jsx, Careers.jsx, Contact.jsx,
│  │  FAQ.jsx, Testimonials.jsx, NotFound.jsx
│  ├─ ServicesOverview.jsx                                       ← real
│  └─ services/
│     ├─ AIMachineLearning.jsx                                   ← real
│     ├─ CRMDevelopment.jsx                                      ← real
│     ├─ ERPDevelopment.jsx                                      ← real
│     ├─ CustomSoftwareDevelopment.jsx                           ← real
│     ├─ AdditionalCoreServices.jsx                              ← real
│     └─ ServiceDetail.jsx                                       ← real, dynamic /services/:slug
└─ App.jsx                    # Route configuration (all <Route> entries)
```

## Routes
| Path | Page | Status |
|---|---|---|
| `/` | Home | placeholder |
| `/about` | About | placeholder |
| `/services` | Services Overview | **real** |
| `/services/ai-machine-learning` | AI & Machine Learning | **real** |
| `/services/crm-development` | CRM Development | **real** |
| `/services/erp-development` | ERP Development | **real** |
| `/services/custom-software-development` | Custom Software Development | **real** |
| `/services/additional-core-services` | Additional Core Services | **real** |
| `/services/:slug` | Individual service detail | **real** |
| `/industries` | Industries | placeholder |
| `/portfolio` | Portfolio | placeholder |
| `/case-studies` | Case Studies | placeholder |
| `/blog` | Blog | placeholder |
| `/careers` | Careers | placeholder |
| `/contact` | Contact | placeholder |
| `/faq` | FAQ | placeholder |
| `/testimonials` | Testimonials | placeholder |
| `*` | 404 Not Found | placeholder |

## How each developer works
Placeholder pages currently look like this:
```jsx
import PagePlaceholder from "../components/common/PagePlaceholder";

export default function Home() {
  return <PagePlaceholder title="Home Page" />;
}
```
Replace the body of your assigned file — delete the `PagePlaceholder` usage
and write your own JSX. **Don't rename the file, its export, or its route
path** without telling the team, since `App.jsx` and `data/navigation.js`
reference those exact paths. **Don't edit anything under `pages/services/`**
— those pages are done.

## Adding a brand-new page (usually only the lead does this)
1. Create the page file in `src/pages`.
2. Import it and add a `<Route>` in `src/App.jsx`.
3. Add a matching entry to `src/data/navigation.js` so it shows up in the Navbar.

## Notes
- The Services item in the Navbar opens a **mega menu** listing the 5 real
  service pages above.
- The Resources item opens a lightweight **dropdown** for Blog / FAQ /
  Testimonials, keeping the top-level nav uncluttered.
- Colors, fonts and shadows live once in `tailwind.config.js` — reuse the
  `royal-*` color scale instead of hardcoding hex values.
- Service page images use `picsum.photos` placeholders (`src/utils/image.js`)
  — swap for real assets whenever you're ready.
