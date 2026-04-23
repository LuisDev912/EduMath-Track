import type { Question } from "../types/Game.types";

type Props = {
    question: Question;
};

function OperationDisplay({ question }: Props) {
    return (
        <p className="text-lg">
            {question.a} {question.operator} {question.b}
        </p>
    );
};

export default OperationDisplay;