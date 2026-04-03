    let queue = []
	function performOperation() {
    
    if (queue.length === 0) {
    displayResult('Please select at least one operation');
    return;
    } 
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
					let result = operations(num1, num2,queue);

					// Display the result
					displayResult(result);
                    queue = [];
				} else {
					displayResult('Please enter valid numbers');
				}
			}

	function operations(a, b, queue) {
				// Introduce a debugger statement to pause execution
				debugger;
                let operations = [];
                queue.forEach(operator => {
                    if (operator == 'sum'){
                        let sv = {
                            operator : 'sum',
                            result : a+b
                        }
                        operations.push(sv);}
                    if (operator == 'multiply'){
                        let mv ={
                            operator: 'multiply',
                            result: a*b
                        }
                        operations.push(mv);
                    }
                    if (operator == 'division'){
                        let dv = {
                            operator: 
                            'division',
                            result: a/b
                        }
                        operations.push(dv)
                    }   
                });

                let v = operations.map((operation)=>`<div>the ${operation.operator} is ${operation.result}</div>`).join('');
                
                return v

				// Multiply the numbers
			}

	function displayResult(result) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('result');
				resultElement.innerHTML = `<h2>The results are: </h2>${result}`;
			}
		

function addToQueue(val){
    queue.push(val);
}