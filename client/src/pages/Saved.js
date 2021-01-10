import React, { Component } from "react";

import API from "../helpers/API";

import SavedBookList from "../components/SavedBookList";
import MessageBox from "../components/MessageBox";
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

        return (
            <div className="saved">
                <MessageBox notif={notif} />
                {savedBooks.length > 0 ? (
                    <SavedBookList
                        books={savedBooks}
                        deleteBook={(id, index) => this.deleteBook(id, index)}
                    />
                ) : (
                    <p className="no-data">No Saved Books Yet!</p>
                )}
            </div>
        );
    }
}
