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
    <div className="legal-page">
      <div className="container legal-grid">
        <aside className="legal-aside">
          <p className="eyebrow">
            <span aria-hidden="true">//</span>Access
          </p>
          <h1>Accessibility statement</h1>
          <p>Last reviewed 22 October 2026</p>
        </aside>

        <div className="legal-prose">
          <h2>Our target</h2>
          <p>
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2
            at Level AA across this website. Accessibility is part of the build,
            not a separate pass at the end.
          </p>

          <h2>What we have done</h2>
          <ul>
            <li>
              Semantic HTML with landmarks, one main heading per page and a skip
              link to the content.
            </li>
            <li>
              Keyboard-operable navigation, menus, filters, forms and disclosure
              panels, with visible focus styles.
            </li>
            <li>
              Colour combinations chosen for contrast on the white
              background and on dark bands.
            </li>
            <li>
              Motion that respects <code>prefers-reduced-motion</code>, and no
              autoplaying media.
            </li>
            <li>
              Responsive layouts tested at narrow widths, with no horizontal
              scrolling at 375 pixels.
            </li>
            <li>
              Form fields with persistent labels, described errors and a status
              message after submission.
            </li>
            <li>
              Product illustrations labelled as illustrations with sample data,
              with screen-reader descriptions.
            </li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            The site is content-led and uses very little third-party code. We
            review new sections as they are added. If a component falls short,
            we want to know so we can fix it rather than leave it in the
            backlog.
          </p>

          <h2>Report a barrier</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> with the page
            address and a short description of the problem. If you use assistive
            technology, tell us which one; it helps us reproduce the issue. We
            will reply directly and tell you what we are doing about it.
          </p>

          <h2>Assessment approach</h2>
          <p>
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
