webpackJsonp([0],{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);



// $('p').on('click', function () {
//     alert('hello');
// });


__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
    method : 'get',
    url : 'http://localhost:8000/persons' 
    }).then(function (reponse) {
        // fait ça une fois la reponse est arrivé
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('p').text(reponse);
        console.log(reponse);
        // console.log(reponse);
    }).catch(function (error) {
        // fait ça si ya requete error   
        console.log('errors');    
    });


/***/ })

},[7]);
//# sourceMappingURL=rest.bundle.js.map