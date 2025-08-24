import React from 'react'
import './Services.css'
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import { GiDigitalTrace } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";

const Services = () => {

const renderServicesData = servicesData.map(service => {
    return (
       <div className='card design' key={service.id}>

        <span className='service-icon'>{service.icon}</span>
       <h4 className= 'm-block-1'>{service.title}</h4>
        <p className='m-block-1'>{service.description}</p>
        <a href="#" className='link'>
            Learn More
            &nbsp;
            <CiLocationArrow1 className='arrow green-text' />
        </a>

       </div>
    )

})

  return (
    <section>
        <div id='services' className='wrapper p-block-9 boder-btm'> 
        <div className="flex between gap-4">
            <div>
                <span className="sub-text overlay-text" datatype='Services'>My Specialization</span>
                <h2>
                  <span className='green-text'> Services </span> I Provide
                </h2>
            </div>

            <a href="#" className='btn self-end'> View All Services</a>
        </div>

        <div className='flex gap-2 stretch mt-5'>

            { renderServicesData}

        </div>

        </div>
    </section>
  )
}

export default Services




const servicesData = [
    {
        id : 1,
        title: 'AI & Machine Learning',
        description: '🚀 Transform data into intelligence with AI apps, NLP solutions, and machine learning-driven analytics.',
        icon: <GiArtificialIntelligence />,
    },

    {
        id : 2,
        title: 'Web Development',
        description: '🌐 Build responsive full-stack websites using React.js, Tailwind CSS, and secure ICP/Motoko backend systems..',
        icon: <MdOutlineWeb />,
    },

    {
        id : 3,
        title: 'Digital Electronics',
        description: '⚡ Prototyping, circuit design, and semiconductor-based solutions to create reliable and modern electronics..',
        icon: <GiDigitalTrace />,
    }
]