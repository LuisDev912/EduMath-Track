import type { Question } from "../types/Game.types";

function OperationDisplay({ question }: { question: Question }) {
    return (
        <p className="text-lg">
            {question.a} {question.operator} {question.b}
        </p>
    );
};

export default OperationDisplay;