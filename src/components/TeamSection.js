import React from 'react';
import './style.css';
import team2Image from '../images/team2.jpg';
import team1Image from '../images/team1.jpg';
import team3Image from '../images/team3.jpg';
import team4Image from '../images/team4.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      image: team2Image,
      title: 'CEO & Founder',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
    {
      name: 'Jane Doe',
      image: team1Image,
      title: 'Architect',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
    {
      name: 'Mike Ross',
      image: team3Image,
      title: 'Architect',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
    {
      name: 'Dan Star',
      image: team4Image,
      title: 'Architect',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
  ];

  return (
    <div className="OurTeam">  
      {teamMembers.map((member) => (
        <div key={member.name} className="OurteamCard">
          <img src={member.image} className='teamimage' alt={member.name} style={{ width: '100%' }} />
          <h3>{member.name}</h3>
          <p className="OurteamTitle">{member.title}</p>
          <p>{member.description}</p>
          <button className="OurteamContact">Contact</button>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
