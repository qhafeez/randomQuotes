import React, { Component } from 'react';
import logo from './logo.svg';
import classes from  './App.module.css';
import QuoteContainer from "./QuoteContainer/QuoteContainer";
import quotes from "./quotes";
import { withRouter,Route, Link } from "react-router-dom";
import axiosInstance from "axios";


class App extends Component {

  state={
    quoteList:quotes,
    selectedQuote:null,
    color:"lightblue"

  }

  colorChange=()=>{

    let colorOne = Math.ceil(Math.random()*255);
    let colorTwo = Math.ceil(Math.random()*255);
    let colorThree = Math.ceil(Math.random()*255);
    let rgb = "rgba("+colorOne+","+colorTwo+","+colorThree+")";

    this.setState({
      color:rgb
    })

  }

  quoteSelector=()=>{

    let length = this.state.quoteList.quotes.length-1;
    let index = Math.floor(Math.random()*length);
    console.log(index);

    this.props.history.replace("/"+index);
    console.log(this.props);

    // this.setState({
    //  selectedQuote:quotes[index]
    // },()=>{
    //  console.log(this.state.selectedQuote)
    // })




  }

  param = () =>{

    let quoteList = [...this.state.quoteList.quotes];

    //this takes the param from the url and uses it to select the quote from the array

    this.setState({
      selectedQuote:quoteList[this.props.match.params.id]
    })
    
  }



    componentDidUpdate(prevProps){
      //component updates when the id param has been changed by clcking the new quote button
      if(prevProps.match.params !== this.props.match.params && this.props.match.params.id){
      
        this.param();
        this.colorChange()
      
      }

    }

  

componentDidMount(){
  console.log(this.props);

  axiosInstance.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
  .then((response)=>{

      this.setState({
        quoteList:response.data
      },()=>{

        // if(!this.props.match.params.id){
          this.quoteSelector();
         
         // }
         console.log("ehllo");
         this.param();
         
  }

  )})


  

  
}




  render() {




    return (
      <div style={{backgroundColor:this.state.color}} className={classes.App}>
          <div className={classes.container}>
            <div style={{color:this.state.color}} className={classes.quoteContainer}>
            <div>
              <span  className={classes.Quote}>&#8220; </span><span>{this.state.selectedQuote ? this.state.selectedQuote.quote: null}</span>
              </div>
              <div className={classes.author} >
                  -{this.state.selectedQuote?this.state.selectedQuote.author : null}
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <div style={{backgroundColor:this.state.color}}><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" ></script></div>
              <div style={{backgroundColor:this.state.color}} onClick={this.quoteSelector}>New Quote</div>

            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(App);
