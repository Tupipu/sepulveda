import Image from "next/image";

const historyText = [
  `In 1960 Herb Motkin opened Sepulveda Escrow after ten years in the title insurance industry. Shortly after that, he joined the largest escrow franchise at that time, operating as the Sepulveda Escrow office of Western Mutual Escrow Corporation. He continued to work under this franchise until the Incorporation of Sepulveda Escrow Corporation in 1983.`,
  `In June 1986, Herb's daughter Melissa joined the firm. Presently, Melissa is the president and manager of the corporation. With over 35 years of experience in the escrow industry, Melissa is considered an expert in her field. Melissa is strongly committed to customer service. She works diligently to satisfy the needs of all parties and be personally available to address all questions and concerns that may arise during the escrow process.`,
  `2005 was exciting for Sepulveda Escrow when Herb's granddaughter Sharona Motkin joined the firm. Sharona is the third generation in the Motkin family to work in the escrow industry. Sharona is a graduate of the Sy Syms School of Business and has a bachelor's degree in accounting.`,
  `We are an independent escrow company licensed by the Department of Financial Protection and Innovation, which imposes strict regulations on escrow companies to ensure that your money is safe and the escrow transaction is managed correctly. We are not affiliated with any real estate company and are an unbiased third party.`,
  `Sepulveda Escrow is centrally located in the San Fernando Valley of Los Angeles, and we are easily accessible from Santa Barbara County, Ventura County, and Orange County. By employing updated technologies and services, we can process transactions all over the state of California and are not limited to only assisting clients in our local community.`,
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro">
        <div className="about-icon" aria-hidden="true">
          ♧
        </div>
        <h1>
          An escrow company owned and operated for
          <br className="desktop" /> decades by the local Motkin family
        </h1>
        <p>
          <strong>
            Sepulveda Escrow is an independent escrow company licensed by the
            State of California Department of Financial Protection and
            Innovation
          </strong>
          <br />
          <em>(formerly the Department of Corporations).</em>
        </p>
        <p>
          Established in 1960, Sepulveda Escrow and the Motkin family have
          provided professional escrow services to the communities in the San
          Fernando Valley and throughout California, Nevada, and Arizona.
        </p>
        <p>
          Sepulveda Escrow is genuinely an unbiased, neutral third party to your
          escrow transaction, as our only business is escrow. As an escrow
          holder, we are responsible and obligated to safeguard the funds and/or
          documents and disburse funds and/or convey title only when all escrow
          provisions have been complied with.
        </p>
        <div className="team-grid">
          <article>
            <Image
              src="/escrow-officer.webp"
              width={200}
              height={200}
              alt="Melissa Motkin portrait"
              priority
              quality={100}
              className=""
            />
            <h2>Melissa Motkin</h2>
            <span>Manager</span>
          </article>
          <article>
            <Image
              src="/escrow-officer2.webp"
              width={200}
              height={200}
              alt="Sharona Motkin portrait"
              priority
              quality={100}
              className=""
            />
            <h2>Sharona Motkin</h2>
            <span>Escrow Officer</span>
          </article>
        </div>
      </section>
      <section className="history-section">
        <h2>Our History</h2>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-QqndjCECWOgldI1B6Smc22A7g0YUME.png"
          alt="Sepulveda Escrow historical family photograph"
        />
        <div className="history-copy">
          {historyText.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <p>
            Sepulveda Escrow Corporation, a full-service escrow company, has
            served the community and provided quality escrow services for over
            65 years.
          </p>
        </div>
      </section>
      <section className="mission-section">
        <div>
          <h2>Our Mission</h2>
          <p>
            Sepulveda Escrow Corporation is dedicated to working with all
            individuals and companies with the utmost respect, professionalism,
            and expertise, working to make each and every escrow experience a
            positive one. We will do all that we can to work diligently on
            behalf of all parties to enable a prompt and timely close of your
            escrow.
          </p>
        </div>
        <img
          src="/coastal-hero.png"
          alt="Southern California coastal community"
        />
      </section>
      <section className="affiliations-banner">
        <h2>We are members of the following trade organizations:</h2>
        <ul>
          <li>American Escrow Association</li>
          <li>California Escrow Association</li>
          <li>Escrow Institute of California</li>
          <li>Escrow Agents Fidelity Corporation</li>
          <li>Southland Regional Association of Realtors</li>
        </ul>
      </section>
    </main>
  );
}
