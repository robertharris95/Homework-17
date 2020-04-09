import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    bookSearch: function(query){
        let search = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
        return axios.get(search)
    }
}