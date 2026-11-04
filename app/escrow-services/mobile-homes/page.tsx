import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
} from "lucide-react";

const imageSource =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-sepulvedaescrow-net-real-estate-escrows-2026-11-03-18_45_07.png-jS4AetFh8iHgIyc2yblPPh7O9fesYx.jpeg";
const photos = {
  home: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  meeting:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  construction:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  office:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
};

const escrowTypes = [
  [
    "Park-Based Mobile Home Escrows",
    "Organized support for mobile homes located in communities and parks.",
  ],
  [
    "Mobile Homes on Leased Land",
    "Clear coordination for buyers, sellers, park managers, and title details.",
  ],
  [
    "Mobile Homes on Owned Land",
    "Experienced guidance for transactions involving land and manufactured homes.",
  ],
  [
    "Private Party Transactions",
    "A neutral escrow partner for private sales, documents, and closing funds.",
  ],
];

const faqs = [
  [
    "When will I know the amount of funds needed to close?",
    "Your escrow officer will provide a clear estimate and final closing statement before your signing appointment.",
  ],
  [
    "When do I get the keys to my new home?",
    "Keys are released according to the purchase agreement once all closing conditions are complete.",
  ],
  [
    "Can I use a personal check for closing?",
    "We will confirm acceptable funds and wiring instructions with you before closing.",
  ],
  [
    "How does an escrow account work for my mortgage?",
    "Your lender and escrow officer coordinate the funds, documents, and payoff details needed for a smooth close.",
  ],
  [
    "What are the advantages of having a mortgage escrow account?",
    "Escrow makes the transaction organized, transparent, and easier to navigate from contract to close.",
  ],
];

function SectionTitle({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-3xl text-center ${light ? "text-white" : "text-[#073d88]"}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0b80f5]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-700">
      <section
        id="top"
        className="relative isolate bg-[#f4f8fd] px-5 pb-20 pt-20 text-center"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(19,128,245,.16),transparent_55%)]" />
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#0b80f5]">
          California mobile home escrow
        </p>
        <h1 className="mx-auto max-w-4xl font-serif text-4xl font-semibold leading-[1.05] text-[#073d88] md:text-6xl">
          Mobile home escrow services made simple for buyers and sellers across
          California
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Whether you are buying, selling, or transferring a mobile home,
          Sepulveda Escrow keeps the documents, title details, and closing steps
          organized from start to finish.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-sm bg-[#0869dc] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-[#064aa7]"
          >
            Call Our Office <ArrowRight className="ml-2 inline h-4 w-4" />
          </a>
          <a
            href="#services"
            className="rounded-sm border border-[#0b80f5] px-6 py-3 text-sm font-bold text-[#064aa7]"
          >
            Explore services
          </a>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center"
      >
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0b80f5]">
            A calmer way to close
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#073d88] md:text-4xl">
            Why mobile home sales are recommended escrow in California
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Escrow is a neutral, independent process that protects everyone
            involved while the details of your sale or purchase come together.
            We hold documents and funds, coordinate with the parties, and make
            sure every condition is met before the transaction closes.
          </p>
          <ul className="mt-7 grid gap-3 text-sm font-semibold text-[#073d88]">
            <li>
              <CheckCircle2 className="mr-2 inline h-5 w-5 text-[#0b80f5]" />
              Clear communication from contract to close
            </li>
            <li>
              <CheckCircle2 className="mr-2 inline h-5 w-5 text-[#0b80f5]" />
              Accurate documents and secure funds
            </li>
            <li>
              <CheckCircle2 className="mr-2 inline h-5 w-5 text-[#0b80f5]" />
              Experienced guidance for every party
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -z-10 border-2 border-[#0b80f5]" />
          <img
            src={photos.home}
            alt="Mediterranean California home"
            className="h-[360px] w-full object-cover md:h-[440px]"
          />
        </div>
      </section>

      <section id="services" className="bg-[#064aa7] px-5 py-20 text-white">
        <SectionTitle
          eyebrow="Our specialties"
          title="Types of mobile home escrows we handle"
          light
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-blue-100">
          From first-time buyers to complex investment transactions, our team
          keeps the process organized and moving forward.
        </p>
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {escrowTypes.map(([title, body], index) => (
            <article key={title} className="bg-white text-slate-700 shadow-xl">
              <div className="h-28 overflow-hidden">
                <img
                  src={
                    [
                      photos.home,
                      photos.meeting,
                      photos.construction,
                      photos.office,
                    ][index]
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#0b80f5]">
                  0{index + 1}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#073d88]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="relative bg-slate-900 px-5 py-20 text-white"
      >
        <img
          src={photos.meeting}
          alt="Escrow team meeting"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Simple, transparent, personal"
            title="Our step-by-step escrow process for mobile home transactions"
            light
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-7">
            {[
              "Escrow is opened and your dedicated officer reaches out.",
              "Documents and instructions are coordinated with all parties.",
              "Your team reviews the details and resolves open items.",
              "Signing is complete, funds are verified, and the transaction closes.",
            ].map((step, i) => (
              <div
                key={step}
                className="flex gap-5 border-b border-white/20 pb-6"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#ffd34e] text-sm font-bold text-[#ffd34e]">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-xl">Step {i + 1}</h3>
                  <p className="mt-1 text-sm leading-6 text-blue-100">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Why choose us"
          title="Why Californians trust Sepulveda Escrow with their mobile home sales"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            "Local expertise",
            "Licensed and independent",
            "Experienced with all real estate",
            "Secure and transparent",
          ].map((item, i) => (
            <div
              key={item}
              className={`p-7 ${i % 2 ? "bg-[#0b80f5]" : "bg-[#064aa7]"} text-white`}
            >
              <ShieldCheck className="mb-6 h-8 w-8 text-[#ffd34e]" />
              <h3 className="font-serif text-xl">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-blue-50">
                Clear answers, thoughtful guidance, and careful attention to the
                details that matter most.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid bg-[#eef5fb] lg:grid-cols-2">
        <img
          src={photos.construction}
          alt="California property being prepared"
          className="min-h-[360px] w-full object-cover"
        />
        <div className="flex items-center px-6 py-16 md:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0b80f5]">
              Ready when you are
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#073d88]">
              Ready to open escrow? Let&apos;s make it simple.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Whether you are buying, selling, or helping a client, our team is
              ready to answer questions and make the next steps clear.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-sm bg-[#064aa7] px-6 py-3 text-sm font-bold text-white"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Helpful answers"
          title="Questions related to your transaction"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {["Questions from buyers", "Questions from sellers"].map(
            (heading, column) => (
              <div key={heading}>
                <h3 className="bg-[#064aa7] px-5 py-4 font-serif text-2xl text-white">
                  {heading}
                </h3>
                <div className="divide-y-2 divide-white border-4 border-[#0b80f5] bg-[#0b80f5]">
                  {faqs.slice(column ? 2 : 0, column ? 5 : 5).map(([q, a]) => (
                    <details key={q} className="group bg-white">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-sm font-bold text-[#073d88]">
                        <span>{q}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" />
                      </summary>
                      <p className="px-4 pb-4 text-sm leading-6 text-slate-600">
                        {a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section id="contact" className="bg-[#f4f8fd] px-5 py-20 text-center">
        <SectionTitle
          eyebrow="Let's connect"
          title="Get in touch with our team today"
        />
        <p className="mx-auto mt-5 max-w-xl text-slate-600">
          Have a question about escrow or an upcoming transaction? We are here
          to help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:8183381881"
            className="inline-flex items-center gap-2 rounded-sm bg-[#064aa7] px-6 py-3 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" /> (818) 338-1881
          </a>
          <a
            href="mailto:info@sepulvedaescrow.com"
            className="rounded-sm border border-[#064aa7] px-6 py-3 text-sm font-bold text-[#064aa7]"
          >
            Email our office
          </a>
        </div>
      </section>
    </main>
  );
}
