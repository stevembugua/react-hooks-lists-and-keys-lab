import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const Link = function({link}) {
    return <a href={`#${link}`}>{link}</a>
  }

  return(
    <nav>
      {/* display an <a> tag for each link here */
      links.map((link, index) => (
        <Link key={index} link={link} />
      ))
      }
    </nav>
  ) ;
}

export default NavBar;