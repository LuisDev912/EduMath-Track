import type { Question } from "../types/Game.types";

type Props = {
    question: Question
}

function OperationDisplay({ question }: Props) {
    return (
        <p className="text-lg">
            {question.firstNumber} {question.operator} {question.secondNumber}
        </p>
    )
}

export default OperationDisplay;
