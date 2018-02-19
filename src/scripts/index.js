import '../scss/index.scss';
import $ from 'jquery';

// $('p').on('click', function () {
//     alert('hello');
// });

$('#go').on('click', function () {

    $.ajax({
        url : $('#url').val() 
     }).then(function (reponse) {
         // fait ça une fois la reponse est arrivé
         $('p').text(reponse);
         console.log(reponse);
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

