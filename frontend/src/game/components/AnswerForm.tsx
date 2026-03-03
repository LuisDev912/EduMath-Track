import { useRef } from "react";
function AnswerForm({ onValidate }: { onValidate: () => void }) {
    const answerRef = useRef(null);
    return (
        <form
            id="answer-form"
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
                placeholder="type the result"
                min={0}
                required
                ref={answerRef}
                aria-describedby="answer-help"
            />

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