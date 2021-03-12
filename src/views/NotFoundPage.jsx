import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      404 <Link to="/">Go to home</Link>
    </div>
  );
}
