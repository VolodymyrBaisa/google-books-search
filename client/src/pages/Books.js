import React, { Component } from "react";

import API from "../helpers/API";

import MessageBox from "../components/MessageBox";
import SearchForm from "../components/SearchForm";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            books: [],
            notif: {
                isActive: false,
                type: "",
                message: "",
            },
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ searchValue: e.target.value });
    }

    render() {
        const { books, searchValue, notif } = this.state;
        return (
            <div className="Book">
                <MessageBox notif={notif} />
                <SearchForm
                    searchValue={searchValue}
                    handleChange={(e) => this.handleChange(e)}
                    search={() => this.search()}
                />
            </div>
        );
    }
}
