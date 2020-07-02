function compute(expression) {
    // TODO - write method definition here
    var expressionArray = new Array();
    var expressionArray = expression.split('');
    var solutionSwap;

    //MULTIPLICATION
    for (counter = 0; counter < 4; counter++) {        
        for (element = 0; element < expressionArray.length; element++) {
            if (expressionArray[element] == '*') {
                if (!isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                   solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) * ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                    expressionArray.splice(element-2, 5, solutionSwap); 
                }
                if (!isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                    solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) * parseFloat(expressionArray[element +1]);
                    expressionArray.splice(element-2, 4, solutionSwap); 
                }
                if (isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                    solutionSwap = parseFloat(expressionArray[element -1]) * ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                    expressionArray.splice(element-1, 4, solutionSwap); 
                }
                if (isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                    solutionSwap = parseFloat(expressionArray[element -1]) * parseFloat(expressionArray[element +1]);
                    expressionArray.splice(element-1, 3, solutionSwap);   
                }                 
            }
        } 
    }
    //DIVISION
    for (counter = 0; counter < 4; counter++) {        
        for (element = 0; element < expressionArray.length; element++) {
            if (expressionArray[element] == '/') {
                if (!isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                    solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) / ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                     expressionArray.splice(element-2, 5, solutionSwap); 
                 }
                 if (!isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) / parseFloat(expressionArray[element +1]);
                     expressionArray.splice(element-2, 4, solutionSwap); 
                 }
                 if (isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = parseFloat(expressionArray[element -1]) / ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                     expressionArray.splice(element-1, 4, solutionSwap); 
                 }
                 if (isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = parseFloat(expressionArray[element -1]) / parseFloat(expressionArray[element +1]);
                     expressionArray.splice(element-1, 3, solutionSwap);   
                 }                    
            }
        } 
    }
    //ADDITION
    for (counter = 0; counter < 4; counter++) {        
        for (element = 0; element < expressionArray.length; element++) {
            if (expressionArray[element] == '+') {
                if (!isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                    solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) + ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                     expressionArray.splice(element-2, 5, solutionSwap); 
                 }
                 if (!isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) + parseFloat(expressionArray[element +1]);
                     expressionArray.splice(element-2, 4, solutionSwap); 
                 }
                 if (isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = parseFloat(expressionArray[element -1]) + ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                     expressionArray.splice(element-1, 4, solutionSwap); 
                 }
                 if (isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = parseFloat(expressionArray[element -1]) + parseFloat(expressionArray[element +1]);
                     expressionArray.splice(element-1, 3, solutionSwap);   
                 }                     
            }
        } 
    }
    //SUBTRACTION
    for (counter = 0; counter < 4; counter++) {        
        for (element = 0; element < expressionArray.length; element++) {
            if (expressionArray[element] == '-') {
                if (!isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                    solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) - ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                     expressionArray.splice(element-2, 5, solutionSwap); 
                 }
                 if (!isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = ((parseFloat(expressionArray[element -2]) * 10) + (parseFloat(expressionArray[element -1]))) - parseFloat(expressionArray[element +1]);
                     expressionArray.splice(element-2, 4, solutionSwap); 
                 }
                 if (isNaN(parseFloat(expressionArray[element -2])) && !isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = parseFloat(expressionArray[element -1]) - ((parseFloat(expressionArray[element +1]) * 10) + (parseFloat(expressionArray[element +2])));
                     expressionArray.splice(element-1, 4, solutionSwap); 
                 }
                 if (isNaN(parseFloat(expressionArray[element -2])) && isNaN(parseFloat(expressionArray[element +2]))) {
                     solutionSwap = parseFloat(expressionArray[element -1]) - parseFloat(expressionArray[element +1]);
                     expressionArray.splice(element-1, 3, solutionSwap);   
                 }                 
            }
        } 
    }
     
    return expressionArray;
}