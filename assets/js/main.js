// display menu
const navMenu = document.getElementById('nav-menu'),
	toggleMenu = document.getElementById('nav-toggle'),
	closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=> {navMenu.classList.toggle('show')})

// close menu
closeMenu.addEventListener('click', ()=> navMenu.classList.remove('show'))

// remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
		}
		else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}

// form validation
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const message = document.getElementById('message').value.trim();

	if (!name || !email || !message) {
		alert('Please fill out all fields.');
	} else {
		alert('Message sent successfully!');
		form.reset();
	}
});
