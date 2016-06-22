/**
 * Created by fengZQ on 2016/6/21.
 */
"use strict";

window.onload = function () {

    console.log('demo4 onload');
    var mountNode = document.getElementById('demo4');

    var InputState = React.createClass({
        getInitialState: function () {
            return { enable: false };
        },
        handleClick: function (event) {
            this.setState({ enable: !this.state.enable });
        },
        render: function () {
            return (
                <div>
                    <input type="text" disabled={this.state.enable}/>
                    <button onClick={this.handleClick}>点击改变状态</button>
                </div>
            );
        }
    });



    //render
    ReactDOM.render(<InputState />, mountNode);



};