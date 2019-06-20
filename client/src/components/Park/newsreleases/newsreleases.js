import React, { Component } from 'react';
import NewsRelease from './newsrelease.js'


class NewsReleases extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="newsreleases">
                {this.props.newsreleases.map(x => <NewsRelease title={x.title} abstract={x.abstract} img={x.image.url} url={x.url} date={x.releasedate.split(" ")[0]}/>)}
            </div>
        );
    }
}

export default NewsReleases;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION

