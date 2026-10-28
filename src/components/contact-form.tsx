"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { site } from "@/content/site";
import { ArrowUpRight, CheckIcon } from "@/components/icons";

type Fields = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  consent: boolean;
  website: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  interest: "AI Audit",
  message: "",
  consent: false,
  website: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (!fields.name.trim()) errors.name = "Please tell us your name.";
  if (!fields.organisation.trim())
    errors.organisation = "Please add your organisation.";
  if (!fields.email.trim()) {
    errors.email = "Please add an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "That email address does not look right.";
  }
  if (!fields.message.trim())
    errors.message = "Please tell us a little about the work.";
  if (!fields.consent) errors.consent = "Please confirm we can reply to you.";

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const formRef = useRef<HTMLFormElement>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstKey = Object.keys(nextErrors)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstKey}"]`)
        ?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <span className="form-success-mark">
          <CheckIcon size={26} />
        </span>
        <h3>Thank you — your note is with us.</h3>
        <p>
          A senior member of the team will reply directly. If it is easier, you
          can email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <button
          type="button"
          className="text-link"
          onClick={() => {
            setFields(initialFields);
            setStatus("idle");
          }}
        >
          Send another enquiry
          <ArrowUpRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="form-row form-row--two">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p className="form-error" id="name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="organisation">Organisation</label>
          <input
            id="organisation"
            name="organisation"
            value={fields.organisation}
            onChange={(event) => update("organisation", event.target.value)}
            autoComplete="organization"
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={
              errors.organisation ? "organisation-error" : undefined
            }
          />
          {errors.organisation ? (
            <p className="form-error" id="organisation-error">
              {errors.organisation}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-row form-row--two">
        <div className="form-field">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p className="form-error" id="email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="phone">
            Phone <span className="form-optional">Optional</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="interest">What are you interested in?</label>
        <div className="select-wrap">
          <select
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={(event) => update("interest", event.target.value)}
          >
            <option>AI Audit</option>
            <option>Document intelligence</option>
            <option>AI voice agents</option>
            <option>Workflow automation</option>
            <option>Not sure yet</option>
          </select>
          <span className="select-arrow" aria-hidden="true">
            ↓
          </span>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">What is slowing your team down?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
        <p className="form-hint" id="message-hint">
          Volume, systems, document types, or the process you would most like
          to disappear. No detail is too small.
        </p>
        {errors.message ? (
          <p className="form-error" id="message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="form-consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={fields.consent}
          onChange={(event) => update("consent", event.target.checked)}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <label htmlFor="consent">
          I&apos;m happy for Alpha2Omega to reply to this enquiry. See the{" "}
          <Link href="/privacy">privacy notice</Link>.
        </label>
      </div>
      {errors.consent ? (
        <p className="form-error" id="consent-error">
          {errors.consent}
        </p>
      ) : null}

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="form-submit">
        <button
          className="btn btn--accent btn--lg"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <ArrowUpRight size={15} />
        </button>
        <p>We reply directly. No sales sequence, no gated content.</p>
      </div>

      {status === "error" ? (
        <p className="form-error form-error--box" role="alert">
          Something went wrong sending the form. Please email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> and we
          will pick it up from there.
        </p>
      ) : null}
    </form>
  );
}
