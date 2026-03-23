import { useTranslation } from "react-i18next";
import { Button } from "@components/ui/Button/Button.tsx";

function GenerateOperation({ onGenerate }: { onGenerate: () => void }) {
    const { t } = useTranslation();

    return <Button
        variant="primary"
        size="md"
        fullWidth={true}
        onClick={onGenerate}
    >
        {t("game.generate")}
    </Button>
};

export default GenerateOperation;