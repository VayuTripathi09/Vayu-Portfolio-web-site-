import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import './Education.css'

const Education = () => {

  const Card = ({ item, title, icon }) => {
    return (
      <div className='card design'>
        <div className='flex gap-1 boder-btm p-bottom-1'>
          <div className='icon-container green-inverse'>
            {icon}
          </div>
          <h3>{title}</h3>
        </div>

        <div className='mt-2'>
          {item.map(data => (
            <div key={data.id} className='flex between mt'>
              <div>
                {/* If it's education */}
                {data.institute && (
                  <>
                    <div className="sub-text">{data.institute}</div>
                    <p>{data.field}</p>
                  </>
                )}

                {/* If it's work experience */}
                {data.role && (
                  <>
                    <div className="sub-text">{data.role}</div>
                    <p>{data.company}</p>
                  </>
                )}
              </div>
              <div className='list'>
                {data.data || data.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section>
      <div className="wrapper p-block-9 boder-btm">
        <div className='text-center'>
          <span className='sub-text overlay-text middle' datatype='Education & Work'>Education&Work</span>
          <h2>
            My <span className="green-text">Academic & <br /> Professional</span> Journey
          </h2>
        </div>

        <div className='mt-5 flex gap-5'>
          <Card item={education} title="Education" icon={<FaGraduationCap />} />
          <Card item={workExperience} title="Work Experience" icon={<BsSuitcaseLgFill />} />
        </div>
      </div>
    </section>
  )
}

export default Education


// ======================= Data =======================
const education = [
  {
    id: 1,
    institute: 'Galgotias University',
    field: 'B.Tech in CSE with AI and ML',
    data: '2024 - 2028',
  },
  {
    id: 2,
    institute: 'Shandilya Public School',
    field: 'Class 9th to 12th',
    data: '2018 - 2023',
  },
  {
    id: 3,
    institute: 'S.S.V English School',
    field: 'Primary to Class 8th',
    data: '2010 - 2018',
  }
];

const workExperience = [
  {
    id: 1,
    role: "Founder & CEO",
    company: "Vyomveda",
    duration: "2024 - Pres.",
  },
  {
    id: 2,
    role: "AI/ML Intern",
    company: "ElevateLabs",
    duration: "2025-2025",
  },
  {
    id: 3,
    role: "AI & Decentralization Intern",
    company: "Block Se Block Const",
    duration: "2025-2025",
  }
];
