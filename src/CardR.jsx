import React from "react";
import Card from "./Card";
import Data from "./Data1";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

const checkRoutes = (route) => {
  const routes = ["/", "/scratch", "/appinv", "/issues", "/webdev", "/vr"];
  return routes.includes(route);
};

const CardR = (props) => {
  const location = useLocation();
  return (
    <>
      <div className="cardr container">
        <div className="row text-center justify-content-start">
          {props.tech === "home"
            ? // eslint-disable-next-line
              Data.map((d) => {
                if ("/" + d.tech === location.pathname) {
                  return (
                    <Card
                      url={d.url}
                      imgSrc={d.imgUrl}
                      name={d.name}
                      tech={d.tech}
                      techName={d.techName}
                      level={d.level}
                      pNo={d.pNo}
                    />
                  );
                } else if (checkRoutes(location.pathname) === false) {
                  return <Menu tech="home" />;
                }
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CardR;
