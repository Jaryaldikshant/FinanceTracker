import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.jpg";
import { menuItems } from "../../Utils/menuItems";
import { signout } from "../../Utils/icon";

function Navigation({ active, setActive, isOpen, onToggle }) {
  return (
    <NavStyled isOpen={isOpen}>
      <div className="user-con" onClick={onToggle}>
        <img src={avatar} alt="User Avatar" />
        {isOpen && (
          <div className="text">
            <h2>Chris</h2>
            <p>Your Assets</p>
          </div>
        )}
      </div>

      <ul className="menu-items">
        {menuItems.map((items) => (
          <li key={items.id} onClick={() => setActive(items.id)}
            className={active === items.id ? 'active' : ''}
          >
            {items.icon}
            {isOpen && <span>{items.title}</span>}
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <li>
          {signout}
          {isOpen && <span>Sign Out</span>}
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: ${(props) => (props.isOpen ? '250px' : '60px')}; /* Toggle width */
  height: 100%;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOpen ? 'flex-start' : 'center')};
  transition: width 0.3s ease;
  /* Keep existing styles intact */
  .user-con {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .text {
      margin-left: 15px;
      display: ${(props) => (props.isOpen ? "block" : "none")};
      h2 {
        margin: 0;
        font-size: 1.7rem;
      }
      p {
        margin: 0;
        font-size: 1.1rem;
        color: gray;
      }
    }
  }

  .menu-items {
    list-style: none;
    padding: 0;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
      margin-bottom: 20px;
      cursor: pointer;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #333;
      }

      span {
        margin-left: 10px;
        font-size: 1.2rem;
        display: ${(props) => (props.isOpen ? "inline" : "none")};
      }
    }
  }

  .active {
    color: rgba(103, 130, 210) !important;
    font-weight: 800;

    i {
      color: rgba(103, 130, 210) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  .bottom-nav {
    margin-top: auto;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
      cursor: pointer;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #333;
      }

      span {
        margin-left: 10px;
        font-size: 1.2rem;
        display: ${(props) => (props.isOpen ? "inline" : "none")};
      }
    }
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? '200px' : '60px')};

    .user-con img {
      width: 45px;
      height: 45px;
    }

    .user-con .text h2 {
      font-size: 1.5rem;
    }

    .user-con .text p {
      font-size: 1rem;
    }

    .menu-items li span,
    .bottom-nav li span {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.isOpen ? '150px' : '60px')};
    padding: 15px;

    .user-con img {
      width: 40px;
      height: 40px;
    }

    .user-con .text h2 {
      font-size: 1.3rem;
    }

    .user-con .text p {
      font-size: 0.9rem;
    }

    .menu-items li span,
    .bottom-nav li span {
      font-size: 0.9rem;
    }
  }
`;

export default Navigation;
