"use client";

import { FormEvent, useState } from "react";

const services = [
  "Real Estate Escrow",
  "Commercial Escrows",
  "Business Escrows",
  "Liquor License Sales & Transfers",
  "Loan Escrows",
  "Mobile Home Escrows",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-icon">✉</div>
        <h1>Contact Sepulveda Escrow Today!</h1>
      </section>
      <div className="contact-wave" />
      <section className="contact-panel">
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>
              First Name
              <input required name="firstName" />
            </label>
            <label>
              Last Name
              <input required name="lastName" />
            </label>
            <label>
              Email
              <input required type="email" name="email" />
            </label>
            <label>
              Phone
              <input required type="tel" name="phone" />
            </label>
          </div>
          <label>
            Company <span>(optional)</span>
            <input name="company" />
          </label>
          <fieldset>
            <legend>What can we help you with?</legend>
            {services.map((service) => (
              <label className="check" key={service}>
                <input type="checkbox" name="service" value={service} />
                {service}
              </label>
            ))}
          </fieldset>
          <label>
            Message
            <textarea required name="message" rows={5} />
          </label>
          <button className="submit-button" type="submit">
            Submit
          </button>
          {sent && (
            <p className="success-message" role="status">
              Thank you. Our escrow team will contact you shortly.
            </p>
          )}
        </form>
        <aside>
          <p>
            Phone: <strong>(818) 838-1831</strong>
          </p>
          <p>
            Email:
            <br />
            <strong>info@sepulvedaescrow.net</strong>
          </p>
          <p>
            Address:
            <br />
            <strong>
              10550 Sepulveda Bl Suite 105
              <br />
              Mission Hills, CA 91345, United States
            </strong>
          </p>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.4489467073845!2d-118.46934602427464!3d34.262602273078585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29066cd4cf391%3A0xc753f29e8c4c89f6!2s10550%20Sepulveda%20Blvd%20%23105%2C%20Mission%20Hills%2C%20CA%2091345%2C%20USA!5e0!3m2!1sen!2sza!4v1793724695742!5m2!1sen!2sza"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="contact-map-iframe"
            ></iframe>
          </div>
        </aside>
      </section>
    </main>
  );
}
