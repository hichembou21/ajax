webpackJsonp([1],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_bootstrap_scss_bootstrap_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_bootstrap_scss_bootstrap_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_bootstrap_scss_bootstrap_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daoajax__ = __webpack_require__(14);





// $('p').on('click', function () {
//     alert('hello');
// });

__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#go').on('click', function () {

    let dao = new __WEBPACK_IMPORTED_MODULE_3__daoajax__["a" /* DaoAjax */]();
    let req = dao.getById(__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#id').val());
    req.then(function (reponse) {
         // fait ça une fois la reponse est arrivé
         __WEBPACK_IMPORTED_MODULE_2_jquery___default()('p').text(JSON.stringify(reponse));
         // console.log(reponse);
     }).catch(function (error) {
         // fait ça si ya requete error   
         console.log('errors');    
     });
});

// $.ajax({
//    url : 'assets/img_and_media.txt' 
// }).then(function (reponse) {
//     // fait ça une fois la reponse est arrivé
//     $('p').text(reponse);

//     // console.log(reponse);
// }).catch(function (error) {
//     // fait ça si ya requete error   
//     console.log('errors');    
// });



/***/ })

},[4]);
//# sourceMappingURL=index.bundle.js.map