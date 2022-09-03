import React from "react";
import { Fieldset, Anchor, Divider } from "react95";

export default function education() {
  return (
    <Fieldset label="Education" className="flex flex-col gap-10 py-10">
      <div className="flex justify-start items-center gap-5">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold">
            Data Science Traineeship -{" "}
            <Anchor target="noopener" href="https://ovanya.com/">
              Ovanya
            </Anchor>
          </h1>
          <p>Feb 2022 - May 2022</p>
          <ul className="mt-3">
            <h1 className="font-bold">First Phase</h1>
            <li>• Git/Github</li>
            <li>
              • The Python Programming Language And Its Essential Libraries For
              Data Science (Numpy,Pandas And Matplotlib)
            </li>
            <li>• Brief Overview On Relational Databases</li>
            <li>• Web Scraping</li>
            <li>• How To Build Recommendation Systems</li>
            <li>
              • Regression Analysis (Linear & Logistic) And Cluster Analysis
            </li>
            <li>• Building Neural Networks From Scratch(Using NumPy)</li>
            <li>• Text Classification</li>
            <li>• Time-Series Analysis (ARIMA And Its Different Variations)</li>
            <li>• RNN And LSTM</li>
            <li>• Transformers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Second Phase </h1>
          <p>
            During the second 4 weeks, participants were divided into different
            groups, each group was assigned a different project. although the
            trainees where guided through out the process, the trainees had to
            undertake the whole project by themselves and learn the ins and outs
            of data collection and model training. during the project phase
            participants learned the following skills:
          </p>
          <ul>
            <li> • Participants Learned How To Collect/Generate Data </li>
            <li> • Data Augmentation</li>
            <li> • Understanding The Logic Behind Data Annotation </li>
            <li>
              • Taking Advantage Of Transfer Learning And Pre-Trained Models
            </li>
            <li>
              • Exploring Different Models For Their Use Cases And Choosing The
              Best One
            </li>
            <li> • Model Training</li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className="flex justify-start items-center gap-5">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold">
            B.Sc. Information Technology -{" "}
            <Anchor target="noopener" href="https://auis.edu.krd/">
              American University of Iraq - Sulaimani
            </Anchor>
          </h1>
          <p>Sep 2016 - Jun 2021</p>
          <ul className="mt-3">
            <li>
              • Studied the foundations of Information Technology fields,
              Networking, Programming, Web Development, Database, and Robotics
            </li>
            <li>
              • Experience new trendy programming languages for data structure
              and algorithms like GoLang
            </li>
            <li>
              • Explore the field of Machine Learning and Artificial
              Intelligence
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <Divider />
      <div className="flex justify-start items-center gap-5">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold">
            UX/UI Design Bootcamp -{" "}
            <Anchor target="noopener" href="https://www.re-coded.com/">
              Re:Coded
            </Anchor>
          </h1>
          <p>Jun 2022 - Dec 2022</p>
          <ul className="mt-3">
            <li>
              • Practicing Design Thinking, UX Research Methods, Interaction
              Design, Accessibility, Visual Design, UI Design, Testing,
              Wireframes and prototypes
            </li>
            <li>
              • Working in teams throughout the bootcamp, but with different
              members every now and then, building team working skills and
              experiencing the diversity of working with people with different
              backgrounds and though processes
            </li>
            <li>
              • Getting access to over 60 hours of content to help with buliding
              my CV and LinkedIn portfolio and preparing for interviews
            </li>
            <li>
              • Getting paired with industry veterans in Bloomberg who help me
              navigate my next steps in my career after graduation
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <Divider />
      <div className="flex justify-start items-center gap-5">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold">
            Full-Stack Development Bootcamp -{" "}
            <Anchor target="noopener" href="https://bootcamp.bit.potan.co/">
              Bit Bootcamp
            </Anchor>
          </h1>
          <p>Oct 2021 - Dec 2021</p>
          <ul className="mt-3">
            <li>
              • We went through the basics of web development, HTML, CSS, and JS
            </li>
            <li>
              • Discussed the common topics of development such as, Version
              Control, Front end libraries, JS, and responsive web design
            </li>
            <li>
              • Started learning Reactjs, SPA, State and Lifecycle, JSX, and we
              also went over Deployment methodologies
            </li>
            <li>
              • Started learning back end development with nodejs, and used
              MongoDb as our database
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </Fieldset>
  );
}
