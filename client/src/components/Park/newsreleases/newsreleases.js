import React, { Component } from 'react';
import NewsRelease from './newsrelease.js'


class NewsReleases extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const scope = {
            none: {
                "font-size": "48px",
                "text-align": "center",
                "margin-top": "200px",
                "font-weight": "800"

            }
        }
        if (this.props.newsreleases.length == 0) {

            return (
                <div style={scope.none}>
                    There are no News Releases at this time
            </div>
            )
        }
        else {
            return (
                <div className="newsreleases">
                    {this.props.newsreleases.map(x => <NewsRelease title={x.title} abstract={x.abstract} img={x.image.url} url={x.url} date={x.releasedate.split(" ")[0]} />)}
                </div>
            );
        }
    }
}

export default NewsReleases;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION

