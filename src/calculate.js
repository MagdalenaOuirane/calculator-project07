const calculate = (calculations) => {  //" 1 + 2"
    const tokens = calculations.split(" "); // [ "1", "+", "2"]
    let n1 = null;
    let n2 = null;
    let operation = null;

    for (const token of tokens) {
        const isNumber = !isNaN(token);

        if (isNumber) {
            if (n1 === null) {
                n1 = Number(token); // n1=1
            } else if (n2 === null) {
                n2 = Number(token);
            }
        }


        const isOperation = ["+", "-", "*", "/"].indexOf(token) > -1;

        if (isOperation) {
            if (operation === null) {
                operation = token;
            }
        }


        if (n1 !== null && n2 !== null) {

            if (operation === "+") {
                return n1 + n2
            } else if (operation === "-") {
                return n1 - n2
            } else if (operation === "*") {
                return n1 * n2
            } else if (operation === "/" && n2 === 0) {
                throw Error("Error")
            } else if (operation === "/") {
                return n1 / n2
           
            } else {

                throw Error("unsupported operation")
            }
        }
    }
}
//     for (const token of tokens) {
//         const isNumber = !isNaN(token);

//         if (isNumber) {
//             if (n1 === null) {
//                 n1 = Number(token); // n1=1
//             } else if (n2 === null) {
//                 n2 = Number(token);
//             }
//         }


//         const isOperation = ["+", "-", "*", "/"].indexOf(token) > -1;

//         if (isOperation) {
//             if (operation === null) {
//                 operation = token;
//             }
//         }




//         if (n1 !== null && n2 !== null ) {

//             if (operation ==="+") {
//                 return n1 + n2
//             } else if (operation === "-") {
//                 return n1 - n2
//             } else if (operation === "*") {
//                 return n1 * n2
//             } else if (operation === "/") {
//                 return n1 / n2
//             } else {

//                 throw Error ("unsupported operation")
//             }
//         }
//     }
// }

module.exports = calculate;