import React from 'react';

import * as WebDataRocksReact from './webdatarocks.react';

export class App extends React.PureComponent {

  render() {

    return (

    <div>
      <WebDataRocksReact.Pivot toolbar={true} report="https://cdn.webdatarocks.com/reports/report.json"/>
    </div>
    );
  }
}

export default App;
