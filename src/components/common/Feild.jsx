import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {error?.message && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
}

const getChildId = (children) => {
  try {
    const child = React.Children.only(children);
    return child?.props?.id || undefined;
  } catch {
    return undefined;
  }
};
