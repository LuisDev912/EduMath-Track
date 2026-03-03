type Numbers = {
    firstNum: number;
    secondNum: number;
}

function OperationDisplay({ firstNum, secondNum }: Numbers) {
    return <h3>{firstNum} + {secondNum} = ?</h3>
};

export default OperationDisplay;