import Card from "../shared/components/Cards/Card";

export default function LandingPage() {
    return (
        <section>
            <h1 className="heading-primary">MathTrack</h1>
            <p className="prose">Improve your math skills with real-time feedback and tracking</p>
            <div className="buttons">
                <button>
                    Get Started
                </button>

                <button>
                    Login
                </button>
            </div>

            <section className="buttons-container">
                <Card
                    title="Real-time practice"
                    subtitle="Generate random numbers considering the difficult and mode"
                />

                <Card
                    title="Track your progress"
                    subtitle="Help you through your practices tracking improvements"
                />

                <Card
                    title="Multiple levels and modes"
                    subtitle="Choose your difficult level and the type of operation you want to practice"
                />
            </section>
        </section>
    );
};