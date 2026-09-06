const sitePrefix = '/elements-of-fashion';

export const dynamic = 'force-static';

const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', family: 'Nonmetal' },
  { number: 2, symbol: 'He', name: 'Helium', family: 'Noble gas' },
  { number: 3, symbol: 'Li', name: 'Lithium', family: 'Alkali metal' },
  { number: 4, symbol: 'Be', name: 'Beryllium', family: 'Alkaline earth' },
  { number: 5, symbol: 'B', name: 'Boron', family: 'Metalloid' },
  { number: 6, symbol: 'C', name: 'Carbon', family: 'Nonmetal' },
  { number: 7, symbol: 'N', name: 'Nitrogen', family: 'Nonmetal' },
  { number: 8, symbol: 'O', name: 'Oxygen', family: 'Nonmetal' },
  { number: 9, symbol: 'F', name: 'Fluorine', family: 'Halogen' },
  { number: 10, symbol: 'Ne', name: 'Neon', family: 'Noble gas' },
  { number: 11, symbol: 'Na', name: 'Sodium', family: 'Alkali metal' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', family: 'Alkaline earth' },
  { number: 14, symbol: 'Si', name: 'Silicon', family: 'Metalloid' },
  { number: 15, symbol: 'P', name: 'Phosphorus', family: 'Nonmetal' },
  { number: 16, symbol: 'S', name: 'Sulfur', family: 'Nonmetal' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', family: 'Halogen' },
  { number: 18, symbol: 'Ar', name: 'Argon', family: 'Noble gas' },
  { number: 19, symbol: 'K', name: 'Potassium', family: 'Alkali metal' },
  { number: 20, symbol: 'Ca', name: 'Calcium', family: 'Alkaline earth' },
  { number: 32, symbol: 'Ge', name: 'Germanium', family: 'Metalloid' },
  { number: 33, symbol: 'As', name: 'Arsenic', family: 'Metalloid' },
  { number: 34, symbol: 'Se', name: 'Selenium', family: 'Nonmetal' },
  { number: 35, symbol: 'Br', name: 'Bromine', family: 'Halogen' },
  { number: 36, symbol: 'Kr', name: 'Krypton', family: 'Noble gas' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', family: 'Alkali metal' },
  { number: 38, symbol: 'Sr', name: 'Strontium', family: 'Alkaline earth' },
  { number: 52, symbol: 'Te', name: 'Tellurium', family: 'Metalloid' },
  { number: 53, symbol: 'I', name: 'Iodine', family: 'Halogen' },
  { number: 54, symbol: 'Xe', name: 'Xenon', family: 'Noble gas' },
  { number: 55, symbol: 'Cs', name: 'Cesium', family: 'Alkali metal' },
  { number: 56, symbol: 'Ba', name: 'Barium', family: 'Alkaline earth' },
  { number: 84, symbol: 'Po', name: 'Polonium', family: 'Post-transition metal' },
  { number: 85, symbol: 'At', name: 'Astatine', family: 'Halogen' },
  { number: 86, symbol: 'Rn', name: 'Radon', family: 'Noble gas' },
  { number: 87, symbol: 'Fr', name: 'Francium', family: 'Alkali metal' },
  { number: 88, symbol: 'Ra', name: 'Radium', family: 'Alkaline earth' },
];

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
          <p>Presented in atomic order. Select a look to open its original PDF.</p>
        </div>

        <div className="gallery">
          {elements.map((element, index) => (
            <a
              className="look-card"
              href={`${sitePrefix}/pdfs/${element.name}.pdf`}
              target="_blank"
              rel="noreferrer"
              key={element.name}
              aria-label={`Open the ${element.name} fashion drawing as a PDF`}
            >
              <div className="look-image">
                <img
                  src={`${sitePrefix}/art/${element.name}.jpg`}
                  alt={`Fashion illustration inspired by ${element.name}`}
                  loading={index < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="open-cue" aria-hidden="true">Open PDF ↗</span>
              </div>
              <div className="look-caption">
                <span className="element-number">{String(element.number).padStart(2, '0')}</span>
                <span className="element-symbol">{element.symbol}</span>
                <span className="element-meta">
                  <strong>{element.name}</strong>
                  <small>{element.family}</small>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>Elements of Fashion</span>
        <span>36 elements · 36 looks</span>
        <a href="#page-title">Back to top ↑</a>
      </footer>
    </main>
  );
}
