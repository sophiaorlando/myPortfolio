import admin from './images/admin.png'
import packingList from './images/packingList.png';
import tesla from './images/tesla/tesla.png';
import tesla1 from './images/tesla/tesla-img1.png';
import tesla2 from './images/tesla/tesla-img2.png';
import tesla3 from './images/tesla/tesla-img3.png';
import tesla4 from './images/tesla/teslaCode.png';

import pL4U1 from './images/packingList4U/Packing1code.png';
import pL4U2 from './images/packingList4U/Packing2code.png';
import pL4U3 from './images/packingList4U/Packing3code.png';
import pL4U4 from './images/packingList4U/Packing4code.png';

import weatherImg from './images/hourlyWeather/weatherImg.png'
import weatherImg1 from './images/hourlyWeather/weatherCode1.png'
import weatherImg2 from './images/hourlyWeather/weatherCode2.png'
import weatherImg3 from './images/hourlyWeather/weatherCode3.png'
import weatherImg4 from './images/hourlyWeather/weatherCode4.png'

import femmeImg from './images/femmeStore/femmeStoreImg.png'
import femmeImg1 from './images/femmeStore/femmeStoreImg1.png'
import femmeImg2 from './images/femmeStore/femmeStoreImg2.png'
import femmeImg3 from './images/femmeStore/femmeStoreImg3.png'
import femmeImg4 from './images/femmeStore/femmeStoreImg4.png'

import sneakerImg from './images/sneakerFreakers/sneakerImg.png'
import sneakerImg1 from './images/sneakerFreakers/sneakerImg1.png'
import sneakerImg2 from './images/sneakerFreakers/sneakerImg2.png'
import sneakerImg3 from './images/sneakerFreakers/sneakerImg3.png'
import sneakerImg4 from './images/sneakerFreakers/sneakerImg4.png'

import beachImg from './images/beachInit/beachImg.png'
import beachImg1 from './images/beachInit/beachImg1.png'
import beachImg2 from './images/beachInit/beachImg2.png'
import beachImg3 from './images/beachInit/beachImg3.png'
import beachImg4 from './images/beachInit/beachImg4.png'







export const projectData = [
  {
    id: 1,
    title: "E-Commerce Femme Store",
    category: 'MERN Stack',
    description: "React, Redux, Firebase, React Currency, Material UI, React Bootstrap, Third Party PI",
    menuImage: femmeImg,
    image1: femmeImg1,
    image2: femmeImg2,
    image3: femmeImg3,
    image4: femmeImg4,
    projGitHub: "https://github.com/sophiaorlando/femme-store",
    projLive: "https://master.d12uoj9bqq5qvq.amplifyapp.com/login",
    projText: "I used a Context Provider to pass my reducer and state to use throughout the whole application. My reducer played as the, Add/Remove from basket button, which is saved throughout the applictaion. Using Firebase, I follow privacy guidelines by saving each user's account information, but I cannot see their password.   "
  },
  {
    id: 2,
    title: "Weather App on Steroids",
    category: 'React',
    description: "React, Redux, React bootstrap, ChartJS, MomentJS, Third party API",
    menuImage: weatherImg,
    image1: weatherImg1,
    image2: weatherImg2,
    image3: weatherImg3,
    image4: weatherImg4,
    projGitHub: "https://github.com/sophiaorlando/hourlyWeatherApp",
    projLive: "https://main.d1nars2ijui1jq.amplifyapp.com/",
    projText: "I utilized ReactJS libraries to generate the line and pie charts. I was able to manipulate the chart data using useEffect() throughout the application. I also demonstrated the use of, ? , to retrieve my data. This is allows me to retrieve data after it has already been loaded onto the page."

  },
  {
    id: 3,
    title: "Packing List 4 U ",
    category: 'React Native',
    description: "React Native, Expo CLI, Apple Store Deployment, React DOM, Redux, Reducer ",
    menuImage: packingList,
    image1: pL4U1,
    image2: pL4U2,
    image3: pL4U3,
    image4: pL4U4,
    projText: "Being self-taught in React Native, I decided to build an application that would be useful for travel go-ers. I included many React dependencies and utilized Object.keys() to manipulate my self-made API. I used state to control whether a box was checked or not and styled components for a cleaner UI design.  ",
    projGitHub: "https://github.com/sophiaorlando/PackingList4U",
    projLive: "https://apps.apple.com/us/app/packing-list-4-u/id1551224278"
  },
  {
    id: 4,
    title: "Tesla Clone",
    category: 'React',
    description: "React, Redux, Styled Components, Reducer, Responsive",
    menuImage: tesla,
    image1: tesla1,
    image2: tesla2,
    image3: tesla3,
    image4: tesla4,
    projText: "I used Redux and styled components to generate this responsive website. Using Redux, I was able to map over the car names throughout the page. I utilized state to allow a responsive open and closing of the sidebar. The Reducer allowed me to manipulate each car throughout this page in a seamless way, where I was able to have access to it throughout the whole code.",
    projGitHub: "https://github.com/sophiaorlando/teslaWebsite",
    projLive: "https://master.d2qgbjavdcgttz.amplifyapp.com/"
  },
  {
    id: 5,
    title: "Sneaker Freakers",
    category: 'MERN Stack',
    description: "React, Axios, Material UI, Bootstrap, MongoDB, Jquery, Slate",
    menuImage: sneakerImg,
    image1: sneakerImg1,
    image2: sneakerImg2,
    image3: sneakerImg3,
    image4: sneakerImg4,
    projText: "I worked on the back end of this collaborative project. I used useEffect() to retrieve data from a third party API and useState() to access it throughout this application. I also included a seamless Redirect link for non-users. The authentication form uses destructuring of props to allow users to Log In and Log Out. I also included many instances of state throughout the application to control actions.    ",
    projGitHub: "https://github.com/sophiaorlando/Project3",
    projLive: "https://secret-beyond-86832.herokuapp.com/home"
  },
  {
    id: 6,
    title: "Beach Cleanup Initiative",
    category: 'Handlebars',
    description: "HTML, CSS, Handlebars, Axios, Sequilize, Express, Mocha, ESLint, Third Party API",
    menuImage: beachImg,
    image1: beachImg1,
    image2: beachImg2,
    image3: beachImg3,
    image4: beachImg4,
    projText: "In this collaborative project, I worked on connecting the front-end to the back-end. I created an AJAX request to retrieve data from a third party API. I then wrote get and post routes for the data so Users could have access to it, as well as create their own Beach Cleanup Initiative. I also made use of .dotenv so user and database information is not made public.",
    projGitHub: "https://github.com/sophiaorlando/Project2",
    projLive: "https://thawing-temple-82462.herokuapp.com/"
  },


]