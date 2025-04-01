import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p>HomePage</p>
    </div>
  );
}
