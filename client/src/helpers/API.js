import axios from "axios";

export default {
    getBooks: () => {
        return axios.getBooks("/api/books");
    },
};
