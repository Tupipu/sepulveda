const testimonials = [
  {
    quote:
      "Both Sherona and Melissa were so helpful in the entire process of paperwork and everything we needed. Sherona explained the entire process and contracts in perfect detail that I had no questions to ask. Hassle free, extremely friendly and very very professional.",
    name: "Marcos E.",
  },
  {
    quote:
      "Super positive experience. Very helpful and sweet people that elaborate in depth and offer extensive service. Highly recommend.",
    name: "Ayeshah J.",
  },
  {
    quote:
      "Thanks you guys!! Melissa and Sharona are out of this world!! Just close a transaction with them. Very knowledgeable and helpful. Definitely will use them again in the near future.",
    name: "Ray V.",
  },
  {
    quote:
      "Thank you Melissa and Sharona, you help to do everything perfectly with my business escrow. For future I will hopefully use your service again. I wish for you to have a successful business.",
    name: "Kan S.",
  },
  {
    quote:
      "The nicest people. Amazing job and easy to work with and very helpful. Thanks Melissa, Sharona and Cynthia!",
    name: "Shlomi A.",
  },
  {
    quote: "Professional staff and nice environment.",
    name: "Anish S.",
  },
];

const yelpReviews = [
  {
    name: "Matt R.",
    date: "06/02/2026",
    quote:
      "We had an outstanding experience with Melissa and Sharona Motkin at Sepulveda Escrow Corporation. From start to finish, they went above and beyond to help...",
  },
  {
    name: "Kim C.",
    date: "09/26/2024",
    quote:
      "Selling my home was a nightmare! I had to trust my realtor to be my eyes and ears because I am across the country. I never felt represented or properly...",
  },
  {
    name: "Daniela P.",
    date: "09/10/2019",
    quote:
      "Melissa, Sharona and Tina were so great to work with! We just closed on our new house with them and they made the process...",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="testimonial-page">
      <section className="testimonial-hero">
        <div className="review-icon" aria-hidden="true">
          ★★★★★
        </div>
        <h1>
          Real people, real reviews! See what Californians
          <br className="desktop" /> say about our escrow services
        </h1>
      </section>

      <div className="testimonial-wave" aria-hidden="true" />

      <section className="review-grid" aria-label="Customer testimonials">
        {testimonials.map((testimonial) => (
          <article className="review-card" key={testimonial.name}>
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p>{testimonial.quote}</p>
            <strong>—{testimonial.name}</strong>
          </article>
        ))}
      </section>

      <section className="yelp-section">
        <h2>
          <span>yelp</span> Reviews
        </h2>
        {yelpReviews.map((review) => (
          <article className="yelp-review" key={review.name}>
            <div className="yelp-avatar" aria-hidden="true">
              ●
            </div>
            <div>
              <div className="yelp-meta">
                <strong>{review.name}</strong>
                <span>{review.date}</span>
              </div>
              <div className="yelp-stars">★★★★★</div>
              <p>{review.quote}</p>
              <a href="https://www.yelp.com/" target="_blank" rel="noreferrer">
                Read more
              </a>
            </div>
          </article>
        ))}
        <a
          className="yelp-more"
          href="https://www.yelp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Read more on Yelp.com&nbsp; »
        </a>
      </section>
    </main>
  );
}
