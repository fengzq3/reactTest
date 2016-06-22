/**
 * Created by fengZQ on 2016/6/21.
 */
"use strict";

window.onload = function () {

    console.log('demo6 onload');
    var mountNode = document.getElementById('demo6');

    //search
    var Search = React.createClass({
        render: function () {
            return (
                <div>
                    {this.props.searchType}: <input type="text" />
                    <button>Search</button>
                </div>
            );
        }
    });
    //page
    var Page = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>welcome!FENG</h1>
                    <Search searchType="title" />
                    <Search searchType="content" />
                </div>
            );
        }
    });

    //render
    ReactDOM.render(<Page />, mountNode);


};