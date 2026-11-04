"use client";

import { useState } from "react";

const general = [
  [
    "What is escrow?",
    "Escrow is a neutral process that securely holds funds and documents until every agreed transaction condition is complete.",
  ],
  [
    "Why is escrow necessary?",
    "Escrow protects all parties by keeping the transaction funds and documents with an independent third party.",
  ],
  [
    "What is the timeline for escrow?",
    "Most transactions close within 30 to 60 days, depending on the agreement, financing, title work, and required documents.",
  ],
  [
    "Who chooses the escrow company?",
    "The parties may agree on an escrow company together, or the contract may identify the escrow holder.",
  ],
  [
    "What documents are needed during the escrow process?",
    "Common documents include identification, purchase agreements, loan documents, disclosures, and signed escrow instructions.",
  ],
  [
    "How are funds held and released in escrow?",
    "Funds are held securely and released only after the escrow holder has verified that written instructions and closing requirements are satisfied.",
  ],
];

const buyer = [
  "When will I know the exact amount of funds needed to close?",
  "When do I get the keys to my new home?",
  "Can I use a personal check for closing?",
  "How does an escrow account work for my mortgage?",
  "What are the advantages of having a mortgage escrow account?",
  "What are the disadvantages of a mortgage escrow account?",
];
const seller = [
  "How much will I clear from the sale of my property?",
  "When can I expect to move out?",
];
const fees = [
  "What are the escrow fees?",
  "What is title insurance and what does it cover?",
];
const process = [
  "How long does the signing appointment take?",
  "What will the escrow officer explain during my appointment?",
  "How do I get updates during the escrow process?",
  "What if I notice a mistake on the documents?",
];

function Question({ item }: { item: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-row ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{item[0]}</span>
        <b>{open ? "−" : "⌄"}</b>
      </button>
      {open && (
        <p>
          {item[1] ||
            "Please contact our escrow team for a detailed answer tailored to your transaction."}
        </p>
      )}
    </div>
  );
}
function List({ items }: { items: string[][] | string[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <Question key={index} item={Array.isArray(item) ? item : [item]} />
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-question-icon">?</div>
        <h1>FAQs for Sellers &amp; Buyers</h1>
      </section>
      <div className="faq-wave" />
      <section className="faq-content">
        <h2>General Escrow Questions</h2>
        <List items={general} />
        <div className="faq-columns">
          <article>
            <h2>Questions Related to the Buyer:</h2>
            <List items={buyer} />
          </article>
          <article>
            <h2>Questions Related to the Seller:</h2>
            <List items={seller} />
            <h2>Questions About Escrow Fees:</h2>
            <List items={fees} />
          </article>
        </div>
        <h2>General Escrow Process Questions</h2>
        <List items={process} />
      </section>
    </main>
  );
}
