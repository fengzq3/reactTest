/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";

window.onload = function () {

    console.log('demo9 onload');
    var mountNode = document.getElementById('demo9');

    //mytitle
    var MyTitle = React.createClass({
        getDefaultProps: function () {
            return { name: 'This is a default name!' };
        },
        propTypes: {
            title: React.PropTypes.string,
            num: React.PropTypes.number
        },
        render: function () {
            return (
                <div className={this.props.num}>{this.props.title}---{this.props.name}</div>
            );
        }
    });

    //render
    var num = 1111;
    var title = '123123';
    ReactDOM.render(<MyTitle num={num} title={title} name="hahahaha" />, mountNode);

};