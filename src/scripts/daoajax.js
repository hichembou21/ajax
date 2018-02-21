import $ from 'jquery';

export class DaoAjax {

    constructor() {
        this.url = 'http://localhost:8000/persons'; 
    }

    getAll() {

        return $.ajax({
            method : 'get',
            url : this.url
        })
    }

    getById(id) {
        return $.ajax({
            method : 'get',
            url : this.url+'/'+id
        })
    }

    add(pers) {

        return $.ajax({
            method : 'post',
            url : this.url,
            data : pers
        });
    }

    update(pers) {

    }
}