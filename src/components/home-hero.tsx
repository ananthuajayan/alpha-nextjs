"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ChevronDown } from "@/components/icons";

const accordionItems = [
  {
    id: "gp-operating-system",
    title: "The AI operating system for GP practices",
    content:
      "Phones, letters and paperwork, in one system your staff stay in charge of.",
  },
  {
    id: "typing-paperwork",
    title: "Typing up paperwork",
    content:
      "Scanned forms, invoices and delivery notes turned into checked data.",
  },
  {
    id: "answering-phones",
    title: "Answering the phones",
    content:
      "Every call picked up and summarised. Urgent ones go straight to a person.",
  },
  {
    id: "sorting-letters",
    title: "Sorting letters and referrals",
    content:
      "Incoming post read, sorted and queued for your team to approve.",
  },
  {
    id: "customer-emails",
    title: "Replying to customer emails",
    content:
      "Draft replies written for you. Your team checks and sends.",
  },
  {
    id: "pricing-building-work",
    title: "Pricing up building work",
    content:
      "Bills of quantities drawn from plans in days, not weeks.",
  },
  {
    id: "orthodontic-referrals",
    title: "Orthodontic referrals",
    content:
      "Guided patient photos, with a clinician signing off. In clinical validation.",
  },
];

const stats = [
  {
    value: "£60k a year",
    label: "saved at a GP group",
  },
  {
    value: "98.3%",
    label: "of a batch done with no one typing",
  },
  {
    value: "7 to 5",
    label: "helpdesk staff needed",
  },
];

export function HomeHero() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = accordionItems.length - 1;
    let next: number | null = null;

    if (e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next !== null) {
      e.preventDefault();
      triggerRefs.current[next]?.focus();
    }
  };

  return (
    <header className="page-hero relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
      <div className="page-hero-grid" aria-hidden="true" />

      <div className="container relative z-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* LEFT SIDE CONTENT (STATIC) */}
          <div className="max-w-[620px]">
            <p className="text-xs sm:text-sm font-medium tracking-normal text-muted mb-3 sm:mb-4">
              For businesses where the owner still reads the invoices
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-bold tracking-[-0.035em] text-ink leading-[1.08] mb-5">
              AI that helps
              <br />
              your business
              <br />
              make more profit.
            </h1>

            <p className="text-[15px] sm:text-base leading-[1.65] text-ink-2 max-w-[52ch] mb-7">
              You didn't start your business to spend your evenings on
              paperwork, or to pay good people to retype things. We find the
              jobs that eat your team's time, hand them to AI, and keep a person
              on anything that matters. More of every pound you earn ends up as
              profit.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium text-[15px] rounded-brand hover:opacity-95 transition shadow-sm"
              >
                Book a chat
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-accent underline underline-offset-4 font-medium text-[15px] hover:opacity-85 transition"
              >
                See what we've done for others
              </Link>
            </div>

            {/* CAPTION */}
            <p className="text-[13px] sm:text-sm leading-relaxed text-muted max-w-[50ch] mb-8 lg:mb-10">
              Specialists in regulated industries and open-source AI. No jargon,
              no obligation, just a straight answer on whether AI is worth it for
              a business your size.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-line">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[13px] text-muted mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE ACCORDION CARD */}
          <aside
            className="w-full bg-white rounded-xl sm:rounded-2xl shadow-card overflow-hidden"
            aria-label="What we can take off your plate"
          >
            {/* Header */}
            <div className="px-5 bg-accent  pt-5 pb-2 sm:px-6 sm:pt-6 sm:pb-3 ">
              <h2 className="text-[15px] sm:text-base font-semibold tracking-normal text-white">
                What we can take off your plate
              </h2>
            </div>

            {/* Accordion list */}
            <div className="bg-transparent">
              {accordionItems.map((item, index) => { 
                const isOpen = openIndex === index;
                const triggerId = `${item.id}-trigger`;
                const panelId = `${item.id}-panel`;

                return (
                  <div key={item.id} className="bg-transparent">
                    <h3>
                      <button
                        ref={(el) => {
                          triggerRefs.current[index] = el;
                        }}
                        id={triggerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="group w-full text-left px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between gap-3 bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                      >
                        <span
                          className={`text-[14px] sm:text-[15px] leading-snug transition-colors duration-200 ${
                            isOpen
                              ? "text-accent font-semibold"
                              : "text-ink font-medium group-hover:text-accent"
                          }`}
                        >
                          {item.title}
                        </span>
                        <ChevronDown
                          size={15}
                          aria-hidden="true"
                          className={`shrink-0 transition-transform duration-300 ease-out ${
                            isOpen
                              ? "rotate-180 text-accent"
                              : "text-muted group-hover:text-ink"
                          }`}
                        />
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <p
                          className={`px-5 pb-4 sm:px-6 sm:pb-5 text-[13px] sm:text-[15px] leading-relaxed text-muted transition-all duration-300 ease-out ${
                            isOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 -translate-y-1"
                          }`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Banner */}
            <Link
              href="/contact"
              className="block bg-accent text-white p-5 sm:p-6 transition hover:opacity-95 group"
            >
              <div className="font-semibold text-white text-[15px] sm:text-base tracking-normal group-hover:underline">
                Not sure where to start?
              </div>
              <div className="text-xs sm:text-[13px] text-white/90 mt-1 leading-snug">
                Most owners aren't. We'll look at your week and tell you.
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </header>
  );
}
