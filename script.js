const menuBtn = document.getElementById('menu');
const mobileLinks = document.getElementById('nav_links-mobile');
const testimonial = document.getElementById('js_testimonial-animation');

// Mobile menu button toggle
menuBtn.addEventListener('click', () => {
	mobileLinks.classList.toggle('hidden');

	if (mobileLinks.style.display !== 'none') {
		menuBtn.setAttribute('aria-expanded', 'true');
		anime({
			targets: '#nav_links-mobile',
			scale: [0, 1],
			duration: 100,
			easing: 'linear',
		});
	} else {
		menuBtn.attr('aria-expanded', 'false');
	}
});

// Menu toggle animation
var anim = anime.timeline({
	easing: 'easeOutExpo',
	delay: 0,
	duration: 120,
	autoplay: false,
});

// Animation

anim.add({
	targets: '.testimonial:nth-of-type(1)',
	translateX: [-40, 0],
	opacity: [0, 1],
})
	.add({
		targets: '.testimonial:nth-of-type(2)',
		translateX: [-40, 0],

		opacity: [0, 1],
	})
	.add({
		targets: '.testimonial:nth-of-type(3)',
		translateX: [-40, 0],
		opacity: [0, 1],
	});
window.onscroll = function () {
	const scrollPercent = window.pageYOffset - testimonial.offsetTop + 400;

	anim.seek((scrollPercent / 400) * anim.duration);
};
