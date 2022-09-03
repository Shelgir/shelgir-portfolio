import React from "react";
import { Fieldset, Cutout, Anchor, Divider } from "react95";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Fieldset label="My Story">
        <div className="flex justify-between items-center gap-5">
          <p className="w-1/2">
            My name is Shelgir, I'm a 24 years old web developer with the goal
            of making an impact in my field of work and those who want to join
            this field in the years to come. I joined the tech world while I was
            in college starting with exploring the design tools at the time,
            I've been working and learning ever since, I've never stopped
            learning even after graduating, beacuse in the tech world what you
            know now, may not be usable in a few years time. After working for
            almost 2 years in the design field, I've started web development, I
            won my first hackathon in late 2021 in a team of 4, and got my first
            job after that instantly in the web development field, while working
            as a developer I started researching Data Science and joined a 4
            month Data Science Traineeship and since then that has been leading
            me towards the next step in my career. I hope my story has inspired
            you and eventually leads you towards a successful tech career.
          </p>
          <Cutout>
            <Image
              src="/images/Shelgir Raouf_Iraq_2022.jpeg"
              alt="Picture of the author"
              width={320}
              height={180}
            />
          </Cutout>
        </div>
      </Fieldset>
      <div className="my-5"></div>
      <Fieldset label="Work Experiences" className="flex flex-col gap-10 py-10">
        <div className="flex justify-start items-center gap-5">
          <div className="w-1/2 flex flex-col">
            <h1 className="font-bold">
              Full Stack Web Developer -{" "}
              <Anchor target="_blank" href="https://ovanya.com/">
                Ovanya
              </Anchor>
            </h1>
            <p>May 2022 - Present</p>
            <ul className="mt-3">
              <li>
                • Working as a full stack developer with a team of data
                scientists at Ovanya, working on NextJs for front end and NodeJs
                and NestJs for back end
              </li>
              <li>
                • Working in collaboration with a team of experienced developers
                using agile methodology for weekly sprints in projects
              </li>
              <li>• Unit testing each deliverable before production level</li>
              <li>• Automate deployment and Integration with CI/CD</li>
              <li>
                • Collecting data through web scraping methods using Python
                libraries
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Skills</h1>
            <ul>
              <li> • Next.js </li>
              <li> • NestJS </li>
              <li> • Unit Testing </li>
              <li> • Web Scraping </li>
              <li> • Python</li>
              <li> • Agile Methodologies</li>
              <li> • CI/CD</li>
            </ul>
          </div>
        </div>
        <Divider />
        <div className="flex justify-start items-center gap-5">
          <div className="w-1/2 flex flex-col">
            <h1 className="font-bold">
              Software Developer -{" "}
              <Anchor target="_blank" href="https://kubak.co/">
                Kubak
              </Anchor>
            </h1>
            <p>Dec 2021 - May 2022</p>
            <ul className="mt-3">
              <li>
                • Acting Front End developer, working with latest technologies,
                such as Nuxtjs, Angular, Nextjs, Reactjs, using the most recent
                UI libraries like TailwindCSS
              </li>
              <li>
                • Working with UI & UX designer in our dev team to meet the
                required deliverables
              </li>
              <li>
                • Working in collaboration with the other developers, to work as
                efficiently as possible
              </li>
              <li>
                • Automate our work with Continuous Integration and Continuous
                Deployment
              </li>
              <li>
                • Use of web sockets while working with maps implemented through
                leaflet.js
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Skills</h1>
            <ul>
              <li> • Vue.js </li>
              <li> • Nuxt.js </li>
              <li> • Angular </li>
              <li> • Tailwind CSS </li>
              <li> • Docker </li>
              <li> • Agile Methodologies</li>
              <li> • CI/CD</li>
            </ul>
          </div>
        </div>
        <Divider />
        <div className="flex justify-start items-center gap-5">
          <div className="w-1/2 flex flex-col">
            <h1 className="font-bold">
              Art Director | Graphic Designer -{" "}
              <Anchor target="_blank" href="https://mazeee.com/">
                Mazeee Creative Agency
              </Anchor>
            </h1>
            <p>Feb 2020 - Sep 2020</p>
            <ul className="mt-3">
              <li>• Creating design blueprints for clients</li>
              <li>• Creating presentations and project plans</li>
              <li>
                • Meetings with clients and negotiating terms and conditions
              </li>
              <li>
                • Preparing report letters to manager, and the clients to keep
                them updated on monthly basis
              </li>
              <li>
                • Providing after sales support with vendors, solving problems,
                and maintaining a healthy relationship with vendors
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Skills</h1>
            <ul>
              <li> • Web Development</li>
              <li> • Illustration </li>
              <li> • Graphic Design </li>
            </ul>
          </div>
        </div>
      </Fieldset>
    </>
  );
}
