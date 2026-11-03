"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { serviceDropdownItems, site } from "@/content/site";
import {
  ArrowUpRight,
  ChevronDown,
  CloseIcon,
  MenuIcon,
} from "@/components/icons";
import { Logo } from "@/components/logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesDropdownOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesDropdownOpen]);

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

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled ? "true" : "false"}
      >
        <div className="container header-inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary">
            {site.nav.map((item) => {
              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="nav-dropdown-wrapper"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="nav-dropdown-trigger-row">
                      <Link
                        className="nav-link nav-link--with-dropdown"
                        href={item.href}
                        aria-current={
                          isActive(pathname, item.href) ? "page" : undefined
                        }
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="nav-dropdown-btn"
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        aria-label="Toggle services menu"
                        onClick={() => setServicesDropdownOpen((v) => !v)}
                      >
                        <ChevronDown
                          size={12}
                          className={`nav-dropdown-chevron ${
                            servicesDropdownOpen
                              ? "nav-dropdown-chevron--open"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className="nav-dropdown-menu"
                      data-open={servicesDropdownOpen ? "true" : "false"}
                      role="menu"
                      aria-label="Services dropdown"
                    >
                      <div className="nav-dropdown-head">
                        <span className="nav-dropdown-kicker">
                          Capabilities & Solutions
                        </span>
                      </div>
                      <div className="nav-dropdown-list">
                        {serviceDropdownItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            role="menuitem"
                            className="nav-dropdown-item"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="nav-dropdown-item-header">
                              <span className="nav-dropdown-item-index">
                                {subItem.index}
                              </span>
                              <span className="nav-dropdown-item-title">
                                {subItem.label}
                              </span>
                            </div>
                            <p className="nav-dropdown-item-desc">
                              {subItem.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="nav-dropdown-foot">
                        <Link
                          href="/services"
                          className="nav-dropdown-foot-link"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span>All Services & Delivery Models</span>
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  className="nav-link"
                  href={item.href}
                  aria-current={
                    isActive(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
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
          {site.nav.map((item, index) => {
            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="mobile-nav-group"
                  style={{
                    transitionDelay: open ? `${80 + index * 45}ms` : "0ms",
                  }}
                >
                  <div className="mobile-nav-link-row">
                    <Link
                      href={item.href}
                      className="mobile-nav-link"
                      aria-current={
                        isActive(pathname, item.href) ? "page" : undefined
                      }
                      onClick={() => setOpen(false)}
                    >
                      <span className="mobile-nav-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="mobile-accordion-toggle"
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle Services submenu"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      <ChevronDown
                        size={18}
                        className={`mobile-accordion-chevron ${
                          mobileServicesOpen
                            ? "mobile-accordion-chevron--open"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className="mobile-subnav"
                    data-open={mobileServicesOpen ? "true" : "false"}
                  >
                    {serviceDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="mobile-subnav-link"
                        onClick={() => setOpen(false)}
                      >
                        <span className="mobile-subnav-title">
                          {subItem.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                aria-current={
                  isActive(pathname, item.href) ? "page" : undefined
                }
                style={{
                  transitionDelay: open ? `${80 + index * 45}ms` : "0ms",
                }}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-nav-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
                <ArrowUpRight size={18} />
              </Link>
            );
          })}
        </nav>
        <div className="mobile-panel-foot">
          <Link className="btn btn--accent" href={site.cta.href}>
            {site.cta.label}
            <ArrowUpRight size={14} />
          </Link>
          <a className="mobile-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="mobile-email" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <p>UK AI automation for regulated industries.</p>
        </div>
      </div>
    </>
  );
}
