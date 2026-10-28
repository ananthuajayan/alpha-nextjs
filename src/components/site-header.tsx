"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled ? "true" : "false"}
      >
        <div className="container header-inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                className="nav-link"
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <Link className="btn btn--accent header-cta" href={site.cta.href}>
              {site.cta.label}
              <ArrowUpRight size={14} />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id="mobile-menu"
        className="mobile-panel"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          {site.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
            >
              <span className="mobile-nav-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
        <div className="mobile-panel-foot">
          <Link className="btn btn--accent" href={site.cta.href}>
            {site.cta.label}
            <ArrowUpRight size={14} />
          </Link>
          <a className="mobile-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p>UK AI automation for regulated industries.</p>
        </div>
      </div>
    </>
  );
}
