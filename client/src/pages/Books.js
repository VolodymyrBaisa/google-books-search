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

    search() {
        API.searchBooks(this.state.searchValue)
            .then((response) => {
                this.setState({
                    books: response.data,
                    searchValue: "",
                    notif: {
                        isActive: true,
                        type: "success",
                        message: `Search Found for ${this.state.searchValue}`,
                    },
                });
            })
            .catch((err) => {
                this.setState({
                    notif: {
                        isActive: true,
                        type: "danger",
                        message: `Search Not Found for ${this.state.searchValue}`,
                    },
                });
            });
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
