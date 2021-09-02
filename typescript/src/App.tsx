import React from 'react';
import * as WebDataRocks from "react-webdatarocks";
import "webdatarocks/webdatarocks.css";
import './App.css';

const App: React.FC = () => {

  const ref: React.RefObject<WebDataRocks.Pivot> = React.useRef<WebDataRocks.Pivot>(null);   

  const onReportComplete = () => {
    if (ref.current) {
      ref.current.webdatarocks.off("reportcomplete");
      console.log(ref.current.webdatarocks);
    }
  }
  
  return (
    <div className="App">
      <WebDataRocks.Pivot ref={ref} toolbar={true} width="100%" reportcomplete={() => onReportComplete()} report="https://cdn.webdatarocks.com/reports/report.json"></WebDataRocks.Pivot>
    </div>
  );
}

export default App;
