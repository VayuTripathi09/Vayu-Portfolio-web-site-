import React from 'react'
import { FaTrophy } from "react-icons/fa"; // Trophy icon

const Achievements = () => {

  const achievements = [
    {
      id: 1,
      title: "Top 3 Position",
      subtitle: "Canopy Sentinels & Deforestation Tracker",
      description: "Secured Top 3 in Environmental Impact Analysis with apps Canopy Sentinels & Deforestation Tracker",
      year: "2025",
    }
  ];

  return (
    <section>
      <div id='achievements' className="wrapper p-block-9 boder-btm">
        <div className='text-center'>
          <span className='sub-text overlay-text middle' datatype='Achievement'>Achievement</span>
          <h2>
            My <span className="green-text">Achievement</span> 
          </h2>
        </div>

        <div className="mt-5 flex gap-5 justify-center">
          {achievements.map(item => (
            <div key={item.id} className="card design">
              
              {/* Card Header with Green Icon */}
              <div className='flex gap-1 boder-btm p-bottom-1'>
                <div className='icon-container green-inverse'>
                  <FaTrophy /> 
                </div>
                <h3>{item.title}</h3>
              </div>

              {/* Card Body */}
              <div className="flex between mt-2">
                <div className="sub-text">{item.subtitle}</div>
                <p>{item.description}</p>
                <div className="list">{item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
