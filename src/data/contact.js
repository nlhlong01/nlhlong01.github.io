import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons/faFreeCodeCamp';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons/faHackerrank';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/nlhlong01',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/longnlh',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.freecodecamp.org/nlhlong',
    label: 'freeCodeCamp',
    icon: faFreeCodeCamp,
  },
  {
    link: 'https://www.hackerrank.com/nlhlong',
    label: 'HackerRank',
    icon: faHackerrank,
  },
  {
    link: 'mailto:nlhlong@protonmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
