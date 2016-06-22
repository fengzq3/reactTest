/**
 * Created by fengZQ on 2016/6/21.
 */
"use strict";

//var React = require('react');
// var ReactDom = require('react-dom');

window.onload = function () {
    console.log('window.onload');
    var mountNode = document.getElementById('main');

    var HelloMessage = React.createClass({
        render: function() {
            return <h1>Hello {this.props.name}</h1>;
        }
    });

    ReactDOM.render(<HelloMessage name="World" />, mountNode);
};