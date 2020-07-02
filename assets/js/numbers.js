function compute(expression) {
    // TODO - write method definition here
  //  var mathArray = new Array(parseInt(expression.split().length));
    var solution;    
    var regex = "[*/+-]+g";
  //  parseInt(expression.split(""));
 //   expression.replace(/\s/g, "");
    var expressionArray = new Array();
    var expressionArray = expression.split('');  //join('')  //.split(regex)

  /*
    for (var i = 0; i < expressionArray.length; i++) {

      
      //===============
        var add = '+';
        var subtract = '-';
        var multiply = "*";
        var divide = "/";
        switch (expressionArray[i]) {
            case '-':
                solution += '-';
                break;
            case '+':
                solution += add.substring(0,2);
                break;
            case '*':
                solution += '*';
                break;
            case '/':
                solution += divide;
                break;
            default:
                solution += expressionArray[i];
                break; 
        }
                
        */

  //  do {    
        // first do multiplication and division
        for (element = 0; element < expressionArray.length; element++) {
            if (expressionArray[element] == '*' || expressionArray[element] == '/') {
                if (expressionArray[element] == '*') {
                    var solutionSwap = parseInt(expressionArray[element -1]) * parseInt(expressionArray[element +1]);
                    expressionArray.splice(element-1, 4, solutionSwap);                    
                }
            } else if (expressionArray[element] == '/') {
                    var solutionSwap = parseInt(expressionArray[element -1]) / parseInt(expressionArray[element +1]);
                    expressionArray.splice(element-1, 4, solutionSwap);                   
            } 
            // then addition and subtraction
            if (expressionArray[element] == '+' || expressionArray[element] == '-') {
                if (expressionArray[element] == '+') {
                    var solutionSwap = parseInt(expressionArray[element -1]) + parseInt(expressionArray[element +1]);
                    expressionArray.splice(element-1, 4, solutionSwap);                    
                }
            } else {
                if (expressionArray[element] == '-') {
                    var solutionSwap = parseInt(expressionArray[element -1]) - parseInt(expressionArray[element +1]);
                    expressionArray.splice(element-1, 4, solutionSwap);                   
                }
            }
        } //add / back in, maybe    
 //   } while ()
   /*

        if (parseInt(mathArray[i]) == "+") {
            solution += (parseInt(mathArray[i-1])) + (parseInt(mathArray[i+1]))
        } else if (mathArray[i] = "-") {
            solution += (parseInt(mathArray[i-1])) - (parseInt(mathArray[i+1]))
        } 

    } 
            switch (mathArray[i]) {
                case '-':
                    solution += (parseInt(mathArray[i-1]) * 1) - (parseInt(mathArray[i+1]) *1);
                    break;
                case "+":
                    solution += (parseInt(mathArray[i-1]) * 1) + (parseInt(mathArray[i+1]) * 1);
                    break;   
                default:
                    break; 

            }
                */

      //  var solution += parseInt(mathArray[i]);
//   }   -------------------------------------------------to make return inside function
    //    var solution = 1 * parseInt(expression);
    
    //return parseInt(solution.substring(9));

    return expressionArray;


}