type Numbers = {
    firstNum: number;
    secondNum: number;
}

function OperationDisplay({ firstNum, secondNum }: Numbers) {
    return <p className="text-lg">{firstNum} + {secondNum} = ?</p>
};

export default OperationDisplay;