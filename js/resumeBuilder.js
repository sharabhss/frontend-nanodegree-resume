//bio object
var bio = {
	name: "Sharabh Shukla",
	role: "Web Developer",
	contacts: {
		mobile: "(646) 683-3395",
		email: "sharabhss@gmail.com",
		github: "sharabhss",
		twitter: "@sharabhss",
		location: "New York City"
	},
	biopic: "http://placebeard.it/g/640/480",
	welcomeMessage: "Welcome!",
	skills: ["HTML", "CSS", "JavaScript", "Git", "Java", "SQL", "MS. Access", "Wordpress", "Google Analytics", "MS Office 2016", "Adobe CS6", ],
	//replace data from object and feed it to html for display
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts, #footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts, #footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);
		// read skills array and list 
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(skill) {
				var formattedSkill = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkill);
			});
		}
	}
};
//call display function
bio.display();
// work object
var work = {
	jobs: [{
		employer: "Infosys",
		title: "Associate Developer",
		dates: "July 2017 - Present",
		location: "Basking Ridge, New Jersey",
		description: "Front-end web development training followed by project involvement."
	}, {
		employer: "Creative Illustrators Agency",
		title: "Web Content Manager",
		dates: "August 2016 - February 2017",
		location: "New York, NY",
		description: "Create and Manage web content to present artist's work on the internet through agency's website as well as social media outlets such as Twitter, Facebook, and Instagram."
	}, {
		employer: "Stony Brook University - Undergraduate Biology",
		title: "Student Assistant",
		dates: "August 2015 - May 2016",
		location: "Stony Brook, NY",
		description: "Data entry, grade exams, office errands, etc."
	}],
	//replace data from object and feed it to html for display
	display: function() {
		work.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedDescription);
		});
	}
};
//call display functionwork.display();

// projects object
var projects = {
	projects: [{
		title: "sharabhshukla.com",
		dates: "May 2016",
		description: "Devepoled a personl website using HTML, CSS, Bootstrap, Jekyll, Github, and JavaScript to highlight projects, contact infomation, and photography portfolio.",
		images: ["https://placebear.com/g/600/400"]
	}, {
		title: "HTML/CSS Portfolio",
		dates: "July 2017",
		description: "Developed a personal portfolio using HTML and CSS as part of the Front-end Web Developer Nanodegree course.",
		images: ["https://placeimg.com/640/480/any", "https://placeimg.com/640/480/people", "https://placeimg.com/640/480/tech"]
	}, {
		title: "ATP Men's Tennis World Tour Databsae",
		dates: "Spring 2016",
		description: "Developed a 20,000 row database of tennis data from 20 seasons working primarily with Microsoft Access to analyze past results and find trends to predict future matches.",
		images: ["https://placeimg.com/640/480/nature/grayscale"]
	}, {
		title: "Client Server Rock-Paper-Scissors",
		dates: "Fall 2015",
		description: "Developed a command line based rock, paper, and sissors game between single or mulpitle clients and a server through TCP connection. Worked primarily with socket programming in Java to connect users via TCP client and the game itself was written in Java.",
		images: ["http://loremflickr.com/320/240?random=1", "http://loremflickr.com/320/240?random=2"]
	}],
	//replace data from object and feed it to html for display
	display: function() {
		projects.projects.forEach(function(proj) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
			var formattedDates = HTMLprojectDates.replace("%data%", proj.dates);
			var formattedProjectTitle = formattedTitle + formattedDates;
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
			$(".project-entry:last").append(formattedDescription);
			if (proj.images.length > 0) {
				proj.images.forEach(function(image) {
					var formattedImage = HTMLprojectImage.replace("%data%", image);
					$(".project-entry:last").append(formattedImage);
				});
			}
		});
	}
};
//call display function
projects.display();
// education object
var education = {
	schools: [{
		name: "Stony Brook University",
		degree: "Bachelor of Science",
		dates: "January 2013 - May 2016",
		location: "Stony Brook, NY",
		majors: ["Information Systems", "Specialization: Business & Economics"]
	}],
	onlineCourses: [{
		title: "Front-end Web Developer Nanodegree",
		school: "Udacity",
		dates: "July 2017 - September 2017",
		url: "https://www.udacity.com/"
	}],
	//replace data from object and feed it to html for display
	display: function() {
		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", school.name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolTitle = formattedSchool + formattedDegree;
			$(".education-entry:last").append(formattedSchoolTitle);
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
			$(".education-entry:last").append(formattedMajor);
		});
		education.onlineCourses.forEach(function(course) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedOnlineCoursesTitle = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedOnlineCoursesTitle);
			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", course.url);
			$(".education-entry:last").append(formattedURL);
		});
	}
};
//call display function
education.display();
// get a list of locations worked from the jobs object
function locationizer(work_obj) {
	var locationArray = [];
	work_obj.jobs.forEach(function(job) {
		var newLocation = job.location;
		locationArray.push(newLocation);
	});
	return locationArray;
}
// change the title in international standard
$("#main").append(internationalizeButton);
// change title name to international version
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
// add google map
$("#mapDiv").append(googleMap);