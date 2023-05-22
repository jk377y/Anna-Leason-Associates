# Anna Leason & Associates
Temp deploy link is available, hosted by Vercel:<br>
Live Link: https://anna-leason-associates.vercel.app/

## Description
This is a website for a local therapy and counseling office which provides information about the practice, the therapists, and the services offered. It also provides a way for clients to contact the office and request an appointment.

## Table of Contents
* [Installation](#installation)
* [Credits](#credits)
* [Questions](#questions)



## Installation
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




## Credits
Background image `dark-green-blue-abstract-background.png`
obtained from 
https://pixy.org/6395910/
https://pixy.org/licence.php