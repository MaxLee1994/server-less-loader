/**
 * @fileOverview
 * @author Max
 **/

import React from 'react';
var style = importLess ('./test/b'  ,__dirname);

export default class a extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.handlePlusOne = this.handlePlusOne.bind(this);
    }
    handlePlusOne () {
        this.setState({
            num: this.state.num + 1
        });
    }
    render() {
        return (
            <div>
                <style scoped>
                    {styleFile}
                </style>
                <h1>这是a页面</h1>
                <h2>{this.state.num}</h2>
                <button onClick={this.handlePlusOne}>加一</button>
            </div>
        );
    }
}
