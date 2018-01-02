/*
*   Javascript Code informed by GitHub repository https://github.com/fjeansilva/frontend-nanodegree-resume
*
*/

var bio = {
  name: "Joseph Mitchell",
  role: "Dircector of Communications",
  contacts: {
      mobile: "555-555-5555",
      email: "NA@notadomain.com",
      github: "Business-Art-Technology-MAN",
      //twitter: string (optional)
      location: "Sugar Grove, IL"
  },
  welcomeMessage: "Thank you for having a look. Let me know if there is anything I can help with.",
  skills: ["HTML", "CSS", "Javascript", "R"], //, "Powerpoint", "Excel", "Word", "tidyverse", "Indesign", "Illustrator"],
  biopic: "images\\joe.jpg",
  display: function() {
      
      var headerHTMLHook = $('#header');
      var contactHTMLHook = $('#topContacts');
      var footerHTMLHook = $('#footerContacts');


    var newLocal = this;

      HTMLheaderRole = HTMLheaderRole.replace('%data%', newLocal.role);
      headerHTMLHook.prepend(HTMLheaderRole);

      HTMLheaderName = HTMLheaderName.replace('%data%', newLocal.name);
      headerHTMLHook.prepend(HTMLheaderName);

      var contacts = Object.keys(newLocal.contacts);

      contacts.forEach(function(contact) {
          var htmlInfoContact = HTMLcontactGeneric.replace('%contact%', contact);
          htmlInfoContact = htmlInfoContact.replace('%data%', newLocal.contacts[contact]);
          contactHTMLHook.append(htmlInfoContact);
          footerHTMLHook.append(htmlInfoContact);
      });

      HTMLbioPic = HTMLbioPic.replace('%data%', newLocal.biopic);
      headerHTMLHook.append(HTMLbioPic);

      HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', newLocal.welcomeMessage);
      headerHTMLHook.append(HTMLwelcomeMsg);

      headerHTMLHook.append(HTMLskillsStart);

      var skillsContainer = $('#skills');

      this.skills.forEach(function(skill) {
          var htmlSkill = HTMLskills.replace('%data%', skill);

          if (skillsContainer) {
              skillsContainer.prepend(htmlSkill);
          }
      });
  }
};

var education = {

  schools: [{
      name: "University of Illinios at Chicago",
      location: "Chicago, IL",
      degree: "Bachelor of Fine Art",
      majors: ["Electronic Media"],
      dates: "1995 - 1999",
      url: "https://www.uic.edu"
  }],
  onlineCourses: [{
      title: "Front End Development Nano-degree",
      school: "UDACITY",
      dates: "Sep 2016 - Jan 2018",
      url: "https://www.udacity.com/"
  }],
  display: function() {
    var newLocal = this;
      var eduSectionHTML = $('#education');

      eduSectionHTML.append(HTMLschoolStart);

      var eduHTMLHOOK = $('.education-entry');

      newLocal.schools.forEach(function(school) {
          var schoolName = HTMLschoolName.replace('%data%', school.name);
          schoolName += HTMLschoolDegree.replace('%data%', school.degree);
          var schoolDate = HTMLschoolDates.replace('%data%', school.dates);
          var schoolLocation = HTMLschoolLocation.replace('%data%', school.location);

          eduHTMLHOOK.append(schoolName);
          eduHTMLHOOK.append(schoolDate);
          eduHTMLHOOK.append(schoolLocation);

          school.majors.forEach(function(marjor) {
              var schoolMarjor = HTMLschoolMajor.replace('%data%', marjor);
              eduHTMLHOOK.append(schoolMarjor);
          });

          eduHTMLHOOK.append(HTMLonlineClasses);
      });

      newLocal.onlineCourses.forEach(function(course) {
          var onlineTitle = HTMLonlineTitle.replace('%data%', course.title);
          onlineTitle += HTMLonlineSchool.replace('%data%', course.school);
          var onlineDates = HTMLonlineDates.replace('%data%', course.dates);
          var onlineUrl = HTMLonlineURL.replace('%data%', course.url);

          eduHTMLHOOK.append(onlineTitle);
          eduHTMLHOOK.append(onlineDates);
          eduHTMLHOOK.append(onlineUrl);
      });
  }
};
var work = {
  jobs: [{
          employer: "employer one",
          title: "multi-media specialist",
          location: "Aurora, IL",
          dates: "Oct 1999 - Apl 2001",
          description: "Video NLE post-production, (Avid, Trinity, Pinnacle, Premiere Pro) and multi-media CD-ROM applications (Authorware and Director)"
      },
      {
          employer: "employer two",
          title: "Quality Assurance Specialist",
          location: "Naperville, IL",
          dates: "May 2001 - Oct 2004",
          description: "Regression Testing of dpsVelocity NLE software, feature requirements and UI/UX"
      },
      {
          employer: "employer three",
          title: "Director of Communications",
          location: "Warrenville, IL",
          dates: "Nov 2004 - present",
          description: "Team leader and Brand steward for print, web and business communications"
      }
  ],
  display: function() {
    var newLocal = this;
      var workExperienceHTMLHook = $('#workExperience');

      workExperienceHTMLHook.append(HTMLworkStart);

      var workHTMLHook = $('.work-entry');

      newLocal.jobs.forEach(function(job) {
          var jobHeader = HTMLworkEmployer.replace('%data%', job.employer);
          jobHeader += HTMLworkTitle.replace('%data%', job.title);

          var jobDate = HTMLworkDates.replace('%data%', job.dates);

          var jobLocation = HTMLworkLocation.replace('%data%', job.location);
          var jobDescription = HTMLworkDescription.replace('%data%', job.description);

          workHTMLHook.append(jobHeader);
          workHTMLHook.append(jobDate);
          workHTMLHook.append(jobLocation);
          workHTMLHook.append(jobDescription);
      });
  }
};

var projects = {
  projects: [{
          title: "project 1",
          dates: "Oct 2010 - Oct 2011",
          description: "Corprate Re-Brand",
          images: ["images\\197x148.gif", "images\\197x148.gif", "images\\197x148.gif"]
      },
      {
          title: "project 2",
          dates: "Sep 2016 - Nov 2016",
          description: "Big Presentation",
          images: ["images\\197x148.gif", "images\\197x148.gif", "images\\197x148.gif"]
      },
  ],

  display: function() {

    var newLocal = this;
      var projContainer = $('#projects');

      projContainer.append(HTMLprojectStart);

      var projHTMLHook = $('.project-entry');

      newLocal.projects.forEach(function(project) {
          var projectTitle = HTMLprojectTitle.replace('%data%', project.title);
          var projectDate = HTMLprojectDates.replace('%data%', project.dates);
          var projectDescription = HTMLprojectDescription.replace('%data%', project.description);

          projHTMLHook.append(projectTitle);
          projHTMLHook.append(projectDate);
          projHTMLHook.append(projectDescription);

          project.images.forEach(function(image) {
              var projectImage = HTMLprojectImage.replace('%data%', image);

              projHTMLHook.append(projectImage);
          });
      });

  }
};

$('#mapDiv').append(googleMap);
var contentObjects = [bio, work, projects, education];

contentObjects.forEach(function(displayFunc) {
  if ('display' in displayFunc) {
    displayFunc.display();
  }
});