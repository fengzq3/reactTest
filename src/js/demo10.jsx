/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";

window.onload = function () {

    console.log('demo10 onload');
    var mountNode = document.getElementById('demo10');

    //real dom
    var RealDom = React.createClass({
        handleClick: function () {
            this.refs.myTextInput.value = '';
            this.handleInput();
        },
        handleInput: function () {
            var vals = this.refs.myTextInput.value;
            this.refs.myTextShow.innerHTML = vals;
        },
        render: function () {
            return (
                <div>
                    <input type="text" ref="myTextInput" onInput={this.handleInput}/>
                    <input type="button" value="clear" onClick={this.handleClick} />
                    <div ref="myTextShow"></div>
                </div>
            );
        }
    });

    //render
    ReactDOM.render(<RealDom />, mountNode);

};