import axios from "axios";

export default {
    getBooks: () => {
        return axios.getBooks("/api/books");
    },
    searchBooks: (search) => {
        return axios.post("/api/books/search", { search: search });
    },
};
