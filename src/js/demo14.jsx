/**
 * Created by fengZQ on 2016/6/22.
 */
"use strict";


window.onload = function () {

    console.log('demo14 onload');
    var mountNode = document.getElementById('demo14');

    //report
    var RepoList = React.createClass({
        getInitialState() {
            return {
                loading: true,
                error: null,
                data: null
            };
        },
        componentDidMount() {
            this.props.promise.then(
                value => this.setState({ loading: false, data: value }),
                error => this.setState({ loading: false, error: error })
            );
        },
        render() {
            if (this.state.loading) {
                return (<span>loading...</span>);
            } else if (this.state.error !== null) {
                return (<span>ERROR: {this.state.error.message}</span>);
            } else {
                var repos = this.state.data.items;
                var repoList = repos.map(repo => {
                    return (
                        <li key={repo.id}>
                            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
                        </li>
                    );
                });

                return (
                    <main>
                        <h1>太多javaScript 项目了</h1>
                        <ol>{repoList}</ol>
                    </main>
                );
            }
        }
    });

    //render

    ReactDOM.render(<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars') }/>, mountNode);

};
