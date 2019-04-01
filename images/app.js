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
		title: 'TreeHouse',
    title2: 'Online Registration Form',
    text: 'I built a responsive, mobile first registration web form using a range of HTML elements such as the input element of checkbox and submit button, the select element of a drop-down list and the text-area element of a multi-line input field.',
    link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-3-An-Online-Registration-Form",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-3-An-Online-Registration-Form/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		block: "portfolio__block",
		block2: "b1"
  },
	{
	  image: 'images/project2.png',
		title: 'TreeHouse',
	  title2: 'Web Style Guide',
	  text: "I created a style guide using Sass to transform the CSS style sheet with the use of variables, nesting, partials, imports, mixins, extends etc.",
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
		title: 'TreeHouse',
	  title2: 'Interactive Photo Gallery',
	  text: 'I built an interactive photo gallery using JavaScript to create a search box and a lightbox.',
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
		title: 'TreeHouse',
	  title2: 'Game Show App',
	  text: "I created a word guessing game using JavaScript to make players guess the correct phrases by typing the letters into the game.",
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
		title: 'TreeHouse',
	  title2: 'WebApp Dashboard',
	  text: "I built an interactive web dashboard using JavaScript to create tables, charts and graphics and other features that boost user interactivity.",
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
		title: 'TreeHouse',
	  title2: 'Employee Directory API',
	  text: "For this project challenge, I created an employee directory using JavaScript to connect with a third party API in order to access their data and display the employee profile onto my web page.",
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
	  text: "For this project challenge, I made a tribute page on Albert Einstein using HTML and CSS.",
	  link: "https://github.com/vincentkman/FreeCodeCamp-Project-1-Tribute-Page",
	  link2: "https://vincentkman.github.io/FreeCodeCamp-Project-1-Tribute-Page/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b7"
	},
	{
	  image: 'images/project8.png',
		title: 'FreeCodeCamp',
	  title2: 'Survey Form',
	  text: "For this project challenge, I created a survey form using HTML and CSS.",
	  link: "https://github.com/vincentkman/FreeCodeCamp-Project-2-Survey-Form",
	  link2: "https://vincentkman.github.io/FreeCodeCamp-Project-2-Survey-Form/",
	  tool1: "fab fa-html5 fa-stack-2x",
	  tool2: "fab fa-css3-alt fa-stack-2x",
	  tool3: "fab fa-sass fa-stack-2x",
	  block: "portfolio__block",
	  block2: "b8"
	}
];

$.each(data, (index, value) => {

  let boxes = `
  <div class="col-md-6 col-lg-4">
    <div id="${project++}" class="cards">
			<div class=${data[index].block} id=${data[index].block2}>
			<img src=${data[index].image} class="img__description">
			<h5 class="img__text text-center">${data[index].title2}</h5>
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

$(".cards").on('click', function() {
  navbar.hide();
  let profile = parseInt($(this).attr('id'));
  let createBox = (popupModal) => {

    let popup = `
    <input type="button" class="portfolio__modal__close-btn close-btn btn" value="&times"</>
		<h3 class="card-title">${data[popupModal].title}</h3>
		<h4 class="card-title">${data[popupModal].title2}</h4>
			<div class="portfolio__modal__image modal-image">
        <img src=${data[popupModal].image} height="320" class="img padding">
       </div>
      <div class="portfolio__card-body cards-body">
				<p class="card-text">${data[popupModal].text}</p>
			 <div class="padding center-block mx-auto">
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
