import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <ul className="header-nav">
          <li>
            <a className="active" href="/docs/">
              Docs
            </a>
          </li>
          <li>
            <a href="/search/">Search packages</a>
          </li>
          <li>
            <a href="/blog/">Blog</a>
          </li>
          <li>
            <a href="/stats/">Stats</a>
          </li>
        </ul>
        <img className="header-logo" src={Logo} alt="logo"/>
        <div className="header-title">
          <h1>Bower Search</h1>
          <h4>
            Powered by <a href="https://libraries.io/">libraries.io</a>
          </h4>
        </div>
      </div>
      <div className="header-notification">
        ...psst! While Bower is maintained, we recommend using{" "}
        <a href="https://yarnpkg.com/">Yarn</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> for front-end projects.{" "}
        <a href="https://bower.io/blog/2017/how-to-migrate-away-from-bower/">
          Read how to migrate
        </a>
        !
      </div>
    </div>
  );
}
