export default function Button({ as: Tag = "button", variant = "primary", className = "", children, ...props }) {
  const base = variant === "primary" ? "btn btn-primary" : "btn btn-ghost";
  return (
    <Tag className={`${base} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
