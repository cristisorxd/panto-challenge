import React from "react";
import classes from "./FooterSections.module.scss";
import strings from "../../theme/strings";

const FooterSections = () => {
  return (
    <footer className={classes.sections}>
      {strings.footer.map((text) => {
        return (
          <div key={text.id}>
            <h6 className={classes.title}>{text.title}</h6>
            <ul className={classes.uList}>
              {text.listItems.map((item) => (
                <li key={item.id} className={classes.listItem}>
                  {item.icon ? (
                    <img
                      className={classes.socialIcons}
                      src={item.icon}
                      alt="Social Media Icons"
                    />
                  ) : (
                    <span></span>
                  )}
                  {item.link ? (
                    <a className={classes.links} href={item.link}>
                      {item.title}{" "}
                    </a>
                  ) : (
                    item.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </footer>
  );
};

export default FooterSections;
