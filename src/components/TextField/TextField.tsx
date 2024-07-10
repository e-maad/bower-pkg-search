import "./textField.scss";

export default function TextField(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input data-testid="text-field" className="text-field" {...props} />;
}
