import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Card from "../shared/components/Cards/Card";
import type { cardsTranslation } from "../shared/types/cardProps";

export default function LandingPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const cardsInformation = t("landing.cards", { returnObjects: true }) as cardsTranslation;

    const handleNavigate = (path: string): void => {
        navigate(path);
    };

    return (
        <section>
            <h1 className="heading-primary">{t("landing.title")}</h1>
            <p>{t("landing.subtitle")}</p>
            <div className="buttons">
                <button type="button" onClick={() => handleNavigate('/register')}>
                    {t("landing.actions.getStarted")}
                </button>

                <button type="button" onClick={() => handleNavigate('/login')}>
                    {t("landing.actions.login")}
                </button>

                <button type="button" onClick={() => handleNavigate('/game')}>
                    {t("landing.actions.demo")}
                </button>
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