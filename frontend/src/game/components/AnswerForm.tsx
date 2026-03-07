import { useRef } from "react";
import { useTranslation } from "react-i18next";

function AnswerForm({ onValidate }: { onValidate: (answer: number) => void }) {
    const { t } = useTranslation();
    const answerRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!answerRef.current) return;

        const value = Number(answerRef.current.value);
        onValidate(value);
        answerRef.current.value = "";
    };

    return (
        <form
            id="answer-form"
            onSubmit={handleSubmit}
            aria-label={t("game.answerForm.ariaLabel")}
        >
            <label
                htmlFor="answer-input"
                className="sr-only"
            >
                {t("game.answerForm.answerLabel")}
            </label>
            <input
                name="answer-input"
                id="answer-input"
                type="number"
                placeholder={t("game.answerForm.placeholder")}
                min="0"
                inputMode="numeric"
                ref={answerRef}
                required
                aria-describedby="answer-help"
            />
            <p id="answer-help" className="sr-only">
                {t("game.answerForm.helpText")}
            </p>
            <button
                id="answer-submit"
                type="submit"
            >
                {t("game.answerForm.submit")}
            </button>
        </form>
    )
};

export default AnswerForm;
