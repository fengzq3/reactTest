/**
 * Created by fengZQ on 2016/6/21.
 */
"use strict";

window.onload = function () {

    console.log('demo5 onload');
    var mountNode = document.getElementById('demo5');

    var HelloComment = React.createClass({
        getInitialState: function () {
            return { opacity: 1.0 };
        },
        componentDidMount:function () {
            this.timer = setInterval(function () {
                var opacity = this.state.opacity;
                opacity-=.05;
                if(opacity<0.1){
                    opacity = 1.0;
                }
                this.setState({
                    opacity:opacity
                });
            }.bind(this),100);
        },
        render:function () {
            return(
                <div style={{opacity:this.state.opacity}}>
                    Hello {this.props.name}
                </div>
            );
        }
    });

    //render
    ReactDOM.render(<HelloComment name="feng" />,mountNode);


};