/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";

window.onload = function () {

    console.log('demo11 onload');
    var mountNode = document.getElementById('demo11');

    //like
    var Like = React.createClass({
        getInitialState: function () {
            return {
                liked: false
            };
        },
        handleClick: function () {
            this.setState({
                liked: !this.state.liked
            });
        },
        render: function () {
            var text = this.state.liked ? 'I like this!' : 'I have\'t like this!'
            return (
                <p onClick={this.handleClick}>{text}</p>
            );
        }
    });

    //render
    ReactDOM.render(<Like />, mountNode);

};