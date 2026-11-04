import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Alpha2Omega's accessibility statement: our target standard, what we have done, and how to report a barrier.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-8 md:gap-14 lg:gap-20 items-start">
        <aside className="static md:sticky md:top-[calc(var(--header-h)+32px)] pb-5 md:pb-0 border-b border-line md:border-b-0">
          <p className="flex items-center gap-2 font-mono text-xs sm:text-[13px] font-medium tracking-[0.08em] uppercase text-accent mb-2.5">
            <span aria-hidden="true">//</span>Access
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-ink">
            Accessibility statement
          </h1>
          <p className="mt-2.5 font-mono text-xs sm:text-[13px] tracking-[0.07em] uppercase text-muted">
            Last reviewed 22 October 2026
          </p>
        </aside>

        <div className="max-w-[66ch] text-ink-2">
          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Our target
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2
            at Level AA across this website. Accessibility is part of the build,
            not a separate pass at the end.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            What we have done
          </h2>
          <ul className="mt-2.5 space-y-2.5">
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Semantic HTML with landmarks, one main heading per page and a skip
              link to the content.
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Keyboard-operable navigation, menus, filters, forms and disclosure
              panels, with visible focus styles.
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Colour combinations chosen for contrast on the white
              background and on dark bands.
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Motion that respects <code className="px-1.5 py-0.5 bg-paper-tint border border-line rounded text-xs font-mono">prefers-reduced-motion</code>, and no
              autoplaying media.
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Responsive layouts tested at narrow widths, with no horizontal
              scrolling at 375 pixels.
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Form fields with persistent labels, described errors and a status
              message after submission.
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              Product illustrations labelled as illustrations with sample data,
              with screen-reader descriptions.
            </li>
          </ul>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Known limitations
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            The site is content-led and uses very little third-party code. We
            review new sections as they are added. If a component falls short,
            we want to know so we can fix it rather than leave it in the
            backlog.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Report a barrier
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            Email <a className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href={`mailto:${site.email}`}>{site.email}</a> with the page
            address and a short description of the problem. If you use assistive
            technology, tell us which one; it helps us reproduce the issue. We
            will reply directly and tell you what we are doing about it.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Assessment approach
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            This statement is based on our own design and build review, keyboard
            testing and browser checks. It is not a third-party audit
            certificate. Where a formal audit is required for a client
            engagement, we arrange one separately.
          </p>
        </div>
      </div>
    </div>
  );
}
