function Newsletter() {
    return (
        <section className="newsletter-section" id="contact">
            <div className="container">

                <div className="newsletter">

                    <div>
                        <p className="section-label">
                            STAY UPDATED
                        </p>

                        <h2>
                            Never Miss a Great Movie
                        </h2>

                        <p>
                            Get movie recommendations, new releases and
                            updates delivered straight to your inbox.
                        </p>
                    </div>

                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                        />

                        <button className="primary-button">
                            Subscribe
                        </button>
                    </form>

                </div>

            </div>
        </section>
    );
}

export default Newsletter;