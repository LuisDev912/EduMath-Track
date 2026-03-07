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
                Your answer:
            </label>
            <input
                name="answer-input"
                id="answer-input"
                type="number"
                placeholder="Type the result"
                min="0"
                inputMode="numeric"
                ref={answerRef}
                required
                aria-describedby="answer-help"
            />
            <p id="answer-help" className="sr-only">
                Enter the sum of both numbers and submit your answer.
            </p>
            {t("game.answerForm.ariaLabel")}
            <button
                id="answer-submit"
                type="submit"
            >
                Send
            </button>
        </form>
    )
};

export default AnswerForm;