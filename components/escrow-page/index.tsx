"use client";

import { useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

export type EscrowPageData = {
  slug: string;
  navLabel: string;
  title: string;
  intro: string;
  intro2: string;
  heroImage: string;
  heroHeading: string;
  heroCopy: string;
  typeHeading: string;
  typeIntro: string;
  cards: { title: string; text: string; image: string }[];
  processHeading: string;
  process: string[];
  trustHeading: string;
  trust: { title: string; text: string }[];
  splitImage: string;
  splitHeading: string;
  splitCopy: string;
  calloutHeading: string;
  calloutCopy: string;
};

const imageBase = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/";

export const pages: Record<string, EscrowPageData> = {
  realEstate: {
    slug: "real-estate",
    navLabel: "Real Estate",
    title:
      "REAL ESTATE ESCROW SERVICES FOR BUYERS, SELLERS, AND AGENTS ACROSS CALIFORNIA",
    intro:
      "Whether you are buying, selling, or refinancing a home in Los Angeles County or anywhere in California, our experienced team makes every transaction clear, secure, and seamless.",
    intro2:
      "From escrow coordination to document review, Sepulveda Escrow Corporation provides trusted support for residential and commercial real estate transactions.",
    heroImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
    heroHeading: "What Is Escrow in a California Real Estate Transaction?",
    heroCopy:
      "Escrow is a neutral third-party service that protects both buyers and sellers while the terms of a real estate transaction are completed. We coordinate documents, funds, inspections, and closing requirements.",
    typeHeading: "Types of Real Estate Escrows We Handle",
    typeIntro:
      "California buyers, sellers, agents, and lenders trust our team with transactions of every size.",
    cards: [
      {
        title: "Residential Real Estate Escrows",
        text: "Clear guidance for buyers and sellers navigating a home purchase or sale.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
      },
      {
        title: "Commercial Real Estate",
        text: "Detailed coordination for commercial properties and investment transactions.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-business-escrows-2026-11-03-18_47_36.png-w1Ql0jlJOmUJHxTlK1mmG3Tdg9FPQo.jpeg",
      },
      {
        title: "For Sale By Owner",
        text: "Professional escrow support even when no agent is involved.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-loan-escrows-2026-11-03-18_48_07.png-FnqVkXPEsz0GrQaSkGEaXk3o2ekCmh.jpeg",
      },
      {
        title: "Vacant Land & Investment",
        text: "Secure handling for land, development, and investment property sales.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-mobile-home-escrows-2026-11-03-18_48_38.png-apB4kZSsZ24kPgTU4Kq3bIZQjMHZ1g.jpeg",
      },
    ],
    processHeading: "Our Process: What to Expect From Open to Close",
    process: [
      "Escrow Is Opened",
      "Coordination With All Parties",
      "Document Review and Compliance",
      "Closing and Disbursement",
    ],
    trustHeading:
      "Why Work With Sepulveda Escrow for Your Real Estate Transaction?",
    trust: [
      {
        title: "Local Expertise",
        text: "Knowledgeable guidance from a team rooted in California real estate.",
      },
      {
        title: "Licensed and Independent",
        text: "A neutral partner focused on protecting every party.",
      },
      {
        title: "Experienced With All Deal Sizes",
        text: "From simple purchases to complex closings.",
      },
      {
        title: "Secure and Transparent",
        text: "Clear communication and careful document handling.",
      },
    ],
    splitImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
    splitHeading: "We Serve All of California—With a Personal Touch",
    splitCopy:
      "Our experienced team is ready to help you move confidently through your next transaction.",
    calloutHeading: "Ready to Open Escrow? Let’s Make It Simple.",
    calloutCopy:
      "Connect with our team for responsive, knowledgeable escrow support.",
  },
  business: {
    slug: "business",
    navLabel: "Business Escrow",
    title:
      "BUSINESS ESCROW SERVICES FOR BULK SALES AND TRANSFERS THROUGHOUT CALIFORNIA",
    intro:
      "Buying or selling a business? Our team helps coordinate business escrow transactions across California with care and confidentiality.",
    intro2:
      "We understand the detail and timing required to transfer a business smoothly.",
    heroImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-business-escrows-2026-11-03-18_47_36.png-w1Ql0jlJOmUJHxTlK1mmG3Tdg9FPQo.jpeg",
    heroHeading: "What Is a Business or Bulk Sale Escrow?",
    heroCopy:
      "Business escrow protects buyers and sellers while assets, inventory, contracts, licenses, and funds are reviewed and transferred.",
    typeHeading: "Bulk Sale Escrows",
    typeIntro: "Specialized support for California business transfers.",
    cards: [
      {
        title: "Restaurant and Food Business Sales",
        text: "Keep the details organized from purchase agreement to closing.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-business-escrows-2026-11-03-18_47_36.png-w1Ql0jlJOmUJHxTlK1mmG3Tdg9FPQo.jpeg",
      },
      {
        title: "Retail and Franchise Transfers",
        text: "Coordinate landlord, lender, and regulatory requirements.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
      },
      {
        title: "Professional Services",
        text: "A confidential, careful process for every business sale.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-loan-escrows-2026-11-03-18_48_07.png-FnqVkXPEsz0GrQaSkGEaXk3o2ekCmh.jpeg",
      },
    ],
    processHeading: "Our Escrow Process for Business Transfers",
    process: [
      "Escrow Opening",
      "Notice to Creditors",
      "Coordination & Compliance",
      "Final Closing",
    ],
    trustHeading: "Why California Businesses Trust Sepulveda Escrow",
    trust: [
      {
        title: "Licensed and Regulated",
        text: "A careful, compliant process built around California requirements.",
      },
      {
        title: "Full-State Coverage",
        text: "Local knowledge with statewide reach.",
      },
      {
        title: "Friendly, Knowledgeable Support",
        text: "Responsive service from people who understand your transaction.",
      },
    ],
    splitImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-business-escrows-2026-11-03-18_47_36.png-w1Ql0jlJOmUJHxTlK1mmG3Tdg9FPQo.jpeg",
    splitHeading: "Serving California’s Business Community With Integrity",
    splitCopy: "We keep communication clear and every step moving forward.",
    calloutHeading: "Let’s Talk About Your Business Transaction",
    calloutCopy:
      "Get thoughtful escrow guidance for your next sale or transfer.",
  },
  liquor: {
    slug: "liquor",
    navLabel: "Liquor Escrow",
    title: "SMOOTH & SECURE LIQUOR LICENSE ESCROW SERVICES ACROSS CALIFORNIA",
    intro:
      "Transferring a liquor license in California requires precision, compliance, and coordination.",
    intro2:
      "Sepulveda Escrow specializes in liquor license escrow services for buyers, sellers, and agents.",
    heroImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-liquor-license-escrows-2026-11-03-18_47_01.png-Ci2xY0ixY69am3Tw7go1lnM0VJgveu.jpeg",
    heroHeading: "Why You Need Escrow for a Liquor License Transfer",
    heroCopy:
      "Our team helps coordinate the California Department of Alcoholic Beverage Control process while protecting all parties.",
    typeHeading: "Liquor License Transfers We Handle",
    typeIntro: "Support for a wide range of liquor license transactions.",
    cards: [
      {
        title: "Type 21—Off-Sale General",
        text: "Guidance for retail liquor license transfers.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-liquor-license-escrows-2026-11-03-18_47_01.png-Ci2xY0ixY69am3Tw7go1lnM0VJgveu.jpeg",
      },
      {
        title: "Type 48—Bar and Nightclub",
        text: "Coordinate complex transfer requirements.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-business-escrows-2026-11-03-18_47_36.png-w1Ql0jlJOmUJHxTlK1mmG3Tdg9FPQo.jpeg",
      },
      {
        title: "Type 41—Beer and Wine",
        text: "A clear process from agreement to approval.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
      },
    ],
    processHeading: "Our Step-by-Step Process for Liquor License Escrow",
    process: [
      "Escrow Opening With Agreement in Place",
      "Application and ABC Submission",
      "Compliance and Conditions",
      "License Approval and Closing",
    ],
    trustHeading:
      "Why Californians Choose Sepulveda Escrow for Liquor License Transfers",
    trust: [
      {
        title: "Experience That Matters",
        text: "A proven process for complex transfers.",
      },
      {
        title: "Full Compliance, No Surprises",
        text: "We keep every requirement visible and organized.",
      },
      {
        title: "Real People, Fast Responses",
        text: "Responsive help when the details matter.",
      },
    ],
    splitImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-liquor-license-escrows-2026-11-03-18_47_01.png-Ci2xY0ixY69am3Tw7go1lnM0VJgveu.jpeg",
    splitHeading: "Statewide Service With a Local Feel",
    splitCopy:
      "Get support from an experienced team that knows California licensing.",
    calloutHeading: "Contact Us to Open Your Liquor License Escrow",
    calloutCopy: "Ask questions and get a clear path forward.",
  },
  loan: {
    slug: "loan",
    navLabel: "Loan Escrow",
    title:
      "SECURE LOAN ESCROW SERVICES ACROSS CALIFORNIA FOR PRIVATE AND PERSONAL LENDING",
    intro:
      "Whether you are handling a private loan, personal lending, or a secured transaction, loan escrow protects everyone involved.",
    intro2: "Our independent team provides secure document and fund handling.",
    heroImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-loan-escrows-2026-11-03-18_48_07.png-FnqVkXPEsz0GrQaSkGEaXk3o2ekCmh.jpeg",
    heroHeading: "What Is a Loan Escrow and Why Is It Important?",
    heroCopy:
      "Loan escrow creates a secure process for reviewing documents, holding funds, and confirming conditions are met before disbursement.",
    typeHeading: "Types of Loan Escrows We Handle Across California",
    typeIntro: "Private and secured lending support with careful coordination.",
    cards: [
      {
        title: "Secured Loan Escrows",
        text: "Protect every party while collateral and documents are reviewed.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-loan-escrows-2026-11-03-18_48_07.png-FnqVkXPEsz0GrQaSkGEaXk3o2ekCmh.jpeg",
      },
      {
        title: "Private Real Estate Loan Escrows",
        text: "Coordinate private lending secured by California property.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
      },
    ],
    processHeading: "A Step-by-Step Look at Our Loan Escrow Process",
    process: [
      "Opening Escrow",
      "Document Review & Preparation",
      "Holding & Safeguarding Funds",
      "Final Disbursement and Close",
    ],
    trustHeading: "Why Lenders and Borrowers Trust Sepulveda Escrow",
    trust: [
      {
        title: "Licensed by the DFPI",
        text: "A compliant process for private transactions.",
      },
      {
        title: "Experienced in High-Stakes Transactions",
        text: "Careful handling when the details matter.",
      },
      {
        title: "Transparent Communication",
        text: "Clear updates for every party.",
      },
    ],
    splitImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-loan-escrows-2026-11-03-18_48_07.png-FnqVkXPEsz0GrQaSkGEaXk3o2ekCmh.jpeg",
    splitHeading: "Serving All of California, With Experience You Can Count On",
    splitCopy:
      "Our team helps private lenders and borrowers move forward with confidence.",
    calloutHeading: "Ready to Open a Loan Escrow? Let’s Talk.",
    calloutCopy: "Start with a clear, secure process.",
  },
  mobile: {
    slug: "mobile",
    navLabel: "Mobile Homes",
    title:
      "MOBILE HOME ESCROW SERVICES MADE SIMPLE FOR BUYERS AND SELLERS ACROSS CALIFORNIA",
    intro:
      "Mobile home transactions can have unique requirements. We help buyers and sellers navigate each step.",
    intro2:
      "Our experienced team coordinates documents, title, park requirements, and closing details.",
    heroImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-mobile-home-escrows-2026-11-03-18_48_38.png-apB4kZSsZ24kPgTU4Kq3bIZQjMHZ1g.jpeg",
    heroHeading: "Why Mobile Home Sales are Recommended Escrow in California",
    heroCopy:
      "From park approvals to title and registration, we make the process clear and secure.",
    typeHeading: "Types of Mobile Home Escrows We Handle",
    typeIntro: "Support for buyers, sellers, agents, and park managers.",
    cards: [
      {
        title: "Park-Based Mobile Home Escrows",
        text: "Coordinate park approvals and transfer details.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-mobile-home-escrows-2026-11-03-18_48_38.png-apB4kZSsZ24kPgTU4Kq3bIZQjMHZ1g.jpeg",
      },
      {
        title: "Mobile Homes on Leased Land",
        text: "Navigate documents and park requirements.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-CRHR74e6dv5setEAKZq3pEasYQ6U13.jpeg",
      },
      {
        title: "Mobile Homes on Owned Land",
        text: "Coordinate property and home transfer details.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-business-escrows-2026-11-03-18_47_36.png-w1Ql0jlJOmUJHxTlK1mmG3Tdg9FPQo.jpeg",
      },
      {
        title: "Private Party Transactions",
        text: "A secure process for private sales.",
        image:
          imageBase +
          "screencapture-sepulvedaescrow-net-liquor-license-escrows-2026-11-03-18_47_01.png-Ci2xY0ixY69am3Tw7go1lnM0VJgveu.jpeg",
      },
    ],
    processHeading:
      "Our Step-by-Step Escrow Process for Mobile Home Transactions",
    process: [
      "Escrow Is Opened",
      "Title & Lien Verification",
      "Park or Landowner Coordination",
      "Final Review, Closing, and Fund Disbursement",
    ],
    trustHeading:
      "Why Californians Trust Sepulveda Escrow With Their Mobile Home Sales",
    trust: [
      {
        title: "Decades of Experience",
        text: "Guidance for unique mobile home transactions.",
      },
      {
        title: "Statewide Service With Local Expertise",
        text: "Knowledge of local park and regional requirements.",
      },
      {
        title: "Licensed, Bonded, and Client-Focused",
        text: "Careful attention to every detail.",
      },
    ],
    splitImage:
      imageBase +
      "screencapture-sepulvedaescrow-net-mobile-home-escrows-2026-11-03-18_48_38.png-apB4kZSsZ24kPgTU4Kq3bIZQjMHZ1g.jpeg",
    splitHeading: "Ready to Open a Mobile Home Escrow in California?",
    splitCopy:
      "We help make your transaction feel straightforward from start to finish.",
    calloutHeading: "Contact Sepulveda Escrow Today to Get Started",
    calloutCopy: "Talk to our team about your transaction.",
  },
};

export function EscrowPage({
  data = pages.realEstate,
}: {
  data?: EscrowPageData;
}) {
  const [open, setOpen] = useState(false);
  return (
    <main className="escrow-site">
      <section className="intro-section">
        <p className="eyebrow">SEPULVEDA ESCROW CORPORATION</p>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <p>{data.intro2}</p>
        <a className="cta" href="#contact">
          Call Our Office Now!
        </a>
      </section>
      <section className="hero-info">
        <div>
          <h2>{data.heroHeading}</h2>
          <p>{data.heroCopy}</p>
          <h3>How Sepulveda Escrow Helps</h3>
          <ul>
            <li>Clear, organized documentation</li>
            <li>Secure handling of funds and information</li>
            <li>Responsive communication throughout</li>
          </ul>
        </div>
        <img src={data.heroImage} alt={data.heroHeading} />
      </section>
      <section className="blue-section" id="services">
        <div className="section-heading">
          <h2>{data.typeHeading}</h2>
          <p>{data.typeIntro}</p>
        </div>
        <div className="card-grid">
          {data.cards.map((card) => (
            <article className="service-card" key={card.title}>
              <img src={card.image} alt="" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="process-section">
        <div className="process-overlay">
          <h2>{data.processHeading}</h2>
          <p>
            Every escrow is handled with care, clarity, and a full understanding
            of the details.
          </p>
          {data.process.map((step, index) => (
            <div className="process-step" key={step}>
              <span>
                <FileCheck2 />
              </span>
              <div>
                <strong>
                  Step {index + 1} – {step}
                </strong>
                <p>
                  We coordinate the details, communicate clearly, and keep your
                  transaction moving forward.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="trust-section" id="testimonials">
        <h2>{data.trustHeading}</h2>
        <p>
          Professional support, clear communication, and a process you can
          trust.
        </p>
        <div className="trust-grid">
          {data.trust.map((item) => (
            <article key={item.title}>
              <ShieldCheck />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="split-section">
        <img src={data.splitImage} alt="" />
        <div>
          <h2>{data.splitHeading}</h2>
          <p>{data.splitCopy}</p>
          <p>
            Our team is here to provide knowledgeable, personal service across
            California.
          </p>
        </div>
      </section>
      <section className="callout-section">
        <h2>{data.calloutHeading}</h2>
        <p>{data.calloutCopy}</p>
        <a className="cta" href="tel:8188381831">
          Call Our Office Now!
        </a>
      </section>
    </main>
  );
}
