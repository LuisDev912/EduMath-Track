import { useTranslation } from "react-i18next";

type Numbers = {
    firstNum: number;
    secondNum: number;
}

function OperationDisplay({ firstNum, secondNum }: Numbers) {
    const { t } = useTranslation();

    return (
        <p className="text-lg">
            {t("game.operation", { firstNum, secondNum })}
        </p>
    );
};

export default OperationDisplay;
