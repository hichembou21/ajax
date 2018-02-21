import '../scss/index.scss';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import { DaoAjax } from './daoajax';

// $('p').on('click', function () {
//     alert('hello');
// });
let person;
$('#go').on('click', function () {

    let dao = new DaoAjax();
    let req = dao.getById($('#id').val());
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
    $('.table tbody').empty();

        let tr = $(document.createElement('tr'));
        tr.append(`<td>${person.id}</td>`);
        tr.append(`<td>${person.name}</td>`);        
        tr.append(`<td>${person.birthdate.format('DD/MM/YYYY')}</td>`);        
        tr.append(`<td>${person.gender}</td>`);        
        $('.table tbody').append(tr);
}
