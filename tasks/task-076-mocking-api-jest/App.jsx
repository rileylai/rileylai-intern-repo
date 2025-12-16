import React, { useEffect, useState } from "react";
import { fetchUser } from "./api";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    fetchUser()
      .then((data) => {
        if (active) {
          setUser(data);
        }
      })
      .catch((err) => {
        console.error(err);
        if (active) {
          setError("Failed to load user");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User</h1>
      <p>{user.name}</p>
    </div>
  );
}

export default App;
