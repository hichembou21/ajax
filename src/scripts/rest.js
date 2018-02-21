import '../scss/index.scss';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import { DaoAjax } from './daoajax';

let persons = [];
    
let dao = new DaoAjax();
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

$('.form-sign-up').on('submit', function (event) {
    event.preventDefault();
        let pers = {
                    "name" : $('.name').val(),
                    "birthdate" : $('.birthdate').val(),
                    "gender" : $('.gender').val()
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
    $('.table tbody').empty();

    persons.forEach(person => {
        let tr = $(document.createElement('tr'));
        tr.append(`<td>${person.id}</td>`);
        tr.append(`<td>${person.name}</td>`);        
        tr.append(`<td>${person.birthdate.format('DD/MM/YYYY')}</td>`);        
        tr.append(`<td>${person.gender}</td>`);        
        $('.table tbody').append(tr);
    }); 
}
