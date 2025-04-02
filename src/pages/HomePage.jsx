import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();

  return (
    <div>
      <p>HomePage</p>
    </div>
  );
}
