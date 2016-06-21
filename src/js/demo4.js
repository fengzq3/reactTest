/**
 * Created by fengZQ on 2016/6/21.
 */
"use strict";

window.onload = function () {
    
    console.log('demo4 onload');
    var mountNode = document.getElementById('demo4');

    //item
    var CommentList = React.createClass({
        render: function () {
            return (
                <div className="commentList">
                    hi, this is a commentList item!
                </div>
            );
        }
    });
    //form
    var CommentForm = React.createClass({
        render: function () {
            return (
                <div className="commentForm">
                    hi, this is a CommentForm content!
                </div>
            );
        }
    });
    //box
    var CommentBox = React.createClass({
        render: function () {
            return (
                <div className="commentBox">
                    <h1>Hi, this is a commentBox title!</h1>
                    <CommentList />
                    <CommentForm />
                </div>
            );
        }
    });


    //render
    ReactDOM.render(<CommentBox />, mountNode);



};