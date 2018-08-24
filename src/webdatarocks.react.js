import * as React from "react";
import ReactDOM from "react-dom";

export class Pivot extends React.Component {

		webdatarocks;

		 propTypes: {
                global: React.PropTypes.object,
                width: [React.PropTypes.string, React.PropTypes.number],
                height: [React.PropTypes.string, React.PropTypes.number],
                report: [React.PropTypes.string, React.PropTypes.object],
                toolbar: React.PropTypes.bool,
                customizeCell: React.PropTypes.func,
                cellclick: React.PropTypes.func,
                celldoubleclick: React.PropTypes.func,
                dataerror: React.PropTypes.func,
                datafilecancelled: React.PropTypes.func,
                dataloaded: React.PropTypes.func,
                datachanged: React.PropTypes.func,
                fieldslistclose: React.PropTypes.func,
                fieldslistopen: React.PropTypes.func,
                filteropen: React.PropTypes.func,
                fullscreen: React.PropTypes.func,
                loadingdata: React.PropTypes.func,
                loadinglocalization: React.PropTypes.func,
                loadingreportfile: React.PropTypes.func,
                localizationerror: React.PropTypes.func,
                localizationloaded: React.PropTypes.func,
                openingreportfile: React.PropTypes.func,
                querycomplete: React.PropTypes.func,
                queryerror: React.PropTypes.func,
                ready: React.PropTypes.func,
                reportchange: React.PropTypes.func,
                reportcomplete: React.PropTypes.func,
                reportfilecancelled: React.PropTypes.func,
                reportfileerror: React.PropTypes.func,
                reportfileloaded: React.PropTypes.func,
                runningquery: React.PropTypes.func,
                update: React.PropTypes.func,
                beforetoolbarcreated: React.PropTypes.func
            }

		render() {
	        return (
	        	<div> Pivot </div>
	        	)
	    }

		componentDidMount() {
			var config = {};
			config.container = ReactDOM.findDOMNode(this);
			this.parseProps(config);
			this.webdatarocks = new window.WebDataRocks(config);
		}
		
		shouldComponentUpdate() {
			return false;
		}
		
		componentWillUnmount() {
			this.webdatarocks.dispose();
		}

		parseProps(config: Params) {
			if (this.props.toolbar !== undefined) {
				config.toolbar = this.props.toolbar;
			}
			if (this.props.width !== undefined) {
				config.width = this.props.width;
			}
			if (this.props.height !== undefined) {
				config.height = this.props.height;
			}
			if (this.props.report !== undefined) {
				config.report = this.props.report;
			}
			if (this.props.global !== undefined) {
				config.global = this.props.global;
			}
			if (this.props.customizeCell !== undefined) {
				config.customizeCell = this.props.customizeCell;
			}
			// events
			if (this.props.cellclick !== undefined) {
				config.cellclick = this.props.cellclick;
			}
			if (this.props.celldoubleclick !== undefined) {
				config.celldoubleclick = this.props.celldoubleclick;
			}
			if (this.props.dataerror !== undefined) {
				config.dataerror = this.props.dataerror;
			}
			if (this.props.datafilecancelled !== undefined) {
				config.datafilecancelled = this.props.datafilecancelled;
			}
			if (this.props.dataloaded !== undefined) {
				config.dataloaded = this.props.dataloaded;
			}
			if (this.props.datachanged !== undefined) {
				config.datachanged = this.props.datachanged;
			}
			if (this.props.fieldslistclose !== undefined) {
				config.fieldslistclose = this.props.fieldslistclose;
			}
			if (this.props.fieldslistopen !== undefined) {
				config.fieldslistopen = this.props.fieldslistopen;
			}
			if (this.props.filteropen !== undefined) {
				config.filteropen = this.props.filteropen;
			}
			if (this.props.fullscreen !== undefined) {
				config.fullscreen = this.props.fullscreen;
			}
			if (this.props.loadingdata !== undefined) {
				config.loadingdata = this.props.loadingdata;
			}
			if (this.props.loadinglocalization !== undefined) {
				config.loadinglocalization = this.props.loadinglocalization;
			}
			if (this.props.loadingreportfile !== undefined) {
				config.loadingreportfile = this.props.loadingreportfile;
			}
			if (this.props.localizationerror !== undefined) {
				config.localizationerror = this.props.localizationerror;
			}
			if (this.props.localizationloaded !== undefined) {
				config.localizationloaded = this.props.localizationloaded;
			}
			if (this.props.openingreportfile !== undefined) {
				config.openingreportfile = this.props.openingreportfile;
			}
			if (this.props.querycomplete !== undefined) {
				config.querycomplete = this.props.querycomplete;
			}
			if (this.props.queryerror !== undefined) {
				config.queryerror = this.props.queryerror;
			}
			if (this.props.ready !== undefined) {
				config.ready = this.props.ready;
			}
			if (this.props.reportchange !== undefined) {
				config.reportchange = this.props.reportchange;
			}
			if (this.props.reportcomplete !== undefined) {
				config.reportcomplete = this.props.reportcomplete;
			}
			if (this.props.reportfilecancelled !== undefined) {
				config.reportfilecancelled = this.props.reportfilecancelled;
			}
			if (this.props.reportfileerror !== undefined) {
				config.reportfileerror = this.props.reportfileerror;
			}
			if (this.props.reportfileloaded !== undefined) {
				config.reportfileloaded = this.props.reportfileloaded;
			}
			if (this.props.runningquery !== undefined) {
				config.runningquery = this.props.runningquery;
			}
			if (this.props.update !== undefined) {
				config.update = this.props.update;
			}
			if (this.props.beforetoolbarcreated !== undefined) {
				config.beforetoolbarcreated = this.props.beforetoolbarcreated;
			}
		}

	}
