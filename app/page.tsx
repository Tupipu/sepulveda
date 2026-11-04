import HeroDivider from "@/components/svg/divider";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: "/loan-pix.avif",
    title: "Real Estate Escrow That Keeps Things on Track",
    text: "Buying or selling property in California? From residential homes to commercial buildings, we ensure that all parties are protected, documents are verified, and funds are handled securely. No surprises. Just smooth closings.",
  },
  {
    image: "/high-rise-buildings.avif",
    title: "Business / Bulk Sale Escrows with Built-In Clarity",
    text: "Selling a restaurant in Orange County? Buying a retail shop in San Diego? We’ll make sure your bulk sale escrow meets state requirements, including proper notices to creditors and compliance with the California Uniform Commercial Code and Business & Professions Code.",
  },
  {
    image: "/drinks.jpg",
    title: "Liquor License Escrow Without the Headaches",
    text: "Whether you’re acquiring a general liquor license or transferring a beer and wine license, we coordinate directly with the California Department of Alcoholic Beverage Control (ABC) to ensure your transfer stays on track and compliant.",
  },
  {
    image: "/interior.avif",
    title: "Mobile Home Escrows Made Simple",
    text: "Mobile home sales involve a unique set of regulations—especially in parks. We’ll handle the title transfer, registration, and compliance steps with precision, so you don’t have to worry about costly mistakes.",
  },
  {
    image: "/loan-application.jpg",
    title: "Loan Escrows for Private and Secured Transactions",
    text: "Need a third-party escrow for a personal or business loan? We’ll safely hold and disburse funds according to the agreed terms, ensuring that both borrower and lender are protected.",
  },
];

const faqs = [
  {
    question: "What is escrow?",
    answer:
      "Escrow is the neutral unbiased third-party that holds funds and documents during a transaction, ensuring both the buyer and seller fulfill their obligations before the transaction closes. ",
  },
  {
    question: "Why is escrow necessary?",
    answer:
      "Escrow protects both the buyer and seller by acting as a neutral party, holding funds and documents until all conditions of the sale are met. ",
  },
  {
    question: "What is the timeline for escrow?",
    answer:
      "The escrow process typically takes 30-45 days, but it can vary based on the complexity of the transaction and unforeseen issues. ",
  },
  {
    question: "Who chooses the escrow company?",
    answer:
      "It often depends on the market and regional customs, however it is customarily negotiated between Seller and Buyer.",
  },
  {
    question: "What documents are needed during the escrow process?",
    answer:
      "This includes the purchase agreement, financing information, title documents, and personal identification.",
  },
  {
    question: "How are funds held and released in escrow?",
    answer:
      "Funds are held in an Escrow Trust Account and released upon the close of escrow, after all conditions are met.",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero min-h-screen px-20" id="top">
        <img
          src="/coastal-hero.png"
          alt="Southern California coast at sunset"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1 className="font-heading text-6xl uppercase text-shadow-[2px_2px_4px_rgba(0,0,0,0.45)]">
            Comprehensive
            <br />
            Escrow Services
            <br />
            <em className="text-5xl font-heading uppercase">
              Since <span className="text-6xl">1960</span>
            </em>
          </h1>
          <button className="bg-blue-800 p-4 mt-6">
            <Link className="font-bold" href="#contact">
              Get in touch with us today!
            </Link>
          </button>
        </div>
        <div className="absolute bottom-0 left-0">
          <HeroDivider />
        </div>
      </section>

      <section className="intro py-20" id="about">
        <p className="eyebrow blue">A trusted partner for every closing</p>
        <h2 className="font-heading text-5xl uppercase">
          Trusted California escrow services backed by
          <br className="desktop" /> over 65 years of experience
        </h2>
        <div className="flex flex-col gap-4 px-20 leading-relaxed my-4">
          <p>
            When it comes to closing important transactions, you deserve more
            than a middleman—you deserve a trusted partner. Sepulveda Escrow
            Corporation is a licensed, third-generation escrow company serving
            the entire state of California, including Los Angeles, Orange
            County, San Diego, and the Inland Empire. Whether you're navigating
            a real estate deal, managing a liquor license transfer, or
            buying/selling a business, our team is here to make your transaction
            simple, secure, and stress-free.
          </p>
          <p>
            Founded in 1960 and located in Mission Hills, we&apos;ve helped
            thousands of individuals, families, and business owners across
            California close with confidence. Escrow can be complex—we make it
            feel effortless.
          </p>
        </div>
        <Link className="button" href="#contact">
          Call Our Office Now
        </Link>
      </section>

      <section className="why" id="why-us">
        <div className="section-heading my-4">
          <p className="eyebrow">The difference is in the details</p>
          <h2 className="text-[2.5em] font-heading">
            Why Californians choose Sepulveda Escrow time and time again
          </h2>
          <p className="text-md">
            With so many escrow providers across the state, what makes us
            different? It&apos;s not just our longevity—it&apos;s our unwavering
            commitment to personal service, transparency, and reliability.
          </p>
        </div>
        <div className="why-grid">
          <article>
            <span className="number">01</span>
            <h3 className="text-2xl font-bold font-heading">
              We bring human connection to every transaction
            </h3>
            <ul className="space-y-3 pl-5">
              <li className="before:content-['★'] before:mr-3">
                We treat each escrow like it matters—because it does. Whether
                it&apos;s your first home or your fifth business, we walk you
                through the process step by step.
              </li>
              <li className="before:content-['★'] before:mr-3">
                You&apos;ll speak with real people who know what they&apos;re
                doing and genuinely care.
              </li>
              <li className="before:content-['★'] before:mr-3">
                Our clients consistently describe us as responsive, patient, and
                detail-oriented—and we intend to keep it that way.
              </li>
            </ul>
          </article>
          <article>
            <span className="number">02</span>
            <h3 className="text-2xl font-bold font-heading">
              Licensed, bonded, and regulated for peace of mind
            </h3>
            <ul className="space-y-3 pl-5">
              <li className="before:content-['★'] before:mr-3">
                Fully licensed by the{" "}
                <span className="font-bold">
                  Department of Financial Protection and Innovation (DFPI)
                </span>
              </li>
              <li className="before:content-['★'] before:mr-3">
                In compliance with all California escrow laws and fiduciary
                standards
              </li>
              <li className="before:content-['★'] before:mr-3">
                Trusted by real estate agents, brokers, and attorneys across{" "}
                <span className="font-bold">Southern California</span>
              </li>
            </ul>
          </article>
          <article className="wide">
            <span className="number">03</span>
            <h3 className="text-2xl font-bold font-heading">
              Serving all of California, from the coast to the Inland Empire
            </h3>
            <p>
              Our team may be based in{" "}
              <span className="font-bold">Los Angeles County</span>, but we work
              with clients across the entire state. Whether you&apos;re handling
              a deal in{" "}
              <span className="font-bold">
                Ventura County, Orange County, or San Diego County
              </span>
              , or transferring property in{" "}
              <span className="font-bold">San Bernardino or Riverside</span>,
              we&apos;re fully equipped to support your escrow needs with
              accuracy and professionalism.
            </p>
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading light">
          <p className="eyebrow">Experience you can count on</p>
          <h2 className="text-[2.5em] font-heading capitalize">
            Escrow services that fit real life, not just paperwork.
          </h2>
          <p className="text-white mb-6">
            We&apos;re not here to confuse you with legalese or make you feel
            like just another file in the drawer. Our escrow services are
            designed to be understandable, accessible, and tailored to your
            needs.
          </p>
        </div>
        <div className="space-y-8">
          {/* First 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt="" />

                <div>
                  <h3 className="text-2xl font-heading font-bold text-blue-800">
                    {service.title}
                  </h3>
                  <p>{service.text}</p>

                  <Link className="px-4 py-2" href="#contact">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Last 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(3, 5).map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt="" />

                <div className="">
                  <h3 className="text-2xl font-heading font-bold text-blue-800">
                    {service.title}
                  </h3>
                  <p>{service.text}</p>

                  <Link className="px-4 py-2" href="#contact">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section">
        <img src="/home-pix.avif" alt="Classic California neighborhood" />
        <div className="px-12">
          <p className="eyebrow blue">A local partner with statewide reach</p>
          <h2 className="text-4xl font-heading mb-4">
            Local roots, statewide reach
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              At Sepulveda Escrow, we pride ourselves on providing big-city
              expertise with small-business warmth. Our family-owned business
              has deep roots in the San Fernando Valley, and that same
              local-first mindset carries through to how we serve clients across
              California.
            </p>
            <p>
              From the tech corridors of Silicon Valley to the desert cities of
              Palm Springs, our team is trusted to handle transactions of all
              sizes with the same level of care and professionalism.
            </p>
          </div>
        </div>
      </section>
      <section className="split-section blue-panel">
        <div className="px-12">
          <p className="eyebrow">Move forward with confidence</p>
          <h2 className="text-4xl font-heading mb-4">
            Let's open escrow — and close with confidence
          </h2>
          <p>
            Escrow doesn&apos;t need to feel like a black box. We believe in
            clear communication, timely updates, and making every client feel
            supported throughout the entire process. If you&apos;ve got
            questions, we&apos;ve got real answers. If you&apos;re ready to open
            escrow, we&apos;ll walk you through it from start to finish.
          </p>
        </div>
        <img src="/loan-pix.avif" alt="Keys and paperwork ready for closing" />
      </section>

      <section className="contact-section" id="contact">
        <img src="/office-env.avif" alt="People reviewing documents together" />
        <div>
          <p className="eyebrow blue">Your next step starts here</p>
          <h2>Contact us today</h2>
          <p>
            Questions about opening escrow or an active transaction? Our team is
            ready to help.
          </p>
          <a className="button" href="tel:18188981831">
            (818) 898-1831
          </a>
          <a className="text-link" href="mailto:info@sepulvedaescrow.com">
            Send us a message →
          </a>
        </div>
        <div className="contact-card">
          <Image
            width={200}
            height={100}
            src="/favicon.png"
            alt="Sepulveda Escrow Corporation"
            className="w-10"
          />
          <strong>Sepulveda Escrow</strong>
          <p className="text-white">Mon–Fri · 8:30am–5:00pm</p>
          <a href="tel:18188981831">Call our office</a>
        </div>
      </section>
      <section className="flex flex-col items-center p-10 gap-6">
        <h1 className="font-heading text-4xl text-center text-blue-800">
          Sepulveda Escrow Corporation—Helping Californians Close the Right Way
          Since 1960
        </h1>
        <p className="text-center w-[90%] text-lg">
          When you choose Sepulveda Escrow, you&apos;re not just choosing a
          company—you&apos;re choosing a legacy of integrity, service, and
          results. From our family to yours, thank you for trusting us with your
          next big step.
        </p>
        <button className="bg-blue-800 px-4 py-2 cursor-pointer text-white font-bold capitalize">
          <Link href={"/"}>Call our office now!</Link>
        </button>
      </section>

      <section className="faq">
        <p className="eyebrow blue">Helpful answers</p>
        <h2>General escrow questions</h2>
        <div>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span>+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
