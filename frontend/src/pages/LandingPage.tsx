import { useNavigate } from "react-router";
import Card from "../shared/components/Cards/Card";

export default function LandingPage() {
    const navigate = useNavigate();

    const handleNavigate = (path: string): void => {
        navigate(path);
    };

    return (
        <section>
            <h1 className="heading-primary">Landing Page</h1>
            <p>Improve your math skills with real-time feedback and tracking</p>
            <div className="buttons">
                <button onClick={() => handleNavigate('/register')}>
                    Get Started
                </button>

                <button onClick={() => handleNavigate('/login')}>
                    Login
                </button>
            </div>

            <section className="cards-container">
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