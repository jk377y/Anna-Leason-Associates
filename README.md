# Anna Leason & Associates
Temp deploy link is available, hosted by Vercel:<br>
Live Link: https://anna-leason-associates.vercel.app/

## *Description*
This is a website for a local therapy and counseling office which provides information about the practice, the therapists, and the services offered. It also provides a way for clients to contact the office and request an appointment.
<br>
<br>


## *Table of Contents*
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)
<br>
<br>

## *Technologies Used*
<br>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> 
<img src="https://skillicons.dev/icons?i=vite" alt="vite" title="Vite" width="64" height="64"/></a>&nbsp;
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
<img src="https://skillicons.dev/icons?i=react" alt="react" title="React" width="64" height="64"/></a>&nbsp; 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=javascript" alt="javascript" title="Javascript" width="64" height="64"/></a>&nbsp;
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
<img src="https://skillicons.dev/icons?i=css" alt="css3" title="CSS3" width="64" height="64"/></a>&nbsp;
<br>
<br>

## *Installation*
To install this project, clone the repository locally and run `npm install` to install all dependencies. Then run `npm run dev` to start the development server. The project will be available at http://localhost:5173 (unless configured otherwise).

For Vercel deployment, the following files are required:<br>
vercel.json
```
{
	"rewrites": [
		{
			"source": "/((?!api/.*).*)",
			"destination": "/index.html"
		}
	]
}
```
This has to do with the way Vercel handles routing. The file is named vercel.json which tells Vercel to rewrite all requests to the index.html file except for requests to the api folder. This is necessary because the api folder is handled by the server and not the client. 
<br>
<br>

## *Credits*
Background image `dark-green-blue-abstract-background.png`<br>
Obtained from https://pixy.org/6395910/<br>
Licensed under https://pixy.org/licence.php - https://creativecommons.org/publicdomain/zero/1.0/deed.en
<br>
<br>

## *Questions*
<h3>Portfolio:&emsp;<a href="https://jk377y.dev" target="_blank">https://jk377y.dev</a></h3>
<h3>Email:&emsp;<a href="mailto:jk377y@gmail.com" target="_blank">jk377y@gmail.com</a></h3>
<h3>LinkedIn:&emsp;<a href="https://www.linkedin.com/in/james-kelly-software-developer/" target="_blank">https://www.linkedin.com/in/james-kelly-software-developer/</a></h3>
<h3>GitHub:&emsp;<a href="https://github.com/jk377y" target="_blank">https://github.com/jk377y</a></h3>
<h3>CoderRank:&emsp;<a href="https://profile.codersrank.io/user/jk377y/" target="_blank">https://profile.codersrank.io/user/jk377y/</a></h3>
<br>
<br>

## *License*
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<br>Copyright (c) 2023 James Kelly
<br>Information on this license can be found at: (https://opensource.org/licenses/MIT)