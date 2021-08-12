/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculate.js":
/*!**************************!*\
  !*** ./src/calculate.js ***!
  \**************************/
/***/ ((module) => {

eval("const calculate = (calculations) => {  //\" 1 + 2\"\n    const tokens = calculations.split(\" \"); // [ \"1\", \"+\", \"2\"]\n    let n1 = null;\n    let n2 = null;\n    let operation = null;\n\n    for (const token of tokens) {\n        const isNumber = !isNaN(token);\n\n        if (isNumber) {\n            if (n1 === null) {\n                n1 = Number(token); // n1=1\n            } else if (n2 === null) {\n                n2 = Number(token);\n            }\n        }\n\n\n        const isOperation = [\"+\", \"-\", \"*\", \"/\"].indexOf(token) > -1;\n\n        if (isOperation) {\n            if (operation === null) {\n                operation = token;\n            }\n        }\n\n\n        if (n1 !== null && n2 !== null) {\n\n            if (operation === \"+\") {\n                return n1 + n2\n            } else if (operation === \"-\") {\n                return n1 - n2\n            } else if (operation === \"*\") {\n                return n1 * n2\n            } else if (operation === \"/\" && n2 === 0) {\n                throw Error(\"Error\")\n            } else if (operation === \"/\") {\n                return n1 / n2\n           \n            } else {\n\n                throw Error(\"unsupported operation\")\n            }\n        }\n    }\n}\n//     for (const token of tokens) {\n//         const isNumber = !isNaN(token);\n\n//         if (isNumber) {\n//             if (n1 === null) {\n//                 n1 = Number(token); // n1=1\n//             } else if (n2 === null) {\n//                 n2 = Number(token);\n//             }\n//         }\n\n\n//         const isOperation = [\"+\", \"-\", \"*\", \"/\"].indexOf(token) > -1;\n\n//         if (isOperation) {\n//             if (operation === null) {\n//                 operation = token;\n//             }\n//         }\n\n\n\n\n//         if (n1 !== null && n2 !== null ) {\n\n//             if (operation ===\"+\") {\n//                 return n1 + n2\n//             } else if (operation === \"-\") {\n//                 return n1 - n2\n//             } else if (operation === \"*\") {\n//                 return n1 * n2\n//             } else if (operation === \"/\") {\n//                 return n1 / n2\n//             } else {\n\n//                 throw Error (\"unsupported operation\")\n//             }\n//         }\n//     }\n// }\n\nmodule.exports = calculate;\n\n//# sourceURL=webpack://project-07-calculator/./src/calculate.js?");

/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst calculate = __webpack_require__(/*! ./calculate.js */ \"./src/calculate.js\")\n\n//const numsBtn = document.querySelectorAll('.btn-blue');\nconst allButtons = document.querySelectorAll('.btn')\n\nconst input = document.querySelector('.screen')\n\nconst equalBtn = document.querySelector('.btn-equal')\n\nconst clearBtn = document.querySelector('.btn-clear')\n\n// const operationBtn = document.querySelectorAll('.operation--js')\n\nlet haveDot = false;\n\nlet lastValue = '';\n\n\nallButtons.forEach((btn) => {\n  btn.addEventListener('click', (e) => {\n    console.log(btn)\n    let currentValue = e.target.dataset.num;\n    console.log('Target value:', currentValue)\n    \n    if (currentValue === '.' && haveDot === false) {\n      haveDot = true;\n    } else if (currentValue === '.' && haveDot === true) {\n      return\n    }\n\n    if ((currentValue === ' - ') && (([\" + \", \" - \", \" *\" , \" / \"].indexOf(lastValue) > -1))) {\n      currentValue = '-'\n    } else if (currentValue === \" - \" && lastValue === '') {\n      currentValue = '-'\n    } else if ((currentValue === \" + \" || currentValue === \" * \" || currentValue === \" / \") && (lastValue === \" - \" || lastValue === \" + \" || lastValue === \" * \" || lastValue === \" / \")) {\n      return\n    } \n    \n    input.value += currentValue\n    console.log(input.value)\n    console.log(input.value.split(\" \").length);\n\n    if (([\" + \", \" - \", \" *\" , \" / \"].indexOf(currentValue) > -1) && (input.value.split(\" \").length >3)) {\n        let result = calculate(input.value);\n        console.log(result)\n        input.value = result + currentValue;\n\n      } \n      lastValue = currentValue;\n  })\n})\n\n\nequalBtn.addEventListener('click', (e) => {\n  console.log(input.value)\n  if (input.value === '') {\n    input.value = 'Enter a value'\n  } else {\n\n    let result = calculate(input.value);\n    console.log(result)\n    input.value = result;\n  }\n\n});\n\n\nclearBtn.addEventListener('click', (e) => {\n  input.value = ''\n  haveDot = false;\n  lastValue = '';\n})\n\n\n\n\n\n// Calculator z użyciem funkcji eval\n// equalBtn.addEventListener('click', (e) => {\n//   if (input.value === '') {\n//     input.value = 'Enter a value'\n//     } else {\n//     let answer = eval(input.value)\n//     input.value = answer\n//   }\n// })\n\n\n\n//# sourceURL=webpack://project-07-calculator/./src/calculator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/calculator.js");
/******/ 	
/******/ })()
;