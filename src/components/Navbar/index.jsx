// import React from "react";
import viteLogo from "/vite.svg";
import { Notification } from "./Notification";
function Navigation() {
  const navs_list = [
    { name: "Home", url: "/#" },
    { name: "About", url: "/#" },
    { name: "Contact Us", url: "/#" },
  ];

  return (
    <>
      <nav className="flex bg-slate-200 justify-between py-auto">
        <div className="flex">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          {navs_list.map((x, index) => (
            <ul key={index} className="m-4 flex space-x-4 my-auto">
              <li className=" p-2 hover:bg-blue-300 hover:text-white">
                <a href={x.url}>{x.name}</a>
              </li>
            </ul>
          ))}
        </div>
        <Notification />
      </nav>
    </>
  );
}

export default Navigation;
