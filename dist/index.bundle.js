webpackJsonp([1],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_index_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_bootstrap_scss_bootstrap_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_bootstrap_scss_bootstrap_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_bootstrap_scss_bootstrap_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daoajax__ = __webpack_require__(6);





// $('p').on('click', function () {
//     alert('hello');
// });
let person;
__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#go').on('click', function () {

    let dao = new __WEBPACK_IMPORTED_MODULE_3__daoajax__["a" /* DaoAjax */]();
    let req = dao.getById(__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#id').val());
    req.then(function (reponse) {
         // fait ça une fois la reponse est arrivé
         person = reponse;
         display();
         // console.log(reponse);
     }).catch(function (error) {
         // fait ça si ya requete error   
         console.log('errors');    
     });
});

function display() {
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.table tbody').empty();

        let tr = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(document.createElement('tr'));
        tr.append(`<td>${person.id}</td>`);
        tr.append(`<td>${person.name}</td>`);        
        tr.append(`<td>${person.birthdate.format('DD/MM/YYYY')}</td>`);        
        tr.append(`<td>${person.gender}</td>`);        
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.table tbody').append(tr);
}


/***/ })

},[126]);
//# sourceMappingURL=index.bundle.js.map