import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { ArrowUpRight, MailIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              AI automation for regulated industries. Built in the UK, proven
              in production.
            </p>
            <a className="footer-email" href={`mailto:${site.email}`}>
              <MailIcon />
              {site.email}
            </a>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Services</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Company</h2>
            <ul>
              <li>
                <Link href="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link href="/how-we-work">How we work</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col--cta">
            <h2 className="footer-heading">Start with an audit</h2>
            <p>
              A fixed-fee map of what to automate, what it is worth, and what to
              do first.
            </p>
            <Link className="footer-cta" href="/contact">
              Book an AI Audit
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="footer-legal">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/accessibility">Accessibility</Link>
            </li>
            <li>
              <span>References available on request</span>
            </li>
          </ul>
        </div>

        <p className="footer-note">
          Alpha2Omega works with NHS organisations, financial services firms,
          document management bureaux, construction and logistics businesses.
          Client names are withheld; every case study is anonymised to a sector
          description.
        </p>

        <div className="footer-word" aria-hidden="true" />
      </div>
    </footer>
  );
}
