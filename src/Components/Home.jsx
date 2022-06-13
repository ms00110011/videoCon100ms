import React from "react";
import styles from "./Home.module.css"

export const Home = ({ handleSubmit }) => {
  const [username, setUsername] = React.useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(username);
          }}
        >
          <input
            type="text"
            className={styles.field}
            id="name"
            value={username}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <input type="submit" 
            className={styles.submit}

          />
        </form>
      </div>
    </div>
  );
};
