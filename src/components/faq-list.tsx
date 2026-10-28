import { faqs } from "@/content/faqs";

export function FaqList({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
