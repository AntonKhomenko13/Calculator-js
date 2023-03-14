const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInput(){
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier, 
  prevResult,
  operationNumber, 
  newResult
  ){
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };
    logEntries.push(logEntry);  
    console.log(logEntries);
}

function add () {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

}

function multuply(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  writeToLog('MULTUPLY', initialResult, enteredNumber, currentResult);
}

function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multuply);
divideBtn.addEventListener('click', divide);

 