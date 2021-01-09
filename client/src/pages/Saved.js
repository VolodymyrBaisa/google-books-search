import React, { Component } from "react";

import API from "../helpers/API";
export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: [],
            notif: {
                isActive: false,
                message: "",
            },
        };
    }

    render() {
        const { savedBooks, notif } = this.state;

        return <></>;
    }
}
