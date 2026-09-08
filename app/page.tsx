import { ElementGallery } from './element-gallery';
import { elements } from './elements';

const sitePrefix = process.env.NODE_ENV === 'production' ? '/elements-of-fashion' : '';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href={`${sitePrefix}/`} aria-label="Elements of Fashion home">
          <span className="wordmark-tile">E</span>
          <span>Elements of Fashion</span>
        </a>
        <a className="collection-jump" href="#collection">
          View all 36 <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="masthead" aria-labelledby="page-title">
        <div className="masthead-copy">
          <p className="eyebrow">The illustrated periodic collection</p>
          <h1 id="page-title">
            Elements
            <span>of Fashion</span>
          </h1>
          <p className="intro">
            Thirty-six original fashion drawings, each inspired by an element
            from the periodic table.
          </p>
        </div>

        <div className="feature-tile" aria-hidden="true">
          <span className="feature-number">06</span>
          <strong>C</strong>
          <span className="feature-name">Carbon / Form</span>
        </div>
      </section>

      <div className="symbol-rail" aria-hidden="true">
        <div>
          {elements.map((element) => (
            <span key={element.symbol}>{element.symbol}</span>
          ))}
        </div>
      </div>

      <section className="collection" id="collection" aria-labelledby="collection-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Atomic number 01—88</p>
            <h2 id="collection-title">The collection</h2>
          </div>
          <p>Presented in atomic order. Select a look to explore the element behind it.</p>
        </div>

        <ElementGallery elements={elements} sitePrefix={sitePrefix} />
      </section>

      <footer>
        <span>Elements of Fashion</span>
        <span>36 elements · 36 looks</span>
        <a href="#page-title">Back to top ↑</a>
      </footer>
    </main>
  );
}
