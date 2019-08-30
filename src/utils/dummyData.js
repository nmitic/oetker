import { generateRandomNumber } from './generateRandomNumber';

import tesla from '../assests/images/nikola-tesla.png';
import albert from '../assests/images/albert.jpg';
import denis from '../assests/images/denis.jpeg';

export const listDummyData = [
  {
    href: 'https://htmldog.com/techniques/',
    title: 'HTML Techniques',
    count: generateRandomNumber(20),
    id: 1
  },
  {
    href: 'https://www.w3schools.com/html/html_css.asp',
    title: 'CSS Styling',
    count: generateRandomNumber(50),
    id: 2
  },
  {
    href: 'https://thevirtualinstructor.com/adobeflashlessons.html',
    title: 'Flash Tutorials',
    count: generateRandomNumber(99),
    id: 3
  },
  {
    href: 'https://www.shutterstock.com/search/miscellanea',
    title: 'Web Miscellanea',
    count: generateRandomNumber(14),
    id: 4
  },
  {
    href: 'https://news.google.com/?hl=en-US&gl=US&ceid=US:en',
    title: 'Site News',
    count: generateRandomNumber(78),
    id: 5
  },
  {
    href: 'https://www.w3schools.com/whatis/',
    title: 'Web Development',
    count: generateRandomNumber(45),
    id: 6
  }
]

export const ArchivesListDummyData = [
  {
    title: "Nikola Tesla",
    text: 'Nikola Tesla (/ˈtɛslə/;[2] Serbo-Croatian: [nǐkola têsla]; Serbian Cyrillic: Никола Тесла; 10 July 1856 – 7 January 1943) was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist who is best known for his contributions to the design of the modern alternating current (AC) electricity supply system.',
    id: 1,
    image: tesla
  },
  {
    title: "Albert Einstein",
    text: 'Near the beginning of his career, Einstein thought that Newtonian mechanics was no longer enough to reconcile the laws of classical mechanics with the laws of the electromagnetic field. This led him to develop his special theory of relativity during his time at the Swiss Patent Office in Bern (1902–1909). However, he realized that the principle of relativity could also be extended to gravitational fields, and he published a paper on general relativity in 1916 with his theory of gravitation. He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules. He also investigated the thermal properties of light which laid the foundation of the photon theory of light. In 1917, he applied the general theory of relativity to model the structure of the universe.',
    id: 2,
    image: albert
  },
  {
    title: "Dennis Ritchie",
    text: 'Dennis Ritchie was born in Bronxville, New York. His father was Alistair E. Ritchie, a longtime Bell Labs scientist and co-author of The Design of Switching Circuits on switching circuit theory. As a child, Dennis moved with his family to Summit, New Jersey, where he graduated from Summit High School.[7] He graduated from Harvard University with degrees in physics and applied mathematics.',
    id: 3,
    image: denis
  }
]

export const listDummyDataMusic = [
  {
    href: 'https://open.spotify.com/album/3uFZf8rykoHo7XMIQVYW6r',
    title: 'Axis: Bold as Love',
    count: 21,
    id: 1
  },
  {
    href: 'https://open.spotify.com/album/2tSNMg88AeyxYCv4Pmm7pb',
    title: 'Festival Budala',
    count: 16,
    id: 2
  },
  {
    href: 'https://open.spotify.com/album/1iz3kbxuSZuXqFrWs5KEYi',
    title: 'Endless Road',
    count: 12,
    id: 3
  }
]

export const listDummyDataExperiance = [
  {
    href: 'https://www.smava.de',
    title: 'Frontend developer - Smava',
    count: 2,
    id: 1
  },
  {
    href: 'https://namics.com',
    title: 'Frontend engineer - Namics',
    count: 1,
    id: 2
  },
  {
    href: 'https://folkmatic.com',
    title: 'Frontend developer - Folkmatic',
    count: 2,
    id: 3
  }
]