import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Button } from "@components/ui/Button/Button.tsx";

export default function NotFoundPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigate = (): void => { navigate('/'); };

    return (
        <section>
            <h1 className="heading-primary text-center">{t("notFound.title")}</h1>
            <p className="text-center">{t("notFound.message")}</p>

            <div className="buttons">
                <Button
                    onClick={handleNavigate}
                >
                    {t("notFound.goHome")}
                </Button>
            </div>
        </section>
    )
};