import React from "react";

//include images into your bundle

//create your first component

const SecondsCounter = (props) => {
	return (
		<div className="app">
			<div className="box app">
				<i className="far fa-clock"></i>
			</div>
			<div className="box">{props.number1 % 10}</div>
			<div className="box">{props.number2 % 10}</div>
			<div className="box">{props.number3 % 10}</div>
			<div className="box">{props.number4 % 10}</div>
			<div className="box">{props.number5 % 10}</div>
			<div className="box">{props.number6 % 10}</div>
		</div>
	);
};

export default SecondsCounter;
