// Css
import "./services.css"

// images
import CardImg1 from "../../images/services/qahva.png"
import CardImg2 from "../../images/services/sovga.png"
import CardImg3 from "../../images/services/moshina.png"

function Services() {
    return(
        <section className="service">
            <div className="container service__container">
                <div className="service__main">
                    <h2 className="service__title--text">Why choose us?</h2>
                    <p className="service__desc--text">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                    <ul className="sevice__cards">
                        <li className="card">
                            <img src={CardImg1} alt="services img" className="card__img" />
                            <h3 className="card__title">Best quality</h3>
                            <p className="card__desc">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </li>


                        <li className="card">
                            <img src={CardImg2} alt="services img" className="card__img" />
                            <h3 className="card__title">Exclusive benefits</h3>
                            <p className="card__desc">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </li>


                        <li className="card">
                            <img src={CardImg3} alt="services img" className="card__img" />
                            <h3 className="card__title">Free shipping</h3>
                            <p className="card__desc">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </li>


                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;