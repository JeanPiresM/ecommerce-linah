import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoLogoLinkedin } from "react-icons/io";


interface TeamMemberProps {
  name: string;
  surname: string;
  photoUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, surname, photoUrl, githubUrl, linkedinUrl }) => {
  return (
    <div style={styles.container}>
      <img src={photoUrl} alt={`${name} ${surname}`} style={styles.photo} />
      <h3>{name}</h3>
      <h4>{surname}</h4>
      <div style={styles.links}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <SiGithub style={styles.git} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <SiLinkedin  style={styles.link  } />
       
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    border: '2px solid #933ffe', 
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    height: '400px',
    margin: '10px',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '8px',
  },
  link: {
    width: '45px',
    height: '45px',
    Backgroundcolor: '#C7C1FD',
  
  },
  git: {
    width: '45px',
    height: '45px',
  },
  


};

export default TeamMember;
