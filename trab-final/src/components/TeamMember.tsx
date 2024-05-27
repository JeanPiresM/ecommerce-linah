import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

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
      <h3 style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>{name}</h3>
      <h4 style={{fontSize: 22, color: 'white'}}>{surname}</h4>
      <div style={styles.links}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <SiGithub style={{...styles.git, color: '#933FFE'}} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <SiLinkedin style={{ ...styles.link, color: '#933FFE' }} />
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
    border: '1px solid #933FFE', 
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
    marginBottom: '20px',
    marginTop: '12px'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '30px',
  },

  link: {
    width: '39px',
    height: '39px',
  
  },
  git: {
    width: '39px',
    height: '39px',
  }


};

export default TeamMember;
