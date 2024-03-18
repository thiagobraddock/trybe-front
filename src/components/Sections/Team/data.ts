import { TeamMemberCardProps } from '../../TeamMemberCard';
import braddock from '../../../assets/images/members/braddock.png';
import joao from '../../../assets/images/members/joao.png';
import dani from '../../../assets/images/members/dani.png';
import felipe from '../../../assets/images/members/felipe.png';
import tiago from '../../../assets/images/members/tiago.png';
import carol from '../../../assets/images/members/caroline.png';
import cadu from '../../../assets/images/members/cadu.png';
import thalles from '../../../assets/images/members/thalles.png';
import mari from '../../../assets/images/members/mari.png';
import joicy from '../../../assets/images/members/joicy.jpeg';

type TeamMemberData = TeamMemberCardProps[];

export const data: TeamMemberData = [
  {
    name: 'Felipe Trindade',
    teamRole: 'Coordenação',
    imgSrc: felipe,
    linkedinUrl: 'https://www.linkedin.com/in/felipetrindade/',
    githubUrl: 'https://github.com/ftrindade87',
  },
  {
    name: 'Mariana "Mari" Demarchi',
    teamRole: 'Especialista - Soft Skills e Carreira',
    imgSrc: mari,
    linkedinUrl: 'https://www.linkedin.com/in/mariana-demarchi/',
  },
  // {
  //   name: 'Danielli "Dani" Olegário',
  //   teamRole: 'Especialista - Soft Skills e Carreira',
  //   imgSrc: dani,
  //   linkedinUrl: 'https://www.linkedin.com/in/danielliolegario/',
  // },
  // {
  //   name: 'Caroline Costa Lima',
  //   teamRole: 'Especialista - Soft Skills e Carreira',
  //   imgSrc: carol,
  //   linkedinUrl: 'https://www.linkedin.com/in/caroline-lima/',
  // },
  {
    name: 'Thiago "Braddock"',
    teamRole: 'Especialista',
    imgSrc: braddock,
    linkedinUrl: 'https://www.linkedin.com/in/profthiago/',
    githubUrl: 'https://github.com/thiagobraddock',
    // instagramUrl: 'https://www.instagram.com/profthiago/',
    twitterUrl: 'https://twitter.com/thiagobraddock',
    youtubeUrl: 'https://youtube.com/programadorcaipira',
  },
  {
    name: 'João Andrade Junior',
    teamRole: 'Instrutor',
    imgSrc: joao,
    linkedinUrl: 'https://www.linkedin.com/in/joao-andrade-junior/',
    githubUrl: 'https://github.com/joaoAndradeJr',
  },
  {
    name: 'Carlos "Cadu" Patricio',
    teamRole: 'Instrutor',
    imgSrc: cadu,
    linkedinUrl: 'https://www.linkedin.com/in/carlos-waldow/',
    githubUrl: 'https://github.com/cpwaldow',
  },
  {
    name: 'Joicy Daliane S. Oliveira',
    teamRole: 'Instrutora',
    imgSrc: joicy,
    linkedinUrl: 'https://www.linkedin.com/in/joioliveira/',
    githubUrl: 'https://github.com/joicyoliv',
  },
  {
    name: 'Tiago de Almeida Paz',
    teamRole: 'Instrutor',
    imgSrc: tiago,
    linkedinUrl: 'http://linkedin.com/in/tiago-de-almeida-paz/',
    githubUrl: 'https://github.com/TiagoPaz2000',
  },
  {
    name: 'Thalles de Oliveira Carneiro',
    teamRole: 'Instrutor',
    imgSrc: thalles,
    linkedinUrl: 'https://www.linkedin.com/in/thallescarneiro/',
    githubUrl: 'https://github.com/thalles-carneiro',
  },

];
