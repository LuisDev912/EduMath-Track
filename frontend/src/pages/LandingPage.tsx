import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Button } from "@components/ui/Button/Button.tsx";
import type { cardsTranslation } from "@shared/types/Card.types";
import Card from "@components/Cards/Card.tsx";

export default function LandingPage() {
    // variables
    const { t } = useTranslation();
    const navigate = useNavigate();

    const cardsInformation: object = t("landing.cards", { returnObjects: true }) as cardsTranslation;

    const navigationButtons: object = t("landing.actions", { returnObjects: true });

    const routes: Record<string, string> = {
        getStarted: "/register",
        login: "/login",
        demo: "/game"
    };

    // functions
    const handleNavigate = (path: string): void => {
        navigate(path);
    };

    // HTML
    return (
        <section>
            <h1 className="heading-primary">{t("landing.title")}</h1>
            <p>{t("landing.subtitle")}</p>

            <div className="buttons">
                {Object.entries(navigationButtons).map(([key, label]) => (
                    <Button
                        variant="primary"
                        size="md"
                        fullWidth={true}
                        maxWidth="300px"
                        onClick={() => handleNavigate(routes[key])}
                        key={key}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            <section className="cards-container">
                {Object.entries(cardsInformation).map(([key, card]) => (
                    <Card
                        key={key}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
            </section>
        </section>
    );
};