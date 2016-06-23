/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";


window.onload = function () {

    console.log('demo12 onload');
    var mountNode = document.getElementById('demo12');

    //input
    var Input = React.createClass({
        getInitialState: function () {
            return { value: 'Hello, this is a default value!' };
        },
        handleClick: function (event) {
            this.setState({ value: event.target.value });
        },
        render: function () {
            var value = this.state.value;
            return (
                <div>
                    <input type="text" value={value} onChange={this.handleClick} />
                    <p>{value}</p>
                </div>
            );
        }
    });

    ReactDOM.render(<Input/>, mountNode);

};