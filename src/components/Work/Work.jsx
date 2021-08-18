import React from "react";
import "./Work.scss";
import dataWorks from "../../data/dataWork";
import WorkItem from "../WorkItem/WorkItem";

const Work = () => {
  return (
    <section className="work">
      <div className="work__container">
        <div className="title">
          <span className="green-color">03.</span>
          Some Things I’ve Built
        </div>
        {
          dataWorks.map((work, i) => {
            return <WorkItem {...work} key={i} />
          })
        }


      </div>
    </section>
  );
};

export default Work;
