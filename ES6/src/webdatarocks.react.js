import PropTypes from 'prop-types';
import React from "react";
import ReactDOM from "react-dom";
import * as WebDataRocks from "webdatarocks";
import "webdatarocks/webdatarocks.min.css";

export class Pivot extends React.Component {

		componentDidMount() {
			this.webdatarocks = new WebDataRocks({
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
	        return <div> Pivot </div>
	    }

	}

	Pivot.propTypes = {
		global: PropTypes.object,
		width: [PropTypes.string, PropTypes.number],
		height: [PropTypes.string, PropTypes.number],
		report: [PropTypes.string, PropTypes.object],
		toolbar: PropTypes.bool,
		customizeCell: PropTypes.func,
		cellclick: PropTypes.func,
		celldoubleclick: PropTypes.func,
		dataerror: PropTypes.func,
		datafilecancelled: PropTypes.func,
		dataloaded: PropTypes.func,
		datachanged: PropTypes.func,
		fieldslistclose: PropTypes.func,
		fieldslistopen: PropTypes.func,
		filteropen: PropTypes.func,
		fullscreen: PropTypes.func,
		loadingdata: PropTypes.func,
		loadinglocalization: PropTypes.func,
		loadingreportfile: PropTypes.func,
		localizationerror: PropTypes.func,
		localizationloaded: PropTypes.func,
		openingreportfile: PropTypes.func,
		querycomplete: PropTypes.func,
		queryerror: PropTypes.func,
		ready: PropTypes.func,
		reportchange: PropTypes.func,
		reportcomplete: PropTypes.func,
		reportfilecancelled: PropTypes.func,
		reportfileerror: PropTypes.func,
		reportfileloaded: PropTypes.func,
		runningquery: PropTypes.func,
		update: PropTypes.func,
		beforetoolbarcreated: PropTypes.func
	}

	export default Pivot;
