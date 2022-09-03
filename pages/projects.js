import React from "react";
import { Fieldset, Anchor, Button } from "react95";

export default function projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Fieldset className="flec flex-col ">
        <h1 className="font-bold">Daroon</h1>
        <p>
          Daroon, the project that was presented in the Bit Festival Hackathon
          2021, by our team of 4 people, which is a platform to connect
          beneficiaries to doctors of mental health, with the stand out feature
          of getting the service with keeping your identity unknown. This idea
          was implemented with the MERN stack technology, all JavaScript by the
          four of us, two back-end developers, and two front-end developers. The
          idea and the hard work came to pay and we won the hackathon of 2021.
        </p>
      </Fieldset>
      <Fieldset className="flec flex-col">
        <h1 className="font-bold">Chakika</h1>
        <p>
          Chakika, is an e-commerce web application, used to build bridges
          between the community and the car part market place, where shops offer
          what they have on the application and the users buy and ask for
          car-related services. This project was presented to AUIS (American
          University of Iraq – Sulaimani) as the final year capstone for
          Information Technology department. The application was built using
          JavaScript, the front-end was developed by React, and the back-end was
          developed by Node.js. This project was also presented in the Sulaimani
          TECHFEST of 2021 as one of the creative ideas, and was warmly greeted
          by business owners and tech enthusiasts.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <a
            href="https://github.com/aryankarim/chakika-capstone-frontend"
            target="noopener"
          >
            <Button>Front End</Button>
          </a>
          <a
            href="https://github.com/aryankarim/chakika-capstone-backend"
            target="noopener"
          >
            <Button>Back End</Button>
          </a>
        </div>
      </Fieldset>
      <Fieldset className="flec flex-col">
        <h1 className="font-bold">Human Resource Management</h1>
        <p>
          HRM Panel is a web application project with the aim of making absences
          and appreances in the office easier, the projcet was build in Nuxt in
          the front end with the UI library of TailwindCSS, and the backend has
          been built with expressJs on top of NodeJs, with the database of
          MongoDB, the prjocet contains hierarchical roles and permissions, and
          it contains users and managers, its ready to be used.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <a href="https://github.com/Shelgir/hrm-panel" target="noopener">
            <Button>Front End</Button>
          </a>
          <a href="https://github.com/Shelgir/hrm" target="noopener">
            <Button>Back End</Button>
          </a>
          <a href="https://hrm-panel.netlify.app/" target="noopener">
            <Button>Demo 💻</Button>
          </a>
        </div>
      </Fieldset>
      <Fieldset className="flec flex-col">
        <h1 className="font-bold">Shelgir Blogs</h1>
        <p>
          Shelgirs Blogs is a web application used like a journal of my life,
          posting the highlights of my career, education, and life in general
          the application has been build with Angular without a backend, the app
          uses Firebase SDK directlty, and the blogs are saved on the Firebase
          server
        </p>
        <div className="flex items-center gap-3 mt-5">
          <a
            href="https://github.com/Shelgir/shelgir-personal-blog"
            target="noopener"
          >
            <Button>Front End</Button>
          </a>
          <a href="https://shelgir.netlify.app/" target="noopener">
            <Button>Demo 💻</Button>
          </a>
        </div>
      </Fieldset>
    </div>
  );
}
