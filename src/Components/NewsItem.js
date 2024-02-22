import Moment from 'react-moment';
import React, { Component } from 'react'


export default class NewsItem extends Component {
  render() {
    let {title, description, image, url, mode, author, time, source} = this.props;
    return (
      <div className="container justify-content-center my-2">
        <div className={`card text-${mode==='light'?'dark':'light'} bg-${mode}`}>
        <img src={image?image:"https://t4.ftcdn.net/jpg/00/89/55/15/360_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"} className="card-img-top" alt="..." style={{height:"40vh"}}/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,43)}... {source===''?null:<span className="badge badge-pill bg-success">{source}</span>}</h5>
            <p className="card-text">{description.slice(0,88)}...</p>
            <p className="card-text"><small className="text-muted">By {author} on <Moment format="LL" >{time}</Moment></small></p>
            <a href={url} target="_blank" className={`btn btn-${mode==='light'?'dark':'light'}`} rel="noreferrer">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}
