import React from 'react';
import './style.css';


        const skills = [
          {
            skill: "HTML+CSS",
            level: "advanced",
            color: "#2662EA"
          },
          {
            skill: "JavaScript",
            level: "advanced",
            color: "#EFD81D"
          },
          {
            skill: "Web Design",
            level: "advanced",
            color: "#C3DCAF"
          },
          {
            skill: "Git and GitHub",
            level: "intermediate",
            color: "#E84F33"
          },
          {
            skill: "React",
            level: "advanced",
            color: "#60DAFB"
          },
          {
            skill: "Svelte",
            level: "beginner",
            color: "#FF3B00"
          }
        ];

export default function App() {
  return (
  <div className='card'>
    <ProfileImage/>
    <div className='data'> 
      <Description/>
      <Skillset skills={skills}/>
    </div>
  </div>
  );
}

const ProfileImage = () => <img src='' alt=''></img>

const Description = () => {
  return (
  <div>
    <h3> TT </h3>
    <p>
    Aspiring Full-stack web developer. When not coding I like to play games, catch up with friends and watch sports.
    </p>
  </div> 
  )
}

const Skillset = ({skills}) => {
  return skills.map(({skill,level,color}) => {
    level = (level === "beginner" && "👶")|| (level === "intermediate" && "👍") || (level === "advanced" && "💪");
    return (
  <ul className='skill-list' key={skill}> 
      <li className='skill'>{skill} {level}</li>
    </ul>
    )
  }); 
  
}
  
