import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  constructor(){
    super();
    this.state ={
        articles: [],
        loading: true,
        page: 1,
        nextButton: true,
        totalResults: 0
    }
  }

  async loadData(){
    this.props.setProgress(10)
    let url = '';
    if(this.props.category===''){
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1fab19d27d31418f95a82d83497ad9f7&page=${this.state.page}&pageSize=6`;
    }
    else{
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1fab19d27d31418f95a82d83497ad9f7&page=${this.state.page}&pageSize=6&category=${this.props.category}`;
    }
    let data = await fetch(url);
    this.props.setProgress(50)
    let parseData = await data.json();
    this.props.setProgress(80)
    this.setState({
        articles: parseData.articles,
        loading: false,
        page: this.state.page+1,
        totalResults: parseData.totalResults,
        nextButton: true
    })
    this.props.setProgress(100)
  }

  async componentDidMount(){
    this.loadData()
  }

  // handlePrev = async () => {
  //   await this.loadData(this.state.page - 1,this.props.category)
  // }

  //  handleNext = async () => {
  //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/6)){
  //       this.setState({
  //           nextButton: false
  //       })
  //   }
  //   else{
  //       await this.loadData(this.state.page + 1,this.props.category)
  //   }
  // }

  fetchMoreData = async () =>{
    this.setState({
      page: this.state.page+1
    })
    let url = '';
    if(this.props.category===''){
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1fab19d27d31418f95a82d83497ad9f7&page=${this.state.page}&pageSize=6`;
    }
    else{
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1fab19d27d31418f95a82d83497ad9f7&page=${this.state.page}&pageSize=6&category=${this.props.category}`;
    }
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
        articles: this.state.articles.concat(parseData.articles),
        totalResults: parseData.totalResults,
        nextButton: true
    })
  }
  

  render() {
    let {mode, category} = this.props
    let cat = category === ''? '' :category[0].toUpperCase() + category.substring(1);
    return (
      < >
        <h1 className={`my-2 text-${mode==='light'?'dark':'light'} text-center`}>Today's Top {cat} Headlines</h1>
        {this.state.loading?<div className="text-center mt-2">
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          </div>: null}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          style={{overflow:"none"}}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<div className="text-center mt-2">
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          </div>}>
        <div className="container">
          <div className="row">
              {this.state.articles.map((article) => (
                  <div className='col-md-4' key={article.url}>
                  <NewsItem title={article.title?article.title:""} description={article.description?article.description:""} 
                  image={article.urlToImage} url={article.url} mode={mode} author={article.author?article.author:"Anonymous"} time={article.publishedAt?article.publishedAt:""} source={article.source.name?article.source.name:""}/>
                  </div>
              ))}
          </div>
        </div>
        </InfiniteScroll>
        {/* {!this.state.loading ? <div className="container">
        <nav aria-label="...">
            <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                <button disabled={this.state.page <= 1} className={`btn btn-${mode==='light'?'dark':'light'}`} onClick={this.handlePrev}>Previous</button>
                </li>
                <li className="page-item">
                <button disabled={!this.state.nextButton} className={`btn btn-${mode==='light'?'dark':'light'} ms-2`} onClick={this.handleNext}>Next</button>
                </li>
            </ul>
            </nav>
        </div>:null} */}
      </ >
    )
  }
}
