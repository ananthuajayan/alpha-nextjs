"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

export type HeroSolution = {
  id: string;
  menuTitle: string;
  subtitle: string;
  eyebrow: string;
  title: string;
  deck: string;
  caption: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  highlightStatIndex?: number;
  isBottomHighlight?: boolean;
};

const solutions: HeroSolution[] = [
  {
    id: "gp-operating-system",
    menuTitle: "The AI operating system for GP practices",
    subtitle:
      "Phones, letters and paperwork, in one system your staff stay in charge of.",
    eyebrow: "The AI operating system for GP practices",
    title: "The AI operating system for GP practices",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/gp-surgeries",
    },
    highlightStatIndex: 0,
  },
  {
    id: "typing-paperwork",
    menuTitle: "Typing up paperwork",
    subtitle:
      "Scanned forms, invoices and delivery notes turned into checked data.",
    eyebrow: "Typing up paperwork",
    title: "Typing up paperwork",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/data-extraction",
    },
    highlightStatIndex: 1,
  },
  {
    id: "answering-phones",
    menuTitle: "Answering the phones",
    subtitle:
      "Every call picked up and summarised. Urgent ones go straight to a person.",
    eyebrow: "Answering the phones",
    title: "Answering the phones",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/gp-surgeries/voice-agents",
    },
    highlightStatIndex: 0,
  },
  {
    id: "sorting-letters",
    menuTitle: "Sorting letters and referrals",
    subtitle:
      "Incoming post read, sorted and queued for your team to approve.",
    eyebrow: "Sorting letters and referrals",
    title: "Sorting letters and referrals",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/gp-surgeries",
    },
    highlightStatIndex: 0,
  },
  {
    id: "customer-emails",
    menuTitle: "Replying to customer emails",
    subtitle: "Draft replies written for you. Your team checks and sends.",
    eyebrow: "Replying to customer emails",
    title: "Replying to customer emails",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/other-work/deflect",
    },
    highlightStatIndex: 2,
  },
  {
    id: "pricing-building-work",
    menuTitle: "Pricing up building work",
    subtitle: "Bills of quantities drawn from plans in days, not weeks.",
    eyebrow: "Pricing up building work",
    title: "Pricing up building work",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/other-work/bqai",
    },
    highlightStatIndex: 1,
  },
  {
    id: "orthodontic-referrals",
    menuTitle: "Orthodontic referrals",
    subtitle:
      "Guided patient photos, with a clinician signing off. In clinical validation.",
    eyebrow: "Orthodontic referrals",
    title: "Orthodontic referrals",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/services/orthodontics",
    },
    highlightStatIndex: 0,
  },
  {
    id: "not-sure-where-to-start",
    menuTitle: "Not sure where to start?",
    subtitle: "Most owners aren't. We'll look at your week and tell you.",
    eyebrow: "For businesses where the owner still reads the invoices",
    title: "AI that helps your business make more profit.",
    deck: "We find the jobs that eat your team's time, hand them to AI, and keep a person on anything that matters.",
    caption:
      "Specialists in regulated industries and open-source AI. No jargon, no obligation, just a straight answer on whether AI is worth it for a business your size.",
    primaryCta: { label: "Book a chat", href: "/contact" },
    secondaryCta: {
      label: "See what we've done for others",
      href: "/case-studies",
    },
    isBottomHighlight: true,
  },
];

const stats = [
  { value: "£60k a year", label: "saved at a GP group" },
  { value: "98.3%", label: "of a batch done with no one typing" },
  { value: "7 to 5", label: "helpdesk staff needed" },
];

export function HomeHero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const activeSolution = solutions[selectedIndex] ?? solutions[0];

  // Screen size check for mobile layout & auto-slider
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSelect = useCallback(
    (index: number) => {
      startTransition(() => {
        setSelectedIndex(index);
      });
    },
    [startTransition]
  );

  const handlePrev = useCallback(() => {
    startTransition(() => {
      setSelectedIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    });
  }, [startTransition]);

  const handleNext = useCallback(() => {
    startTransition(() => {
      setSelectedIndex((prev) => (prev + 1) % solutions.length);
    });
  }, [startTransition]);

  // Auto-play slider on mobile (5.5s interval)
  useEffect(() => {
    if (!isMobile || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isMobile, isPaused, handleNext, selectedIndex]);

  // Touch gesture support for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold: 40px
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <header className="page-hero home-hero">
      <div className="page-hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="home-hero-split">
          {/* LEFT SIDE CONTENT & MOBILE SLIDER */}
          <div
            className="home-hero-left"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              key={activeSolution.id}
              className="home-hero-slide-content"
              data-pending={isPending ? "true" : "false"}
            >
              <div className="home-hero-eyebrow-box">
                <SectionLabel>{activeSolution.eyebrow}</SectionLabel>
              </div>

              <h1 className="home-hero-title">
                {activeSolution.title}
              </h1>

              {/* Subtitle from the selected item */}
              <p className="home-hero-selected-subtitle">
                {activeSolution.subtitle}
              </p>

              <p className="home-hero-deck">
                {activeSolution.deck}
              </p>

              <div className="home-hero-actions">
                <Link
                  className="btn btn--accent btn--lg home-hero-btn"
                  href={activeSolution.primaryCta.href}
                >
                  {activeSolution.primaryCta.label}
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  className="home-hero-text-link"
                  href={activeSolution.secondaryCta.href}
                >
                  {activeSolution.secondaryCta.label}
                  <ArrowRight size={15} />
                </Link>
              </div>

              <p className="home-hero-caption">
                {activeSolution.caption}
              </p>
            </div>

            {/* MOBILE SLIDER DOTS (Only visible <= 960px) */}
            <div
              className="home-hero-slider-bar"
              aria-label="Solutions carousel"
            >
              <div
                className="home-hero-slider-dots"
                role="tablist"
                aria-label="Choose solution"
              >
                {solutions.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === selectedIndex}
                    aria-label={`Solution ${idx + 1}: ${item.menuTitle}`}
                    className={`home-hero-slider-dot ${
                      idx === selectedIndex ? "home-hero-slider-dot--active" : ""
                    }`}
                    onClick={() => handleSelect(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE MENU CARD: ONLY TITLES (Hidden on mobile via CSS) */}
          <nav
            className="home-hero-menu-card"
            aria-label="What we can take off your plate"
          >
            <div className="home-hero-menu-header">
              <h2>What we can take off your plate</h2>
            </div>

            <div className="home-hero-menu-list">
              {solutions.map((item, index) => {
                const isSelected = selectedIndex === index;

                if (item.isBottomHighlight) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`home-hero-menu-item home-hero-menu-item--bottom ${
                        isSelected ? "home-hero-menu-item--active" : ""
                      }`}
                      onClick={() => handleSelect(index)}
                      aria-pressed={isSelected}
                    >
                      <span className="home-hero-menu-title">
                        {item.menuTitle}
                      </span>
                      <ArrowRight size={14} className="home-hero-menu-arrow" />
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`home-hero-menu-item ${
                      isSelected ? "home-hero-menu-item--active" : ""
                    }`}
                    onClick={() => handleSelect(index)}
                    aria-pressed={isSelected}
                  >
                    <span className="home-hero-menu-title">
                      {item.menuTitle}
                    </span>
                    <ArrowRight size={14} className="home-hero-menu-arrow" />
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* STATS - SPANS FULL WIDTH UNDERNEATH */}
        <div className="home-hero-stats" aria-label="What clients have seen">
          {stats.map((stat, i) => {
            const isHighlighted =
              activeSolution.highlightStatIndex === undefined ||
              activeSolution.highlightStatIndex === i;
            return (
              <div
                key={stat.label}
                className="home-hero-stat-col"
                data-highlight={isHighlighted ? "true" : "false"}
              >
                <strong className="home-hero-stat-value">{stat.value}</strong>
                <span className="home-hero-stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
