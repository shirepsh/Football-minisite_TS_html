/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nfunction fetchData(url) {\n    return __awaiter(this, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(url)];\n                case 1:\n                    response = _a.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Failed to fetch data. Status: \".concat(response.status));\n                    }\n                    return [2 /*return*/, response.json()];\n            }\n        });\n    });\n}\nfunction init() {\n    return __awaiter(this, void 0, void 0, function () {\n        var apiUrl, data, leagueContainer_1, leaguesToDisplay, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';\n                    return [4 /*yield*/, fetchData(apiUrl)];\n                case 1:\n                    data = _a.sent();\n                    leagueContainer_1 = document.getElementById('league-container');\n                    if (leagueContainer_1) {\n                        leaguesToDisplay = data.leagues.slice(0, 5);\n                        leaguesToDisplay.forEach(function (league) {\n                            var card = createLeagueCard(league);\n                            leagueContainer_1.appendChild(card);\n                        });\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    console.error('Error fetching data:', error_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction createLeagueCard(league) {\n    var card = document.createElement('div');\n    card.classList.add('league-card');\n    var cardContent = \"\\n      <img src=\\\"\".concat(league.strBadge, \"\\\" alt=\\\"\").concat(league.strLeague, \"\\\" />\\n      <h3>\").concat(league.strLeague, \"</h3>\\n      <p>Sport: \").concat(league.strSport, \"</p>\\n      <p>Alternate Name: \").concat(league.strLeagueAlternate, \"</p>\\n    \");\n    card.innerHTML = cardContent;\n    return card;\n}\ndocument.addEventListener('DOMContentLoaded', init);\n\n\n//# sourceURL=webpack://football-minisite/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;