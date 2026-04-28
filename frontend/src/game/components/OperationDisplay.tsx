import type { Question } from "../types/Game.types";
import { useTranslation } from "react-i18next";

function OperationDisplay({ question }: { question: Question }) {
    const { t } = useTranslation();

    return (
        <p className="text-lg">
            {t("game.operation", {
                firstNum: question.a,
                operation: question.operator,
                secondNum: question.b
            })}
        </p>
    );
};

export default OperationDisplay;