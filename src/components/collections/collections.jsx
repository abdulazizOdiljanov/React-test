import "./collections.css";
import CardImg from "../../images/collections/cardImg.png";

function Collections() {
  return (
    <section className="collection">
      <div className="container collection__container">
        <ul className="cards">
          <li className="card">
            <img src={CardImg} alt="" className="card__img" />
            <h3 className="card__title">Gran Espresso</h3>
            <p className="card__desc">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </li>
          <li className="card">
            <img src={CardImg} alt="" className="card__img" />
            <h3 className="card__title">Planalto</h3>
            <p className="card__desc">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </li>
          <li className="card">
            <img src={CardImg} alt="" className="card__img" />
            <h3 className="card__title">Piccollo</h3>
            <p className="card__desc">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </li>
          <li className="card">
            <img src={CardImg} alt="" className="card__img" />
            <h3 className="card__title">Danche</h3>
            <p className="card__desc">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Collections;
