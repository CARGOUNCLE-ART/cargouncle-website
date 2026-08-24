# CargoUncle PAN-India SEO Architecture

## Objective
Build organic visibility across India for logistics, goods transportation, FTL/PTL, truck booking, packers & movers, household shifting, office shifting, car transport and bike transport.

## URL architecture
- /services/ — national service hub
- /services/<service>/ — core service pages
- /locations/ — India coverage hub
- /locations/<state>/ — state hubs
- /locations/<state>/<city>/ — city pages only where useful, unique and service-relevant
- /routes/<origin>-to-<destination>/ — high-demand route pages only
- /blog/ — informational content clusters

## Page rules
1. Every indexable page must have unique search intent and useful content.
2. Do not generate thin city/state combinations merely by replacing place names.
3. Every page gets one canonical URL, descriptive title/meta, one clear H1, useful internal links and relevant structured data.
4. Location pages should explain actual coverage/services, not make unsupported claims about offices or facilities.
5. Route pages should focus on transport options, planning factors, vehicle/load types, and quote conversion rather than fabricated prices or transit times.
6. Keep WhatsApp CTA and website quote form available as separate conversion paths.

## Internal linking model
National service hub -> service pages -> relevant state/city pages -> relevant route guides.
Blog articles -> relevant service pages and location/route pages.
Location pages -> relevant services and useful route pages.
Breadcrumbs should reflect the hierarchy.

## Technical SEO gates before publishing
- URL returns 200 and is internally linked.
- No accidental noindex.
- Canonical points to the preferred URL.
- Sitemap includes only canonical indexable URLs.
- robots.txt does not block important pages.
- Valid JSON-LD for the page type.
- Mobile layout and Core Web Vitals checked.
- No broken internal links.
- Images have descriptive alt text and reasonable file sizes.

## Content clusters
### Logistics
Goods transportation, freight transport, truck booking, FTL, PTL, part-load, full-load, intercity transportation.
### Relocation
Packers and movers, house shifting, office shifting, household goods, packing/loading/unloading.
### Vehicle movement
Car transport and bike transport.
### Route intent
Only build route pages after validating demand and ensuring genuinely useful, route-specific content.

## Launch order
1. Stabilize existing technical SEO and indexing.
2. Optimize existing service pages.
3. Build state/city coverage from real service demand.
4. Build priority route pages.
5. Expand blog clusters and internal links.
6. Submit/update sitemap and request indexing for important new/updated URLs.
7. Monitor Search Console indexing, queries, CTR and conversions before expanding further.
