
/*function displayBio(bio)
{
	var formattedName=HTMLheaderName.replace("%data%",bio.myname);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail=HTMLemail.replace("%data%",bio.contacts.email);
	var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);


	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedlocation);

	var formattedBioPic=HTMLbioPic.replace("%data%",bio.imgsrc);
	var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedskills=HTMLskills.replace("%data%",bio.skills);

	$('#header').prepend(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);

	var i,formattedskills;
	if (bio.skills)
	{
		$('#header').append(HTMLskillsStart);
		
		formattedskills=HTMLskills.replace("%data%",bio.skills);
		$('#skills').append(formattedskills);
	}
}

function displayWork(work)
{
	var formattedworkEmployer,formattedworkTitle,formattedworkEmployerTitle;
	var formattedworkDates,formattedworkLocation,formattedworkDescription;
	var job;

}*/

function locationizer(work)
{
	locationnArray=[];
	for (w_index in work.work)
	{
		locationnArray.push(work.work[w_index].location);
	}	
	return locationnArray;
}

function inName(myname)
{
	nameArray=myname.split(" ");
	firstName=nameArray[0];
	lastName=nameArray[1];

	firstName=firstName.toLowerCase();
	firstName=firstName[0].toUpperCase() + firstName.slice(1);
	lastName=lastName.toUpperCase();
	return firstName + " " + lastName
}

var bio={ "myname":"Surajkumar Harikumar","age":21,
			"role":"Undegraduate Student of Electrical Engineering",
			
			"contacts":{
				"mobile":"+91-7299919103",
				"email":"surajh.93@gmail.com",
				"github":"suraj93",
				"twitter":"@suraj93",
				"location":"Chennai, India"},	
			"welcomeMessage":"Welcome to my awesome interactive Resume!",
			"skills":["C++"," Python"," Matlab"," Django"," JavaScript"," HTML",
						" Artificial Intelligence"," Channel Coding"," Communications",
						" Tech Blogging"," Music"],
			"imgsrc":"images/p2.jpg"
					};

bio.display=function(){
	var formattedName=HTMLheaderName.replace("%data%",bio.myname);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail=HTMLemail.replace("%data%",bio.contacts.email);
	var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);


	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedlocation);

	var formattedBioPic=HTMLbioPic.replace("%data%",bio.imgsrc);
	var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedskills=HTMLskills.replace("%data%",bio.skills);

	$('#header').prepend(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);

	var i,formattedskills;
	if (bio.skills)
	{
		$('#header').append(HTMLskillsStart);
		/*for(i=0;i<bio.skills.length;i++)
		{ 
			formattedskills=HTMLskills.replace("%data%",bio.skills[i]);
			$('#skills').append(formattedskills);
		}*/
		formattedskills=HTMLskills.replace("%data%",bio.skills);
		$('#skills').append(formattedskills);
	}
};

cmu_work=["Design of LDPC codes to reduce total power used in data-centers, and for short distance communication.",
			"Worked on the 'Design of Flexible TotEm-LDPC codes' project under Prof. Pulkit Grover (see <b>Projects</b> for more)."].join("<br/>");

gadget_work=["Writing articles on the Latest in Technology & Mobile news, development, and quirk articles on unsung products / ideas.",
				"Covered Kickstarter campaigns, Apple WWDC & Google I/O live events, Device releases, and performed in-depth phone reviews"].join("<br/>");

phasorz_work=["Developed mobile APIs for the Android application Dhilcare, enabling doctors / nurses to share ECG information with other doctors, for off-site consulting. Also developed and maintained the web interface and the server for the same.",
"Created Solutions for Security and HIPAA compliance on Amazon AWS, Mobile APIs for the Android application, Audit Logging, Researched and proposed implementations of basic Data Analytics, Image compression techniques and Data fragmentation methodologies for transfer over Bad Internet Connectivity"
				].join('<br/>');

shaastra_webops_work=["Was part of a 12-member team using Django-Python to develop the Shaastra website.",
						"Developed a Facilities portal involving item requesting and approval, automated report generation. ",
						"Engineered a time-venue-based item requirement optimization algorithm to minimize per-item purchase, used across Shaastra events."
						].join("<br/>")

var work={
	"work":[
			{"Employer":"Carnegie Mellon University",
			"Title":"Summer Undergraduate Research Intern",
			"Dates":"May-July 2014","location":"Pittsburgh, PA",
			"Description":cmu_work,
			"Image":0//"images/cmu.png"
			},
			{"Employer":"Gadgetronica",
			"Title":"Assosciate Writer",
			"Dates":"July 2013-January 2014","location":"Hyderbad, India",
			"Description":gadget_work,
			"Image":0//"images/gadgetronica.png"
			},
			{"Employer":"Phasorz Technologies Pvt Ltd.",
			"Title":"Web Development Intern",
			"Dates":"May-July 2013","location":"Chennai, India",
			"Description":phasorz_work,
			"Image":0
			},
			{"Employer":"Shaastra - Annual Technical festival, IIT Madras",
			"Title":"Coordinator of WebOperations",
			"Dates":"May 2012-January 2013","location":"Chennai, India",
			"Description":shaastra_webops_work,
			"Image":0//"images/shaastra.png"
			}
			]			
};

work.display=function(){
	for (job_index in work.work)
	{
		job=work.work[job_index];

		$('#workExperience').append(HTMLworkStart);
		formattedworkEmployer=HTMLworkEmployer.replace("%data%",job.Employer);
		formattedworkTitle=HTMLworkTitle.replace("%data%",job.Title);
		formattedworkEmployerTitle = formattedworkEmployer+formattedworkTitle;

		formattedworkDates=HTMLworkDates.replace("%data%",job.Dates);
		formattedworkLocation=HTMLworkLocation.replace("%data%",job.location);
		formattedworkDescription=HTMLworkDescription.replace("%data%",job.Description); 
		formattedworkImage=HTMLworkImage.replace("%data%",job.Image); 

		

		$('.work-entry:last').append(formattedworkEmployerTitle);
		$('.work-entry:last').append(formattedworkDates);
		
	
		$('.work-entry:last').append(formattedworkLocation);	
	
		if(job.Image)
				{
					$('.work-entry:last').append(formattedworkImage);
				}
		$('.work-entry:last').append(formattedworkDescription);

		}
};


var education={
		"schools":[
					{
						"Name":"Indian Institute of Technology Madras",
						"Degree":"B.Tech + M.Tech",
						"Dates":"2011-2016","location":"Chennai, India",
						"Major":"Electrical Engineering",
						"Minor":"Operations Research",
						"GPA":"CGPA - 9.37"
					},
					{
						"Name":"Padma Seshadri Bala Bhavan Sr. Sec School",
						"Degree":"Middle School, High School",
						"Dates":"1996-2011","location":"Chennai, India",
						"Major":"Physics, Chemistry, Computer Science, English, Math, Sanskrit",
						"GPA":"National Board Exam Scores: Grade 12 - 97.6%, Grade 10 - 96.8% "
					}
		],
		"onlineClasses":[
		{
			"Title":"Intro to Artificial Intelligence",
			"School":"Udacity - Stanford",
			"Dates":2014,
			"URL":"https://www.udacity.com/course/progress#!/c-cs271"
		},
		{
			"Title":"JavaScript Syntax",
			"School":"Udacity",
			"Dates":2014,
			"URL":"https://www.udacity.com/course/progress#!/c-cs271"
		},
		{
			"Title":"Computer Networks",
			"School":"Coursera - Stanford",
			"Dates":2014,
			"URL":"https://www.udacity.com/course/progress#!/c-cs271"
		},
		{
			"Title":"How to Start a Startup",
			"School":"Y Combinator",
			"Dates":2014,
			"URL":"https://www.udacity.com/course/progress#!/c-cs271"
		}
		]	
};

education.display=function(){
	for(school_index in education.schools)
	{
		$('#education').append(HTMLschoolStart);
		var formattedschoolName=HTMLschoolName.replace("%data%",education.schools[school_index].Name);
		var formattedschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school_index].Degree);
		var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
		var formattedschoolDates=HTMLschoolDates.replace("%data%",education.schools[school_index].Dates);
		var formattedschoolLocation=HTMLschoolLocation.replace("%data%",education.schools[school_index].location);
		var formattedschoolGPA=HTMLschoolGPA.replace("%data%",education.schools[school_index].GPA);
		var formattedschoolMajor=HTMLschoolMajor.replace("%data%",education.schools[school_index].Major);
		
		$('.education-entry:last').append(formattedschoolNameDegree);
		$('.education-entry:last').append(formattedschoolDates);
		$('.education-entry:last').append(formattedschoolLocation);
		$('.education-entry:last').append(formattedschoolGPA);
		$('.education-entry:last').append(formattedschoolMajor);
		if(education.schools[school_index].Minor)
		{
			var formattedschoolMinor=HTMLschoolMinor.replace("%data%",education.schools[school_index].Minor);
			$('.education-entry:last').append(formattedschoolMinor);
	
		}
		

	}

	$('#education').append(HTMLonlineClasses);
	for(online_index in education.onlineClasses)
	{
		var formattedonlineTitle=HTMLonlineTitle.replace("%data%",education.onlineClasses[online_index].Title);
		var formattedonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineClasses[online_index].School);
		var formattedonlineTitleSchool=formattedonlineTitle + formattedonlineSchool;
		var formattedonlineDates=HTMLonlineDates.replace("%data%",education.onlineClasses[online_index].Dates);
		var formattedonlineURL=HTMLonlineURL.replace("%data%",education.onlineClasses[online_index].URL);
		
		$('.online-entry:last').append(formattedonlineTitleSchool);
		$('.online-entry:last').append(formattedonlineDates);
		$('.online-entry:last').append('<br/>');
		//$('.online-entry:last').append(formattedonlineURL);

	}
};


cmu_description=["The goal of the project was to design of LDPC codes to reduce total power used in data-centers, and for short distance communication. The codes are designed to be energy-efficient at the decoder, and can scale between various power and energy requirements.",
	"I developed a mathematical framework for measuring average change in degree distribution of the LDPC code from adding nodes, which closely mimics random addition. I used these ideas to design a scheme for flexible codes, which can scale-on-demand from low-energy to high-performance.",
	"My mentor for this project was Prof. Pulkit Grover (Carnegie Mellon University)"].join("<br/>");
proto_description=["To come up with theoretical upper and lower bounds on the BEC threshold of protograph.",	
	"These bounds are based on the graph parameters, and exploit various convergence schemes. Mathematically rigorous bound, verified to be within 20 of threshold by simulations.",
	"My mentor for this project was Prof. Andrew Thangaraj (IIT Madras)"].join("<br/>");
ecc_description="We evaluated the performance of a rate 2/3 convolutional code (obtained by puncturing a rate 1/2 code), under the Soft-Decision-Viterbi-Decoder. We then obtained the BER-SNR curve for the above decoder, and obtained the (approximate) Weight Enumerating Function using the Viterbi Algorithm. The decoder was implemented using MATLAB. ";


var projects={
	"projects":[
				{
					"Title":"Deriving Bounds on Threshold for protograph LDPC odes",
					"Dates":"August 2014- Present",
					"Description":proto_description,
					"images":["images/csys.gif"]
				},	
				{
					"Title":"Design of Flexible TotEm-LDPC codes",
					"Dates":"May-July 2014",
					"Description":cmu_description,
					"images":["images/totem.png"]
				},
				{
					"Title":"Spectrum Analyzer (for Analog Circuits Lab)",
					"Dates":"April 2014",
					"Description":"Built a Spectrum ANalyzer which generated the frequency characteristics and bode-plot of a given input signal. Was built using mixers, oscillators, RC-filters",
					"images":["images/spectrum-analyzer.gif"]
				},
				{
					"Title":"Performance of Punctured Convolutional Codes (for Error Control Coding Course)",
					"Dates":"April 2014",
					"Description":ecc_description,
					"images":["images/trellis.svg"]
				}


	]
};

projects.display=function(){
	for(project_index in projects.projects)
	{
		$('#projects').append(HTMLprojectStart);
		var formattedprojectTitle=HTMLprojectTitle.replace("%data%",projects.projects[project_index].Title);
		var formattedprojectDates=HTMLprojectDates.replace("%data%",projects.projects[project_index].Dates);
		var formattedprojectDescription=HTMLprojectDescription.replace("%data%",projects.projects[project_index].Description);
		
		$('.project-entry:last').append(formattedprojectTitle);
		$('.project-entry:last').append(formattedprojectDates);
		$('.project-entry:last').append(formattedprojectDescription);

		if(projects.projects[project_index].images.length > 0)
		{
			for(image_index in projects.projects[project_index].images)
			{
				var formattedprojectImage=HTMLprojectImage.replace("%data%",projects.projects[project_index].images[image_index]);

				$('.project-entry:last').append(formattedprojectImage);
			}
		}
	}
};

bio.display();
work.display();
education.display();
projects.display();



console.log(bio.skills);


$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
	});

console.log(locationizer(work));



$('#mapDiv').append(googleMap);

/*

var formattedName=HTMLheaderName.replace("%data%",bio.myname);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedemail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.mylocation);
var formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);


$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlocation);

var formattedBioPic=HTMLbioPic.replace("%data%",bio.imgsrc);
var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedskills=HTMLskills.replace("%data%",bio.skills);

$('#main').prepend(formattedBioPic);
$('#header').append(formattedWelcomeMsg);
$('#header').append(HTMLskillsStart);
$('#skills').append(formattedskills);


var formattedwork1Employer=HTMLworkEmployer.replace("%data%",work1.Employer);
var formattedwork1Title=HTMLworkTitle.replace("%data%",work1.Title);
var formattedwork1Dates=HTMLworkDates.replace("%data%",work1.Dates);
var formattedwork1Location=HTMLworkLocation.replace("%data%",work1.Location);
var formattedwork1Description=HTMLworkDescription.replace("%data%",work1.Description);

$('#workExperience').append(HTMLworkStart);
$('.work-entry').append(formattedwork1Employer);
$('.work-entry').append(formattedwork1Title);
$('.work-entry').append(formattedwork1Dates);
$('.work-entry').append(formattedwork1Location);
$('.work-entry').append(formattedwork1Description);

var formattedschool1Name=HTMLschoolName.replace("%data%",school1.Name);
var formattedschool1Degree=HTMLschoolDegree.replace("%data%",school1.Degree);
var formattedschool1Dates=HTMLschoolDates.replace("%data%",school1.Dates);
var formattedschool1Location=HTMLschoolLocation.replace("%data%",school1.Location);
var formattedschool1Major=HTMLschoolMajor.replace("%data%",school1.Major);

$('#education').append(HTMLschoolStart);
$('.education-entry').append(formattedschool1Name);
$('.education-entry').append(formattedschool1Degree);
$('.education-entry').append(formattedschool1Dates);
$('.education-entry').append(formattedschool1Location);
$('.education-entry').append(formattedschool1Major);*/