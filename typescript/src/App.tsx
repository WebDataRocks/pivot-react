import { Component } from 'react';
import './App.css';
import TopMenu from './components/TopMenu.tsx';
import * as WebDataRocksReact from '@webdatarocks/react-webdatarocks';

class App extends Component {
  render() {
    return (
      <div id="container">
        <TopMenu />
        <div id="pivot">
        <WebDataRocksReact.Pivot
          toolbar={true}
          height="600"
          report="https://cdn.webdatarocks.com/reports/report.json"
        />
        </div>
      </div>
    );
  }
}

export default App;