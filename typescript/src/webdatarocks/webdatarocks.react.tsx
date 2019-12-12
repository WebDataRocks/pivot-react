import React from "react";
import ReactDOM from "react-dom";
import Webdatarocks from "webdatarocks";

export class Pivot extends React.Component<WebDataRocks.Params, any> {
	
	webdatarocks: WebDataRocks.Pivot;

	componentDidMount() {
		this.webdatarocks = new Webdatarocks({
			...this.props,
			container: ReactDOM.findDOMNode(this)
		});
	}
	
	shouldComponentUpdate() {
		return false;
	}
	
	componentWillUnmount() {
		this.webdatarocks.dispose();
	}

	render() {
		return <div>Pivot</div>;
	}
}

export default Pivot;