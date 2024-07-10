import { supporters } from "./placeholders";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/bower/bower.github.io/issues">
          Help improve these docs. Open an issue or pull request.
        </a>
      </p>
      <p>
        Our supporters:{" "}
        {supporters.map(({ href, name }, index) => (
          <span key={name}>
            <a rel="sponsored" href={href}>
              {name}
            </a>
            {index === supporters.length - 1 ? "" : " | "}
          </span>
        ))}
      </p>
    </footer>
  );
}
