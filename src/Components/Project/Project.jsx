import React from 'react'
import ProjectIcone from '../../assets/APP ICONE CP.png'
import Vyom from '../../assets/Vyom.png.jpg'
import Port from '../../assets/HMI.png'
import './Project.css'
import { CiLocationArrow1 } from "react-icons/ci";

const projectsData = [
  {
    id: 1,
    title: "Canopy Sentinel — Satellite-Based Deforestation Tracker App",
    description: "An Android Studio application powered by Google Geo Tools and satellite imagery. It detects canopy loss, illegal logging, and deforestation trends in real-time by analyzing geospatial data. The app provides alerts, visualization maps, and insights to support conservationists, policymakers, and NGOs in protecting forests.",
    image: ProjectIcone,
    tech: [
      { id: 1, list: "Java" },
      { id: 2, list: "GeoAPI" },
      { id: 3, list: "Satellite-Data" }
    ]
  },
  {
    id: 2,
    title: "VyomVeda Space Tech — Space Tracking Radar System",
    description: "Radar-based concept to detect and track orbital debris and particles in space, enhancing mission safety and space situational awareness.",
    image: Vyom,
    tech: [
      { id: 1, list: "MATLAB" },
      { id: 2, list: "Python" },
      { id: 3, list: "(SDR) Tools" }
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal website to showcase expertise in AI, ML, research, and space tech innovation, with sections for projects, achievements, and publications.",
    image: Port,
    tech: [
      { id: 1, list: "React.js" },
      { id: 2, list: "Vite" },
      { id: 3, list: "JavaScript" }
    ]
  }
]

const Project = () => {
  const renderProjectsData = projectsData.map(project => {
    return (
      <div   className="card flex gap-5 project" key={project.id}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-content">
            <ul className='flex gap-1 '>
               {project.tech.map(technology =>{
                return(
                    <li key={technology.id} className='list  stretch ' >{technology.list}</li>
                )
               }

               )}
            </ul>
          <h3 className='mt-2'>{project.title}</h3>
          <p>{project.description}</p>
          <a heref="#" className='icon-container border-inverse rotate '>
           <CiLocationArrow1 />
          </a>
         
        </div>
      </div>
    )
  })

  return (
    <section>
      <div id='project' className="wrapper p-block-9">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="My Portfolio">My Portfolio</span>
            <h2>
              Let's Have a look <br />at<span className='green-text'> My Portfolio </span>
            </h2>
          </div>
          <a href="#" className='btn self-end'> View All Projects</a>
        </div>
        <div className='flex column gap-2 mt-5 stretch'>
          {renderProjectsData}
        </div>
      </div>
    </section>
  )
}

export default Project
