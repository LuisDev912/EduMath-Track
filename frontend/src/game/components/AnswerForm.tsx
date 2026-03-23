import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SendButton } from "../../shared/icons/SendButton";
import { Button } from "../../shared/components/ui/Button/Button";
import { Input } from "../../shared/components/ui/Input/Input";
import Styles from './Game.module.css';

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
            className={Styles.answerForm}
        >
            <Input
                label={t("game.answerForm.answerLabel")}
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
            <p
                id="answer-help"
                className="sr-only"
            >
                {t("game.answerForm.helpText")}
            </p>
            <Button
                fullWidth={true}
                id="answer-submit"
                type="submit"
                aria-label={t("game.answerForm.submitAriaLabel")}
            >
                <SendButton />
            </Button>
        </form>
    )
};

export default AnswerForm;
