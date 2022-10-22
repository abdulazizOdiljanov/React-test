import "./hero.css"

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container container">
                <h1 className="hero__title">Great coffee made simple.</h1>
                <p className="hero__desc">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <button className="btn">Create your plan</button>
            </div>
        </section>
    )
}

export default Hero