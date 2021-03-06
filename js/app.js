// ======================================
//  Water Ripple Effect
// ======================================

$('body, footer').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});

// ======================================
//  Smooth Scrolling
// ======================================

$(document).on('click', 'a[href^="#"]', function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});

// ======================================
//  Portfolio
// ======================================

const navbar = $('#navbar');
const portfolio = $('#portfolio');
const overlay = $('#overlay');
const modal = $('#modal');

let project = 0;

const data = [
  {
    image: 'images/project1.png',
		title: 'Treehouse',
    title2: 'Online Registration Form',
    text: "I built a responsive, mobile first registration web form using a range of HTML elements such as the input element of checkbox and submit button, the select element of a drop-down list and the text-area element of a multi-line input field. This project is useful as it is common for webpages to have a form either to fill in your personal information or to write a message/review. I enjoy this project as I was able to use flexbox for the very first time and it is indeed a powerful tool when trying to display your items in a certain way. For example, under ‘Contact Information' I used flexbox to show the label and input text box together as a column when viewing in Mobile screen mode and row in Tablet and Desktop screen mode.  Overall, it was an excellent experience and I managed to learn a lot about CSS such as attribute selectors and Pseudo-classes.",
    link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-3-An-Online-Registration-Form",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-3-An-Online-Registration-Form/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		block: "portfolio__block",
		block2: "b1"
  },
	{
	  image: 'images/project2.png',
		title: 'Treehouse',
	  title2: 'Web Style Guide',
	  text: "I created a style guide using SASS to transform the CSS style sheet with the use of variables, nesting, partials, imports, mixins, extends, etc. After finishing the online form, I thought the next project is going to be a breeze. However, as soon as I touched on SASS, the challenge was more significant than I have anticipated. As SASS originates from the programming language ‘Ruby' the syntax was very new to me, so I had to spend more time learning from the Treehouse resources. After a few days of learning, I started to understand the usefulness as it is a potent tool to have under your belt. SASS became my favourite tool to have, because I can save so much time and I don't have to repeat codes meeting the DRY CSS guideline.",
	  link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-4-Web-Style-Guide",
	  link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-4-Web-Style-Guide/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b2"
	},
	{
	  image: 'images/project3.png',
		title: 'Treehouse',
	  title2: 'Interactive Photo Gallery',
	  text: "I built an interactive photo gallery using JavaScript to create a search box and a lightbox. I became very excited about this particular project as I managed to use the programming language for the very first time. I initially learned to program with Python, so I knew the basics such as variables, conditional statements, functions, for loops, arrays, etc. However, JavaScript is certainly a fascinating programming language, especially with the ECMAScript (ES6) syntax. I was introduced to the popular library ‘jQuery' which is merely a more convenient version of JavaScript as there are codes that work the same way as JavaScript but shorter with jQuery. I used a jQuery plugin to create a lightbox for my photo gallery and decided to use JavaScript for the search function as I want to expand my knowledge further. Overall, I think this project is a perfect introduction to try out JavaScript before moving on to the next challenge.",
	  link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-5-An-Interactive-Photo-Gallery",
	  link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-5-An-Interactive-Photo-Gallery/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  tool4: "fab fa-js-square fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b3"
	},
	{
	  image: 'images/project4.png',
		title: 'Treehouse',
	  title2: 'Game Show App',
	  text: "I created a word guessing game using JavaScript to make players guess the correct phrases by typing the letters into the game. Now, this is where the fun begins as the project is mainly on JavaScript. Creating this game was a bit of a challenge as I had to create a lot of different functions such as generating a random phrase and another function to display it. I created an additional function which required a For Loop and an IF function to check if the player chose the correct letters to match the random phrase. If correct, another function activates and show a winning title on the screen. Although I could use jQuery to make my life easier, I would instead become more confident with JavaScript before moving on.  This project was challenging and fun at the same time as I did learn a lot from it.",
	  link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-6-Game-Show-App",
	  link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-6-Game-Show-App/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  tool4: "fab fa-js-square fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b4"
	},
	{
	  image: 'images/project5.png',
		title: 'Treehouse',
	  title2: 'WebApp Dashboard',
	  text: "I built an interactive web dashboard using JavaScript to create charts, graphics and other features that boost user interactivity. For this particular project I was able to use all of the skills that I have learned and implemented everything here. I used SASS to style the webpage, and I genuinely think this tool is just the best as I do not need to repeat codes. I started to learn CSS Grid, and it is convenient as I can layout the webpage in a certain way. With Grid, I set the navigation bar as row when users view it in mobile screen mode and column when seeing it in tablet and desktop screen mode. As part of this project, I created interactive charts with chart.js. As I learned Python before, I knew how to create charts but surprised to see how much it can do with JavaScript. Using JavaScript to create local storage for the settings was interesting, for example, I was required to create a drop down select option for the time zone and save the settings to make sure it stays the same whenever the webpage refreshes. However, with the resources from Treehouse, I was able to tackle the problem. Overall, it was a fun project and glad that I learned a lot from it.",
	  link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-7-WebApp-Dashboard",
	  link2: " https://vincentkman.github.io/TreeHouse-Techdegree-Unit-7-WebApp-Dashboard/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  tool4: "fab fa-js-square fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b5"
	},
	{
	  image: 'images/project6.png',
		title: 'Treehouse',
	  title2: 'Employee Directory API',
	  text: "For this project challenge, I created an employee directory using jQuery as I became more confident in JavaScript and used it to link to a third-party API to access their data and display the employee profile onto my web page. During the process, I learned a lot of new things such as the Callback function and AJAX and it was an eye opener. After fetching the data, I need to display the profile to the webpage and created a modal when a user clicks on a particular profile. I used For Each (an array iteration) to present the information such as the image, name, email, and city.  I also created a range of variables to make sure that the information is displayed correctly. For example, I made sure that the names are capitalised, and the date of birth are in UK format.  I am glad that I get to do a project based on a third-party API and personally think that it is beneficial for me as I became more confident in tackling more challenging projects.",
	  link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-8-Use-an-API-to-Create-an-Employee-Directory",
	  link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-8-Use-an-API-to-Create-an-Employee-Directory/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  tool4: "fab fa-js-square fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b6"
	},
	{
	  image: 'images/project7.png',
		title: 'FreeCodeCamp',
	  title2: 'Tribute Page',
	  text: "For this project challenge, I made a tribute page on Albert Einstein using all skills including HTML, SASS, JS and Bootstrap. After finishing all of my projects on Treehouse, I decided to keep coding and went on to Free Code Camp to improve my skills further. After completing various projects, I became more confident and efficient. I used an image of Albert Einstein as the landing page and included a timeline of his history of achievements.",
	  link: "https://github.com/vincentkman/FreeCodeCamp-Project-1-Tribute-Page",
	  link2: "https://vincentkman.github.io/FreeCodeCamp-Project-1-Tribute-Page/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x",
		tool5: "fas fa-bold fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b7"
	},
	{
	  image: 'images/project8.png',
		title: 'FreeCodeCamp',
	  title2: 'Survey Form',
	  text: "For this challenge, I created a survey form using HTML, SASS, JS and Bootstrap. This project is very similar to Project 1, so therefore, I have good experience in this area. This time I used SASS which made the process faster and more efficient.  I used various HTML elements, for example, text input field, select element of a drop-down list, checkbox and text-area input field. This project was an excellent opportunity to enhance my area on forms and feeling even more confident in my skills.",
	  link: "https://github.com/vincentkman/FreeCodeCamp-Project-2-Survey-Form",
	  link2: "https://vincentkman.github.io/FreeCodeCamp-Project-2-Survey-Form/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x",
		tool5: "fas fa-bold fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b8"
	},
	{
		image: 'images/project9.png',
		title: 'FreeCodeCamp',
		title2: 'Landing Page',
		text: "For this challenge, I created a webpage using HTML, SASS, JS and Bootstrap.",
		link: "https://github.com/vincentkman/FreeCodeCamp-Project-3-Landing-Page",
		link2: "https://vincentkman.github.io/FreeCodeCamp-Project-3-Landing-Page/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x",
		tool5: "fas fa-bold fa-stack-2x",
		block: "portfolio__block",
		block2: "b9"
	},
	{
		image: 'images/project10.png',
		title: 'FreeCodeCamp',
		title2: 'Technical Documentation',
		text: "For this challenge, I created a documentation using HTML, SASS, JS and Bootstrap.",
		link: "https://github.com/vincentkman/FreeCodeCamp-Project-4-Build-a-Technical-Documentation-Page",
		link2: "https://vincentkman.github.io/FreeCodeCamp-Project-4-Build-a-Technical-Documentation-Page/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x",
		tool5: "fas fa-bold fa-stack-2x",
		block: "portfolio__block",
		block2: "b10"
	}
];

$.each(data, (index, value) => {

  let boxes = `
  <div class="col-md-6 col-lg-4">
    <div id="${project++}" class="portfolio__project-card project-card">
		<div class="portfolio__container">
			<div class=${data[index].block} id=${data[index].block2}>
			<img src=${data[index].image} class="portfolio__block__img-description">
			<button class="btn btn-dark"><p>${data[index].title2}</p></button>
			</div>
			</div>
		</div>
  </div>
  `;

  portfolio.append(boxes);
});

// Append overlay to body in order to show the dim screen
$("body").append(overlay);

// ======================================
//  Event Handlers
// ======================================

$(".project-card").on('click', function() {
  navbar.hide();
  let profile = parseInt($(this).attr('id'));
  let createBox = (popupModal) => {

    let popup = `
    <input type="button" class="portfolio__modal__close-btn close-btn btn" value="&times"</>
		<h3 class="card-title">${data[popupModal].title}</h3>
		<h4 class="card-title">${data[popupModal].title2}</h4>
		<hr class="line">
			<div class="portfolio__modal__image modal-image">
        <img src=${data[popupModal].image} class="img padding">
       </div>
      <div class="portfolio__card-body cards-body">
				<p class="card-text">${data[popupModal].text}</p>
			 <div class="padding center-block mx-auto">
			 <hr class="line">
			 <h4>Skills Used</h4>
			 <span class="html fa-stack fa-2x">
			 <i class="${data[popupModal].tool1}"></i>
			 </span>
			 <span class="css fa-stack fa-2x">
			 <i class="${data[popupModal].tool2}"></i>
			 </span>
			 <span class="sass fa-stack fa-2x">
			 <i class="${data[popupModal].tool3}"></i>
			 </span>
			 <span class="js fa-stack fa-2x">
			 <i class="${data[popupModal].tool4}"></i>
			 </span>
			 <span class="boot fa-stack fa-2x">
			 <i class="${data[popupModal].tool5}"></i>
			 </span>
			 </div>
			 <div>
      <a href=${data[popupModal].link} target="_blank" class="btn btn-outline-dark">Github</a>
			<a href=${data[popupModal].link2} target="_blank" class="btn btn-outline-dark">See Live</a>
			</div>
		</div>
  </div>
    `;

    modal.html(popup);
  }

    $(document).ready(function() {
      $(".close-btn").on('click', function() {
        navbar.show(300);
        overlay.fadeOut(400);
        modal.fadeOut(400);
      });
    });

    overlay.on('click', function() {
      navbar.show(300);
      modal.fadeOut(400);
      overlay.fadeOut(400);
    });

    createBox(profile);
    navbar.hide();
    overlay.show();
    modal.fadeIn(500);
  });
