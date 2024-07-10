import { Module } from "../../hooks/types";

export default function NameCell({ name, homepage, description, url }: Module) {
  return (
    <div className="name-cell">
      <h4>
        <a href={url} rel="noopener noreferrer">
          {name}
        </a>
      </h4>
      <p className="description">{description}</p>
      <a href={homepage} rel="noopener noreferrer">
        <svg className="icon">
          <use xlinkHref="#icon-home" />
        </svg>{" "}
        Homepage
      </a>
    </div>
  );
}
