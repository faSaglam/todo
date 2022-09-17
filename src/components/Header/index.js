import React, { useEffect } from "react";
import { Navbar, NavItem, Nav, NavbarText, Button } from "reactstrap";
import User from "../User";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function Header() {
  const user = localStorage.getItem("user");
  useEffect(() => {
    localStorage.getItem("user", user);
  });
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <div className="container-sm ">
        <Navbar color="secondary" dark>
          {user && user ? (
            <Nav navbar>
              <NavbarText>Todo List of {user}</NavbarText>
              <NavItem>
                <Button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  Dark|Light
                </Button>
              </NavItem>
            </Nav>
          ) : (
            <User></User>
          )}
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
