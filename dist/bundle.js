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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyDE9h3sg8jY4qwzKzmhzDKlA9Az49jQ0cY\",\r\n    authDomain: \"awtlab-7cada.firebaseapp.com\",\r\n    projectId: \"awtlab-7cada\",\r\n    storageBucket: \"awtlab-7cada.appspot.com\",\r\n    messagingSenderId: \"168812392879\",\r\n    appId: \"1:168812392879:web:9a0b8451748f4bdd833f5a\"\r\n  };\r\n  \r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\r\nconst db=Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\r\nconst CollRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db,'users')\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CollRef)\r\n.then((snapshot)=>{\r\n    let users1=[]\r\n    snapshot.docs.forEach((doc)=>\r\n    {\r\n        users1.push({...doc.data(),id:doc.id})\r\n    })\r\n    console.log(users1)\r\n})\r\n.catch(err=>{\r\n    console.log(err.message)\r\n\r\n})\r\nconst addUser=documnet.querySelector('.add')\r\n\r\naddUser.addEventListener('submit',(e)=>{\r\n    e.preventDefault()\r\n    addDoc(CollRef,{\r\n        name:addUser.name.value,rollno:addUser.rollno.value})\r\n        .then(()=>{\r\n            addUser.reset()})\r\n        })\r\n// remove user\r\nconst removeUser=document.querySelector('.delete')\r\nremoveUser.addEventListener('submit',(e)=>{\r\n    e.preventDefault()\r\n    const docRef=Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db,'users', removeUser.id.value)\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fire_base/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(docRef)\r\n    then(()=>\r\n    {\r\n      removeUser.reset()\r\n    })\r\n})\n\n//# sourceURL=webpack://fire_base/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;