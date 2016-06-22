/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";

window.onload = function () {

    console.log('demo8 onload');
    var mountNode = document.getElementById('demo8');

    //node
    var NodeChildren = React.createClass({
        render:function () {
            return (
                <ol>
                {
                    React.Children.map(this.props.children,child =>{
                        return <li>{child}</li>;
                    })
                }
                </ol>
            );
        }
    });

    //render
    ReactDOM.render(
        <NodeChildren>
            <span>fengfengfeng1111</span>
            <span>fengfengfeng2222</span>
            <span>fengfengfeng2222</span>
            <span>fengfengfeng2222</span>
            <span>fengfengfeng2222</span>
        </NodeChildren>,
        mountNode
    );

};