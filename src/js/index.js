//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0;
setInterval(() => {
	let Counter1 = Math.floor(counter / 100000);
	let Counter2 = Math.floor(counter / 10000);
	let Counter3 = Math.floor(counter / 1000);
	let Counter4 = Math.floor(counter / 100);
	let Counter5 = Math.floor(counter / 10);
	let Counter6 = counter;
	counter++;

	ReactDOM.render(
		<SecondsCounter
			number1={Counter1}
			number2={Counter2}
			number3={Counter3}
			number4={Counter4}
			number5={Counter5}
			number6={Counter6}
		/>,
		document.querySelector("#app")
	);
}, 1000);
