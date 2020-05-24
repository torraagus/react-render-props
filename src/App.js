import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

function App() {
	return (
		<div className="App">
			<Counter
				incrementNumber={5}
				render={(count, incrementCount) => (
					<ClickCounter count={count} incrementCount={incrementCount} />
				)}
			/>
			<Counter
				incrementNumber={3}
				render={(count, incrementCount) => (
					<HoverCounter count={count} incrementCount={incrementCount} />
				)}
			/>
		</div>
	);
}

export default App;
