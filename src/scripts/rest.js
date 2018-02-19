import '../scss/index.scss';
import $ from 'jquery';

// $('p').on('click', function () {
//     alert('hello');
// });


$.ajax({
    method : 'get',
    url : 'http://localhost:8000/persons' 
    }).then(function (reponse) {
        // fait ça une fois la reponse est arrivé
        $('p').text(reponse);
        console.log(reponse);
        // console.log(reponse);
    }).catch(function (error) {
        // fait ça si ya requete error   
        console.log('errors');    
    });
