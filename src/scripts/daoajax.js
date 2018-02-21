import $ from 'jquery';
import moment from 'moment';

export class DaoAjax {

    constructor() {
        this.url = 'http://localhost:8000/persons'; 
    }

    getAll() {

        return $.ajax({
            method : 'get',
            url : this.url
        }).then(function (reponse) {
            for (let rep of reponse) {
                rep.birthdate = moment(rep.birthdate, 'YYYY-MM-DD');
            }
            return reponse;
        }); 
              
    }

    getById(id) {
        return $.ajax({
            method : 'get',
            url : this.url+'/'+id
        }).then(function (reponse) {
            reponse.birthdate = moment(reponse.birthdate, 'YYYY-MM-DD');
            return reponse;
        });
    }

    add(pers) {

        return $.ajax({
            method : 'post',
            url : this.url,
            data : pers
        }).then(function (reponse) {
            reponse.birthdate = moment(reponse.birthdate, 'YYYY-MM-DD');
            return reponse;
        });
    }

    update(pers) {
        return $.ajax({
            method : 'put',
            url : this.url,
            data : pers
        });
    }
}