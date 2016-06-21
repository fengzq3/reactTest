/**
 * Created by fengZQ on 2016/6/21.
 */
"use strict";

window.onload = function () {
    console.log('demo2 onload');
    var mountNode = document.getElementById('demo2');

    var Demo2Com = React.createClass({
        render: function () {
            return (
                <div className="reactName">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.name2}</p>
                </div>
            );
        }
    });

    ReactDOM.render(<Demo2Com name="namename" name2="name222222" />, mountNode);

};