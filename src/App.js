import React from "react";
//import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div id="videoview" width={this.props.width} height={this.props.height}>
			<button onClick={this.scanBarcode}>Scan Barcodes</button>
			<video
				autoPlay
				width={this.props.width}
				height={this.props.height}
				src={this.state.src}
				muted={this.props.audio}
				className={this.props.className}
				playsInline
				style={this.props.style}
				ref={(ref) => {
					this.video = ref;
				}}
			/>
			<canvas
				id="overlay"
				width={this.props.width}
				height={this.props.height}
			></canvas>
		</div>
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
