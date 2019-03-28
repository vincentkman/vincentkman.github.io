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
    title: 'Online Registration Form',
    text: 'I built a responsive, mobile first registration web form using a range of HTML elements such as the input element of checkbox and submit button, the select element of a drop-down list and the text-area element of a multi-line input field.',
    link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-3-An-Online-Registration-Form",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-3-An-Online-Registration-Form/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x"
  },
  {
    image: 'images/project2.png',
    title: 'Web Style Guide',
    text: "I created a style guide using Sass to transform the CSS style sheet with the use of variables, nesting, partials, imports, mixins, extends etc.",
		link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-4-Web-Style-Guide",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-4-Web-Style-Guide/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x"
  },
  {
    image: 'images/project3.png',
    title: 'Interactive Photo Gallery',
    text: 'I built an interactive photo gallery using JavaScript to create a search box and a lightbox.',
		link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-5-An-Interactive-Photo-Gallery",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-5-An-Interactive-Photo-Gallery/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x"

  },
  {
    image: 'images/project4.png',
    title: 'Game Show App',
    text: "I created a word guessing game using JavaScript to make players guess the correct phrases by typing the letters into the game.",
		link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-6-Game-Show-App",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-6-Game-Show-App/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x"
  },
  {
    image: 'images/project5.png',
    title: 'WebApp Dashboard',
    text: "I built an interactive web dashboard using JavaScript to create tables, charts and graphics and other features that boost user interactivity.",
		link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-7-WebApp-Dashboard",
		link2: " https://vincentkman.github.io/TreeHouse-Techdegree-Unit-7-WebApp-Dashboard/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x"
  },
  {
    image: 'images/project6.png',
    title: 'Employee Directory API',
    text: "For this project challenge, I created an employee directory using JavaScript to connect with a third party API in order to access their data and display the employee profile onto my web page.",
		link: "https://github.com/vincentkman/TreeHouse-Techdegree-Unit-8-Use-an-API-to-Create-an-Employee-Directory",
		link2: "https://vincentkman.github.io/TreeHouse-Techdegree-Unit-8-Use-an-API-to-Create-an-Employee-Directory/",
		tool1: "fab fa-html5 fa-stack-2x",
		tool2: "fab fa-css3-alt fa-stack-2x",
		tool3: "fab fa-sass fa-stack-2x",
		tool4: "fab fa-js-square fa-stack-2x"
  }
];

$.each(data, (index, value) => {

  let boxes = `
  <div class="col-md-6 col-lg-4 padding"><h5 class="portfolio__card-title card-title">${data[index].title}</h5>
    <div id="${project++}" class="cards">
      <div class="portfolio__card-body cards-body">
			<div class="portfolio__card-body__zoomImage">
      	<img src=${data[index].image} class="portfolio__project-img project-img card-img-top padding">

				<div class="portfolio__btn padding">
			 <a href=${data[index].link} target="_blank" class="btn btn-outline-dark">Github</a>
			 <a href=${data[index].link2} target="_blank" class="btn btn-outline-dark">See Live</a>
			 </div>
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

$(".cards").on('click', function() {
  navbar.hide();
  let profile = parseInt($(this).attr('id'));
  let createBox = (popupModal) => {

    let popup = `
    <input type="button" class="portfolio__modal__close-btn close-btn btn" value="&times"</>
			<div class="portfolio__modal__image modal-image">
        <img src=${data[popupModal].image} height="320" class="img">
       </div>
      <div class="portfolio__card-body cards-body">
       <h4 class="card-title">${data[popupModal].title}</h4>
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
