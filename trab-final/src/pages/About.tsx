import React from 'react';
import TeamMember from '../components/TeamMember'; 

const teamMembers = [
  {
    name: 'Elisa Cardoso',
    surname: 'Dev. Front-end',
    photoUrl: 'https://media.licdn.com/dms/image/C4D03AQFrRGF9cIs5Rg/profile-displayphoto-shrink_800_800/0/1639436543801?e=1721865600&v=beta&t=a5mRJBzFGJlMheEfuIY66Ak1lWsfzzBEeAGTr4V66sk',
    githubUrl: 'https://github.com/elisa-cardoso',
    linkedinUrl: 'https://www.linkedin.com/in/elisa-cardoso-de-mello-67a101220/ ',
  },
  {
    name: 'Júlia Cordeiro',
    surname: 'Dev. Front-end',
    photoUrl: 'https://media.licdn.com/dms/image/D4D03AQECRdzokIrJmw/profile-displayphoto-shrink_800_800/0/1709079470240?e=1721865600&v=beta&t=OGT1HHH4HHYfMk4vXWFjE6cJnhZlZxqo8io988lXAGU',
    githubUrl: 'https://github.com/juliacordeoli',
    linkedinUrl: 'https://www.linkedin.com/in/j%C3%BAlia-cordeoli-a0b7a82b7/',
  },
  {
    name: 'Jean Pires',
    surname: 'Dev. Full-Stack',
    photoUrl: 'https://avatars.githubusercontent.com/u/153961814?v=4',
    githubUrl: 'https://github.com/JeanPiresM',
    linkedinUrl: 'https://www.linkedin.com/in/jean-pires-aa4796279/',
  },
  {
    name: 'Miguel R Christ  ',
    surname: 'Dev. Front-end',
    photoUrl: 'https://media.licdn.com/dms/image/D4D03AQGdxt3XxCCziQ/profile-displayphoto-shrink_400_400/0/1709131209403?e=1721865600&v=beta&t=Zo-rr7VIokRxctJ-fPbx5XJDnlKTVXOmajvdHT3J4Hk',
    githubUrl: 'https://github.com/MiguelrChrist',
    linkedinUrl: 'https://www.linkedin.com/in/miguel-r-christ-7815b0205/',
  },
  {
    name: 'Felipe Fragoso',
    surname: 'Dev. FullStack ',
    photoUrl: 'https://media.licdn.com/dms/image/D4E03AQFVr_lnvN14NQ/profile-displayphoto-shrink_400_400/0/1709171720276?e=1721865600&v=beta&t=4bVvBpyR1Uf0FmkdToFWu2uw7XLG-eyLUsrei8oa7oc',
    githubUrl: 'https://github.com/felipeofragoso',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABQGm3ABv3LMy8BT72zkkyJ0hJlcdVz1SjY&keywords=Felipe%20Fragoso&origin=ENTITY_SEARCH_HOME_HISTORY&sid=*Ao',
  },
];

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={{textAlign:"center", color: 'white', fontSize: 60, fontWeight: 'bold', marginBottom: 50, marginTop: 50}}>Sobre Nós da Linah</h1>
      
      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  teamContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  },
  logo: {
    width: '100px', 
    marginLeft: '20px', 
  },
};

export default App;
