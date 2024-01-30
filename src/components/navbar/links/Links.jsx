import Link from "next/link";
import React from "react";
import styles from './links.module.css';
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = false;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        // 
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
        <button>Logout</button>
        </>
      ) : (
        <NavLink item={{title: "Login", path: "/login"}} />
      )}
    </div>
  );
};

export default Links;
