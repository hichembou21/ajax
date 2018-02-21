webpackJsonp([0],{

/***/ 130:
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





let persons = [];
    
let dao = new __WEBPACK_IMPORTED_MODULE_3__daoajax__["a" /* DaoAjax */]();
let req = dao.getAll();
req.then(function (reponse) {
    // fait ça une fois la reponse est arrivé
    persons = reponse;
    display();
    // console.log(reponse);
}).catch(function (error) {
    // fait ça si ya requete error   
    console.log('errors'); 
});

__WEBPACK_IMPORTED_MODULE_2_jquery___default()('.form-sign-up').on('submit', function (event) {
    event.preventDefault();
        let pers = {
                    "name" : __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.name').val(),
                    "birthdate" : __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.birthdate').val(),
                    "gender" : __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.gender').val()
                }

        req = dao.add(pers);
        req.then(function (reponse) {
            // fait ça une fois la reponse est arrivé
            persons.push(reponse);
            display();
            // console.log(reponse);
        }).catch(function (error) {
            // fait ça si ya requete error   
            console.log('errors'); 
        });
});

function display() {
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.table tbody').empty();

    persons.forEach(person => {
        let tr = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(document.createElement('tr'));
        tr.append(`<td>${person.id}</td>`);
        tr.append(`<td>${person.name}</td>`);        
        tr.append(`<td>${person.birthdate.format('DD/MM/YYYY')}</td>`);        
        tr.append(`<td>${person.gender}</td>`);        
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.table tbody').append(tr);
    }); 
}


/***/ })

},[130]);
//# sourceMappingURL=rest.bundle.js.map