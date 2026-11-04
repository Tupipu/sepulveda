const featured = [
  {
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=900&q=85",
    title:
      "Did you know that liquor license escrow protects both the buyer and seller?",
    text: "Learn how escrow keeps licensing, approvals, and transfer details organized from start to finish.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    title:
      "Did you know? The sale or purchase of a California business requires a specialized escrow process.",
    text: "Understand UCC searches, tax clearances, bulk sale notices, and the transfer of licenses.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=900&q=85",
    title: "From on-sale general licenses to off-sale beer and wine permits",
    text: "Sepulveda Escrow Corporation manages liquor license escrow transactions of every type for California businesses.",
  },
];

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85",
    title:
      "Private Content Thought Deleted Before Posting is Often Saved Anyway",
    text: "Growing up, you may have been warned by parents and teachers that if you paid something bad, it would end up on your permanent record.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
    title: "Most Californians Have Insufficient Insurance Coverage",
    text: "Owning real estate has inherent risks. From burglary to floods and fires, your possessions or your home itself could be damaged.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
    title: "Common Real Estate Scams and How to Avoid Them",
    text: "Just like with most other areas of business, the real estate industry has been the target of creative and successful scams.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
    title: "Real Estate, The Economy and News",
    text: "In 2019, the Federal Trade Commission reported that it received millions of wire transfer reports.",
  },
];

const downloads = [
  "YOUR ESCROW AND YOU",
  "BULK SALE GUIDE",
  "UNDERSTANDING PROPERTY TAXES",
  "THE CASE OF SUPPLEMENTAL TAX",
  "DICTIONARY OF ESCROW TERMS",
  "TIPS FOR A TROUBLE-FREE ESCROW",
  "WHAT A LICENSED ESCROW COMPANY CAN DO FOR YOU",
  "THE SHORT SALE",
];

export default function InsightsUpdatesPage() {
  return (
    <main className="insights-page">
      <section className="insights-hero">
        <div className="insights-icon" aria-hidden="true">
          ▣
        </div>
        <h1>
          Stay informed about escrow with these
          <br className="desktop" /> tips and insights
        </h1>
      </section>
      <div className="insights-wave" aria-hidden="true" />
      <section className="featured-insights">
        <a
          className="instagram-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span>◎</span> Follow us on Instagram
        </a>
        <div className="featured-grid">
          {featured.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a href="#blog">Read more</a>
            </article>
          ))}
        </div>
        <div className="pagination" aria-label="Featured pages">
          ‹ <strong>1</strong> 2&nbsp;&nbsp; 3&nbsp;&nbsp; …&nbsp;&nbsp; 12 ›
        </div>
      </section>
      <section className="blog-section" id="blog">
        <label className="search-box">
          <span className="sr-only">Search the blog</span>
          <input placeholder="Search the blog" />
          <button aria-label="Search">⌕</button>
        </label>
        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.title}>
              <img src={post.image} alt="" />
              <div>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="pagination">
          ‹ <strong>1</strong> ›
        </div>
      </section>
      <section className="downloads">
        <h2>Educational Escrow PDFs for Download</h2>
        <div className="download-grid">
          {downloads.map((item) => (
            <article key={item}>
              <h3>{item}</h3>
              <p>
                Helpful information and practical guidance for a smoother escrow
                transaction.
              </p>
              <a className="download-button" href="#contact">
                Click to Download
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles = `
.insights-page{background:#fff;color:#111}.insights-header nav .active{background:#0646a8;color:#fff;font-style:italic}.insights-hero{text-align:center;padding:38px 20px 50px}.insights-icon{margin:0 auto 12px;border:2px solid #333;width:28px;height:28px;display:grid;place-items:center;font-size:18px}.insights-hero h1{margin:0;color:#0646a8;font:500 clamp(2rem,4vw,3.1rem)/1.12 Georgia,serif;text-transform:uppercase}.insights-wave{height:82px;background:linear-gradient(174deg,transparent 0 35%,#087bf4 36% 49%,transparent 50% 100%)}.featured-insights{max-width:1030px;margin:auto;padding:0 22px 55px}.instagram-link{display:flex;justify-content:center;align-items:center;gap:12px;margin:0 auto 24px;color:#0871e8;font:11px Arial;text-transform:uppercase}.instagram-link span{display:grid;place-items:center;width:31px;height:31px;border-radius:50%;background:linear-gradient(135deg,#f5c43d,#ef3d77,#7043bd);color:#fff;font-size:25px}.featured-grid,.post-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.featured-grid img{width:100%;height:190px;object-fit:cover}.featured-grid h2,.post-card h2{margin:13px 8px 8px;color:#0646a8;font:bold 14px/1.25 Georgia,serif}.featured-grid p,.post-card p{margin:0 8px;color:#222;font:12px/1.65 Arial,sans-serif}.featured-grid a{display:none}.pagination{text-align:center;color:#777;font:12px Arial;margin-top:28px}.pagination strong{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#064fb5;color:white;margin:0 10px}.blog-section{padding:10px 6vw 70px;background:linear-gradient(135deg,#fff 0 74%,#f5f8fc 75%)}.search-box{display:flex;max-width:330px;margin:0 auto 18px;border:1px solid #ddd;border-radius:20px;padding:0 10px}.search-box input{border:0;outline:0;width:100%;padding:10px;background:transparent;font:12px Arial}.search-box button{border:0;background:transparent;font-size:18px}.post-grid{max-width:1100px;margin:auto;grid-template-columns:repeat(3,1fr);gap:18px}.post-card{background:#fff;box-shadow:0 2px 8px #0002}.post-card img{width:100%;height:145px;object-fit:cover}.post-card>div{padding-bottom:16px}.post-card:last-child{grid-column:1}.downloads{padding:35px 6vw 58px}.downloads>h2{text-align:center;color:#0646a8;font:bold 18px Georgia,serif;margin-bottom:22px}.download-grid{max-width:1050px;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.download-grid article{padding:16px;background:#fff;text-align:center;box-shadow:0 2px 8px #0002}.download-grid h3{margin:0;color:#0646a8;font:bold 14px Georgia,serif}.download-grid p{min-height:45px;margin:6px 0 10px;font:11px/1.35 Arial}.download-button{display:inline-block;padding:9px 14px;background:#064fb5;border-radius:5px;color:white;font:bold 11px Arial}@media(max-width:760px){.featured-grid,.post-grid,.download-grid{grid-template-columns:1fr}.post-card:last-child{grid-column:auto}.featured-grid img{height:220px}.download-grid{gap:12px}.insights-header{flex-wrap:wrap}.insights-header nav{order:3;width:100%;overflow:auto;justify-content:flex-start}.insights-hero{padding-top:30px}.insights-wave{height:50px}}
`;

export const metadata = {
  title: "Insights & Updates | Sepulveda Escrow Corporation",
  description:
    "Escrow tips, insights, educational resources, and California transaction guidance from Sepulveda Escrow Corporation.",
};

void styles;
