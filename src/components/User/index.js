import React, { useState } from "react";
import { InputGroup, InputGroupText, NavItem } from "reactstrap";
import { Input, Button } from "reactstrap";

function User() {
  const [hasUser, setUser] = useState("");

  const login = (e) => {
    // e.preventDefault();
    if (hasUser) {
      localStorage.setItem("user", hasUser);
      console.log(e.target.value);
      setUser("");
    }
  };

  return (
    <div className="container-sm">
      <InputGroup>
        <InputGroupText className="col-8">
          {" "}
          <NavItem id="navbar">
            <p>Todo List of{"  "}</p>
          </NavItem>
        </InputGroupText>
        <InputGroupText>
          <Input
            type="text"
            value={hasUser}
            onChange={(e) => setUser(e.target.value)}
          ></Input>
        </InputGroupText>
        <Button onClick={login}>Giriş</Button>
      </InputGroup>
    </div>
  );
}

export default User;
