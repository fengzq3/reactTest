/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";

window.onload = function () {

    console.log('demo7 onload');
    var mountNode = document.getElementById('demo7');

    //jsx语法
    var names = [
        {
            id: 0,
            text: 'feng0'
        },
        {
            id: 1,
            text: 'feng1'
        },
        {
            id: 2,
            text: 'feng2'
        },
        {
            id: 3,
            text: 'feng3'
        }
    ];

    //list item
    var Item = React.createClass({
        render: function () {
            return (
                <p>This is {this.props.text}</p>
            );
        }
    });
    //list
    var List = React.createClass({
        render: function () {
            return (
                <div>
                    {names.map(name => {
                        // return <Item key={name.id} text={name.text}/>;
                        return (
                            <div key={name.id}>
                            <Item text={name.text}/>
                            <p>This is new {name.text}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    });

    //render
    ReactDOM.render(<List />, mountNode);

};