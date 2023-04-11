import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const App = () => {
  const [subs, setSubs] = useState([
    {
      nick: "dapelu",
      subMonths: 3,
      avatar: "https://i.pravatar.cc/150?u=dapelu",
      descripcion: "dapelu modera a veces",
    },
    {
      nick: "sergio_serrano",
      subMonths: 7,
      avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    },
  ]);

  return (
    <div className="App">
      <h1>Midu Subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <Image
                src={sub.avatar}
                alt={`avatar for ${sub.nick}`}
                width={150}
                height={100}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
