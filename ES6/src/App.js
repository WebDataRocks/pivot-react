import React from 'react';

import * as WebDataRocksReact from '@webdatarocks/react-webdatarocks';
//import "webdatarocks/webdatarocks.highcharts";

export class App extends React.Component {

  myRef = null;

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  reportComplete = () => {
    console.log(">>>>>", this.myRef.webdatarocks.getReport());
  }

  render() {

    return (

    <div>
      <WebDataRocksReact.Pivot 
        ref={(elem) => {
          this.myRef = elem
        }} 
        toolbar={true} 
        report="https://cdn.webdatarocks.com/reports/report.json" 
        reportcomplete={() => {
          this.reportComplete();
        }}
      />
    </div>
    );
  }
}

export default App;
