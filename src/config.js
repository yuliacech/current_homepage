import React from "react";
import {renderToStaticMarkup} from "react-dom/server";

const config = {
    name: 'Yulia Čech',
    email: 'info@yuliacech.com',
    meta: {
      title: 'Yulia Čech, software engineer and mentor',
      description: 'Yulia Čech | Full stack web developer portfolio'
    },
    greeting: 'Hi, I am Yulia Čech',
    mainTitle: 'software engineer and mentor',
    subtitles: ['full stack expert', 'creating web apps since 2014'],
    technologies: {
      logos: ['react', 'angular', 'javascript', 'typescript', 'nodejs', 'rxjs'],
      description:
        [
          <span>I work intensively with <b>React</b> in <b>TypeScript/JavaScript</b> and
            implement highly dynamic, interactive applications. <br/>Other technologies,
            like <b>Angular</b> with <b>RxJS</b>, <b>NodeJS</b>, <b>PHP</b>, <b>Java</b> and <b>PostgreSQL</b> are
            part of my solid skills as well.</span>]
    },
    experience: [
      {
        start: {
          month: 'May',
          year: 2020
        },
        position: 'Software Engineer',
        company: 'Elastic',
        companyUrl: 'https://elastic.co/',
        description: [
          <span>working on <a target="_blank" href="https://github.com/elastic/kibana/pulls?q=is%3Apr+author%3Ayuliacech+">Kibana</a>, a large-scale <b>React</b> application</span>,
          <span>collaborating with team members across continents and time zones</span>,
          <span>actively supporting <b>accessibility</b> projects</span>
        ]
      },
      {
        start: {
          month: 'October',
          year: 2018
        },
        end: {
          month: 'April',
          year: 2020
        },
        position: 'Senior Frontend Developer',
        company: 'Cocomore AG',
        companyUrl: 'https://cocomore.com/',
        location: 'Germany',
        description: [
          <span><b>Frontend Project Lead</b>  in a long-term internal project</span>,
          <span>fully <b>remote</b> work in a distributed team</span>,
          <span>developed a large <b>Angular</b> application for communication and collaboration</span>
        ]
      },
      {
        start: {
          month: 'April',
          year: 2016
        },
        end: {
          month: 'September',
          year: 2018
        },
        position: 'Software Developer',
        company: 'Jules Bordet Institute',
        companyUrl: 'https://ctsu.bordet.be/',
        location: 'Belgium'
      },
      {
        start: {
          month: 'July',
          year: 2015
        },
        end: {
          month: 'March',
          year: 2016
        },
        position: 'Junior Software Developer',
        company: 'Rhenus SE & CO. KG',
        companyUrl: 'http://www.rhenus.com/en/',
        location: 'Germany'
      },
      {
        start: {
          month: 'October',
          year: 2014
        },
        end: {
          month: 'June',
          year: 2015
        },
        position: 'Junior Software Developer',
        company: 'PlagScan GmbH',
        companyUrl: 'https://www.plagscan.com/en/',
        location: 'Germany'
      }
    ],
  // TODO add a component for mentoring activities
  mentoring: [{
      startYear: 2018,
    endYear: 2020,

  }],
    projects: [
      {
        title: 'Accommodations reviews',
        description: 'This accommodation review system is built for mid to long-term rentals where users can leave their feedback along with pictures, information about the price, location and duration of their stay. Make sure to log in and try it out!',
        demo: 'http://bruship.yuliacech.com/',
        screenshot: 'https://dl.dropboxusercontent.com/s/bxxopqbs3hsiqzg/bruship.png?dl=0',
        frontend: 'https://github.com/yuliacech/bruship',
        backend: 'https://github.com/yuliacech/bruship-server',
        stack: ['MongoDB', 'Express', 'Angular', 'NodeJS', 'Auth0']
      }, {
        title: 'WordPress Blog',
        description: 'This WordPress blog gives information about investment, trading options and stock market in general. This is a self-hosted WordPress installation with an individualized Shadower theme (color palette, configuration of displayed elements, custom layout).',
        demo: 'http://premium-flow.com/',
        screenshot: 'https://dl.dropboxusercontent.com/s/8y7z5lflz7bhx0y/premium_flow.png?dl=0',
        stack: ['WordPress', 'Bootstrap', 'SCSS']
      }, {
        title: '2D platform game',
        description: <span>An online game featuring a pink alien figure who needs to collect letters and a key to get to the next level while avoiding insects. The game was built for my 2014 Master thesis and uses HTML5 <code>canvas</code> element and a JS game engine framework melonJS.</span>,
        demo: 'http://compound-game.rf.gd/',
        code: 'https://github.com/yuliacech/compound-game',
        screenshot: 'https://dl.dropboxusercontent.com/s/hgmiarwhef8140h/compound_game.png?dl=0',
        stack: ['melonJS', 'PHP']
      }
    ],
    contact: {
      subtitle: <span>If you need help in building a modern, responsive, dynamic application, contact me via <a
        href="mailto:info@yuliacech.com">info@yuliacech.com</a> or using the form below.</span>
    },
    image: 'https://dl.dropboxusercontent.com/s/pqw3bbgmg6p4uoi/profile_photo_Yulia_Cech.jpg?dl=0',
    bio: ['As a developer, I believe in writing clean code and following SOLID principles. I enjoy working with web technologies and creating useful programs for people from all over the world. By mentoring aspiring developers, I try to give back to the community and make it more diverse.',
      'Outside of coding, my hobbies include science fiction, learning foreign languages and geocaching. Originally from Russia, I have been living in Europe for over a decade. Currently, I\'m located in Germany.'],
    palette:
      {
        '--theme-primary-color': '#6F3D7F',
        '--theme-primary-text-color': '#494949',
        '--theme-primary-text-color-rgb': '73,73,73',
        '--theme-accent-text-color': '#fff',
        '--theme-accent-text-color-rgb': '255,255,255'
      }
    ,
    font: {
      name: '\'Open Sans\', sans-serif',
      link: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap'
    }
  }
;


export function configToString(config, level = 1, indent = '  ', newLine = '\n') {
  const isArray = Array.isArray(config);
  let result = indent.repeat(level - 1);
  result += isArray ? '[' : '{';
  result += newLine;
  Object.keys(config).forEach(key => {
    const value = config[key];
    result += `${indent.repeat(level)}`;
    result += isArray ? '' : `${key}:`;
    if (typeof value === 'object') {
      if (React.isValidElement(value)) {
        result += '"' + renderToStaticMarkup(value) + '"';
      } else {
        const append = newLine + configToString(value, level + 1);
        result += append;
      }
    } else {
      result += JSON.stringify(value);
    }
    result += isArray ? ',' : ';';
    result += newLine;
  });
  result += indent.repeat(level - 1);
  result += isArray ? ']' : '}';
  return result;
}

export default config;
