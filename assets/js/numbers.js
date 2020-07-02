function compute(expression) {
    // TODO - write method definition here
    var expressionArray = new Array();
    var expressionArray = expression.split('');

    for (counter = 0; counter < 10; counter++) {        
        for (element = 0; element < expressionArray.length; element++) {
            if (expressionArray[element] == '*') {
                var solutionSwap = parseInt(expressionArray[element -1]) * parseInt(expressionArray[element +1]);
                expressionArray.splice(element-1, 3, solutionSwap);                    
            }
            if (expressionArray[element] == '/') {
                    var solutionSwap = parseInt(expressionArray[element -1]) / parseInt(expressionArray[element +1]);
                    expressionArray.splice(element-1, 3, solutionSwap);                   
            }   
            if (expressionArray[element] == '+') {
                var solutionSwap = parseInt(expressionArray[element -1]) + parseInt(expressionArray[element +1]);
                expressionArray.splice(element-1, 3, solutionSwap);                    
            }
            if (expressionArray[element] == '-') {
                var solutionSwap = parseInt(expressionArray[element -1]) - parseInt(expressionArray[element +1]);
                expressionArray.splice(element-1, 3, solutionSwap);                   
            }
        } 
    } 
    //return parseInt(solution.substring(9));
    return expressionArray;
}