import "./plans.css";

function Plans() {
    return(
        <section className="plans">
            <div className="container plans__container">
                <div className="plans__top">
                    <div className="chiziq__1 chiziq"></div>
                    <div className="chiziq__2 chiziq"></div>
                    <div className="chiziq__3 chiziq"></div>
                </div>
                <ul className="plans__cards">
                    <li className="card">
                        <h2 className="card__num">01</h2>
                        <h3 className="card__title">Pick your coffee</h3>
                        <p className="card__desc">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </li>


                    <li className="card">
                        <h2 className="card__num">02</h2>
                        <h3 className="card__title">Choose the frequency</h3>
                        <p className="card__desc">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                    </li>


                    <li className="card">
                        <h2 className="card__num">03</h2>
                        <h3 className="card__title">Receive and enjoy!</h3>
                        <p className="card__desc">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </li>
                </ul>
                <button className="btn">Create your plan</button>
            </div>
        </section>
    )
}

export default Plans