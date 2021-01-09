import React, { Component } from "react";

import API from "../helpers/API";

import MessageBox from "../components/MessageBox";

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
        return (
            <div className="Book">
                <MessageBox notif={notif} />
            </div>
        );
    }
}
