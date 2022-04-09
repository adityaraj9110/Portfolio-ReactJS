import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './About.scss'

import { AppWrap,MotionWrap } from '../../wrapper'
// import { urlFor,client } from '../../client'


const abouts=[
  {title:"Front-End Development",description:"I am a good web developer.",imgUrl:'webdev.png'},
  {title:"OpenCv",description:"I have Working experience in OpenCV module.",imgUrl:'openCV.png'},
  {title:"Web Designs",description:"I am also a good designer.",imgUrl:'webDesigning.png'},
  {title:"Speech-Regonition",description:"I Have also working experience in Speech-recognition module",imgUrl:'SR.png'}

]
const About = () => {

//   const [about,setAbout]= useState([])

//   useEffect(()=>{
//     const query= '*[_type=="abouts"]';
//     client.fetch(query)
//       .then((data)=>{
//         setAbout(data);
//       })

//   },[]);


  return (
    <>
      <h2 className='head-text'>I Know That <span>Good Products</span> <br/> means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div 
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          className='app__profile-item'

          >
            <img src={about.imgUrl} alt="about.title" />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <h2 className='p-text' style={{marginTop:10}}>{about.description}</h2>


          
          </motion.div>
        ))}
      </div>


    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
    'about',
    "app__whitebg"
  );
