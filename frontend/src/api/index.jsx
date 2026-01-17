import { useEffect, useState } from "react";

export const API = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  });

  return <h1>{msg}</h1>;
};
