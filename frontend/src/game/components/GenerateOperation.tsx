import { useTranslation } from "react-i18next";

function GenerateOperation({ onGenerate }: { onGenerate: () => void }) {
    const { t } = useTranslation();

    return <button type="button" onClick={onGenerate}>{t("game.generate")}</button>
};

export default GenerateOperation;
