/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";


window.onload = function () {

    console.log('demo13 onload');
    var mountNode = document.getElementById('demo13');

    //usergist
    var UserGist = React.createClass({
        getInitialState: function () {
            return {
                username: '',
                lastGistUrl: ''
            };
        },
        componentDidMount: function () {
            $.get(this.props.source, function (result) {
                var lastGist = result[0];
                if (this.isMounted()) {
                    this.setState({
                        username: lastGist.owner.login,
                        lastGistUrl: lastGist.html_url
                    });
                }
            }.bind(this));
        },
        render: function () {
            return (
                <div>
                    {this.state.username}'s last gist is 
                    <a href={this.state.lastGistUrl}>here!</a>
                </div>
            );
        }
    });

    //render
    ReactDOM.render(<UserGist source="https://api.github.com/users/octocat/gists"/>, mountNode);

};
