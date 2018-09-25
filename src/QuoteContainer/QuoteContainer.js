import React, {Component} from "react";
import classes from "./QuoteContainer.module.css";
import quotes from "../quotes";
import {withRouter} from "react-router-dom";

class QuoteContainer extends Component{


state={
	quoteList:quotes,
	selectedQuote:null,
	backgroundColor:"lightblue"

}

colorChange=()=>{

	let colorNumber = Math.ceil(Math.random()*255);
	let rgb = "rgba("+colorNumber+","+colorNumber+","+colorNumber+")";

	this.setState({
		backgroundColor:rgb
	})

}

// quoteSelector=()=>{

// 	let length = this.state.quoteList.length-1;
// 	let index = Math.floor(Math.random()*length);
// 	console.log(index);

// 	this.props.history.push("/"+index);
// 	console.log(this.props);

// 	// this.setState({
// 	// 	selectedQuote:quotes[index]
// 	// },()=>{
// 	// 	console.log(this.state.selectedQuote)
// 	// })




// }

param =()=>{

	// this.quoteSelector();
	
	this.setState({
		selectedQuote:quotes[this.props.match.params.id]
	})
	

}

componentDidUpdate(prevProps){
	if(prevProps.match.params !== this.props.match.params){
		this.param()
	}


}

componentDidMount(){
	
	this.param();

	
}




render(){
	return(
		<div className={classes.container}>
			<div className={classes.quoteContainer}>
				<span className={classes.Quote}>&#8220; </span><span>{this.state.selectedQuote ? this.state.selectedQuote.quote: null}</span>
			</div>
			<div className={classes.buttonContainer}>
				<div>Tweet</div>
				<div onClick={this.param}>New Quote</div>

			</div>
		</div>
)
}



}

export default withRouter(QuoteContainer);