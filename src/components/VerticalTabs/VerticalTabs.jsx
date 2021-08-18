import React from "react";
import "./VerticalTabs.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomScroll from 'react-custom-scroll';

const VerticalTabs = () => {
  return (
    <Tabs>
      <CustomScroll>
        <TabList>
          <Tab>
            <p>Google</p>
          </Tab>
          <Tab>
            <p>Apple</p>
          </Tab>
          <Tab>
            <p>Microsoft</p>
          </Tab>
          <Tab>
            <p>Facebook</p>
          </Tab>
          <Tab>
            <p>Tesla</p>
          </Tab>
        </TabList>
      </CustomScroll>

      <TabPanel>
        <div className="panel-content">
          <h4>
            Engineer <span className="green-color">@ Google</span>
          </h4>
          <div className="panel-date">May 2018 - Present</div>
          <ul className="panel-list">
            <li className="panel-item">
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li className="panel-item">
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li className="panel-item">
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <h4>
            Studio Developer <span className="green-color">@ Apple</span>
          </h4>
          <div className="panel-date">January - April 2018</div>
          <ul className="panel-list">
            <li className="panel-item">
              Worked with a team of three designers to build a marketing website
              and e-commerce platform for blistabloc, an ambitious startup
              originating from Northeastern
            </li>
            <li className="panel-item">
              Helped solidify a brand direction for blistabloc that spans both
              packaging and web
            </li>
            <li className="panel-item">
              Interfaced with clients on a weekly basis, providing technological
              expertise
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <h4>
            Engineer <span className="green-color">@ Microsoft</span>
          </h4>
          <div className="panel-date">July - December 2017</div>
          <ul className="panel-list">
            <li className="panel-item">
              Developed and shipped highly interactive web applications for
              Apple Music using Ember.js
            </li>
            <li className="panel-item">
              Built and shipped the Apple Music Extension within Facebook
              Messenger leveraging third-party and internal APIs
            </li>
            <li className="panel-item">
              Architected and implemented the front-end of Apple Music's
              embeddable web player widget, which lets users log in and listen
              to full songs in the browser
            </li>
            <li className="panel-item">
              Contributed extensively to MusicKit.js, a JavaScript framework
              that allows developers to add an Apple Music player to their web
              apps
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <h4>
            Developer <span className="green-color">@ Facebook</span>
          </h4>
          <div className="panel-date">May 2018 - Present</div>
          <ul className="panel-list">
            <li className="panel-item">
              Collaborated with a small team of student designers to spearhead a
              new brand and design system for Scout’s inaugural student-led
              design conference at Northeastern
            </li>
            <li className="panel-item">
              Worked closely with designers and management team to develop,
              document, and manage the conference’s marketing website using
              Jekyll, Sass, and JavaScript
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <h4>
            Designer <span className="green-color">@ Tesla</span>
          </h4>
          <div className="panel-date">May 2018 - Present</div>
          <ul className="panel-list">
            <li className="panel-item">
              Engineered and maintained major features of Starry's
              customer-facing web app using ES6, Handlebars, Backbone,
              Marionette and CSS
            </li>
            <li className="panel-item">
              Proposed and implemented scalable solutions to issues identified
              with cloud services and applications responsible for communicating
              with Starry Station
            </li>
            <li className="panel-item">
              Interfaced with user experience designers and other developers to
              ensure thoughtful and coherent user experiences across Starry’s
              iOS and Android mobile apps
            </li>
          </ul>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default VerticalTabs;
