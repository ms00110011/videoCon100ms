import React from "react";

export const Home = ({ handleSubmit }) => {
  const [username, setUsername] = React.useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(username);
          }}
        >
          <input
            type="text"
            id="name"
            value={username}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
