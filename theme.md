# Professional Developer Portfolio — Build Prompt (Blue & White Theme)

## Brief

Act as a senior frontend developer and UI/UX designer building a personal developer portfolio that reads as hand-crafted and specific to its owner — not a recolored SaaS template. The palette is strictly blue + white/neutral. Distinctiveness has to come from typography, spacing, and one signature interaction — not from adding extra colors, stock gradients, or scattered motion.

**Design guardrails**
- Real copy in the site owner's voice — plain, specific, no lorem-ipsum-sounding lines.
- Spend the "boldness budget" in one place: the scroll-glow text effect below. Keep everything else quiet and disciplined.
- No extra accent colors beyond the token table.
- Text animates on scroll; images and cards do not — they only react on hover (see hard constraint below).

## Color tokens — blue + white/neutral only

| Token | Hex | Use |
|---|---|---|
| `bg-base` | `#FFFFFF` | Main background |
| `bg-soft` | `#F8FAFC` | Alternating section background |
| `bg-deep` | `#0B1220` | Dark section / footer background |
| `blue-primary` | `#2563EB` | Buttons, links, active states |
| `blue-hover` | `#1D4ED8` | Hover/active state of the above |
| `blue-soft` | `#93C5FD` / `#DBEAFE` | Tags, borders, glow accents |
| `text-on-light` | `#0F172A` | Body text on white/soft backgrounds |
| `text-on-dark` | `#E2E8F0` | Body text on deep background |

Maintain WCAG-AA contrast throughout.

## Typography

- **Display/heading face** — character, used with restraint (hero line + section headers only, not the whole page): a distinctive grotesk like Space Grotesk or General Sans.
- **Body face** — clean, quiet sans-serif: Inter or Manrope.
- **Utility/mono face** — JetBrains Mono or Fira Code, used only for tags, badges, and code-style accents. This is what signals "developer" without extra graphics.

## Page structure

1. **Navbar** — fixed/sticky, logo left, links right; transparent → blurred-white background on scroll; active link gets an animated underline.
2. **Hero** — name, role, one-line pitch, two CTA buttons; soft blue gradient or blurred blob shapes behind the text.
3. **About**
4. **Skills** — tech stack as pill/tag badges.
5. **Projects** — horizontal left-to-right scroll gallery (see below).
6. **Experience** — timeline layout (the one place numbered/ordered markers belong, since it's genuinely sequential).
7. **Contact** + footer with social links.

## Horizontal scroll section (Projects)

- Project cards scroll left-to-right in their own row, independent of the page's vertical scroll.
- Implementation: `overflow-x:auto; scroll-snap-type:x mandatory;`, each card `scroll-snap-align:start`, scrollbar hidden, drag/swipe/trackpad all supported — or, for a more premium feel, a pinned section where vertical scroll drives horizontal movement (GSAP `ScrollTrigger` horizontal-scroll pattern).
- Add left/right arrow buttons for desktop.
- Cards stay visually static until hovered (see hard constraint below).

## Signature interaction — scroll-triggered text glow

As the user scrolls down, headings and paragraphs "light up" with a glow that sweeps left → right as they enter the viewport. This is the single memorable element of the site — don't dilute it by adding more motion elsewhere, and this is text-only.

- Trigger with `IntersectionObserver` (or GSAP `ScrollTrigger`) when a text block enters view.
- Suggested technique — animated gradient text:

```css
.glow-text {
  background: linear-gradient(90deg, #0F172A 0%, #60A5FA 45%, #93C5FD 55%, #0F172A 100%);
  background-size: 250% 100%;
  -webkit-background-clip: text;
  color: transparent;
  background-position: 100% 0;
  transition: background-position 0.9s ease-out, text-shadow 0.9s ease-out;
}
.glow-text.in-view {
  background-position: 0% 0;
  text-shadow: 0 0 14px rgba(59, 130, 246, 0.55);
}
@media (prefers-reduced-motion: reduce) {
  .glow-text { transition: none; background-position: 0% 0; }
}
```

- For extra polish, split headings into words and stagger the reveal left-to-right (~60ms between words) with GSAP SplitText or Framer Motion `staggerChildren`.
- Optional: hero subtitle uses a typewriter/cycling-text effect — still text-only, no image motion.
- Keep it subtle: 0.6–0.9s ease-out, plays once per element, respects `prefers-reduced-motion`.

## Hard constraint — images & cards get hover-only motion

- No scroll/entrance animation on images, project cards, or skill cards — they render static and stay static while the page scrolls.
- The only motion allowed on them is on **hover**: subtle scale (1.03–1.05), soft shadow lift, thin blue glow border, 200–300ms ease transition.
- Keep this split clean: text animates, visuals stay still until touched.

## Professional developer touches

- Small dev-flavored details: `</>`-style badges, a terminal/code-block component in the About section, skill pills styled like syntax tags.
- Consistent 8px spacing scale, generous whitespace, one consistent corner-radius system.
- Smooth page scrolling, scroll-spy nav that highlights the current section.
- Fully responsive (mobile-first), accessible (semantic HTML, visible focus states, alt text), performant (lazy-loaded images, no layout shift).

## Copy & voice

- Active voice, plain verbs, sentence case, no filler.
- Name things by what a visitor recognizes, not by how the system is built.
- Keep tone consistent across the whole site — the vocabulary is the signposting.

## Quality floor

- Responsive down to mobile.
- Visible keyboard focus states throughout.
- `prefers-reduced-motion` respected everywhere motion is used.
- No layout shift, lazy-loaded images.

## Suggested stack

React + Tailwind CSS + Framer Motion, or GSAP/ScrollTrigger for the animation logic. Plain HTML/CSS/JS works too — keep the same visual and animation logic either way.