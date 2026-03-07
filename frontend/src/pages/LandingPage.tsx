import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Card from "../shared/components/Cards/Card";

export default function LandingPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

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
                <Card
                    title={t("landing.cards.realTimePractice.title")}
                    subtitle={t("landing.cards.realTimePractice.subtitle")}
                />

                <Card
                    title={t("landing.cards.trackProgress.title")}
                    subtitle={t("landing.cards.trackProgress.subtitle")}
                />

                <Card
                    title={t("landing.cards.multipleLevels.title")}
                    subtitle={t("landing.cards.multipleLevels.subtitle")}
                />
            </section>
        </section>
    );
};
