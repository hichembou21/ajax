import '../scss/index.scss';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import { DaoAjax } from './daoajax';

// $('p').on('click', function () {
//     alert('hello');
// });

$('#go').on('click', function () {

    let dao = new DaoAjax();
    let req = dao.getById($('#id').val());
    req.then(function (reponse) {
         // fait ça une fois la reponse est arrivé
         $('p').text(JSON.stringify(reponse));
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

