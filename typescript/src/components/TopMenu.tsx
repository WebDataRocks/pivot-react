export default function TopMenu() {
  return (
    <header className="mainheader fixed-head">
      <div className="container-xl">
        <a
          href="https://www.webdatarocks.com/?r=gh_sample_react_ts"
          target="blank"
          rel="noopener noreferrer"
          className="logo"
        >
          <img
            src="https://www.webdatarocks.com/base/assets/img/logo.svg"
            alt=""
          />
        </a>
        <ul className="mainnav">
          <li>
            <a
              href="https://www.webdatarocks.com/demos/react/pivot-table-demo/?r=gh_sample_react_ts"
              target="blank"
              rel="noopener noreferrer"
            >
              Demos
            </a>
          </li>
          <li>
            <a
              href="https://www.webdatarocks.com/doc/integration-with-react/?r=gh_sample_react_ts"
              target="blank"
              rel="noopener noreferrer"
            >
              Integration with React
            </a>
          </li>
          <li>
            <a
              href="https://www.webdatarocks.com/doc/react/?r=gh_sample_react_ts"
              target="blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://www.webdatarocks.com/about-us/?r=gh_sample_react_ts"
              target="blank"
              rel="noopener noreferrer"
            >
              About us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
