import { sponsors } from "./placeholders";

export default function Sponsors() {
  return (
    <div className="sponsors">
      <h5>
        Sponsors (<a href="https://opencollective.com/bower">become one</a>):
      </h5>
      {sponsors.map(({ alt, href, src }) => (
        <a key={alt} className="sponsors-link" rel="sponsored" href={href}>
          <img className="sidebar-logo" src={src} alt={alt} />
        </a>
      ))}
    </div>
  );
}
