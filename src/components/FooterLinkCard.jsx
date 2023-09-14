import React from "react";

const FooterLinkCard = ({ title, links }) => {
  return (
    <div>
      <h5 className="text-white font-montserrat text-2xl mb-6 leading-normal font-medium ">{title}</h5>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="text-white-400 hover:text-slate-gray text-base font-montserrat leading-normal cursor-pointer">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkCard;
