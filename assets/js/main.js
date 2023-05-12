/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Forms.

	// Hack: Activate non-input submits.
	$('form').on('click', '.submit', function (event) {

		// Stop propagation, default.
		event.stopPropagation();
		event.preventDefault();

		// Submit form.
		$(this).parents('form').submit();

	});

	// Sidebar.
	if ($sidebar.length > 0) {

		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$sidebar_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					initialize: function () {

						// Deactivate section.
						$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($sidebar_a.filter('.active-locked').length == 0) {

							$sidebar_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			// If <=large, >small, and sidebar is present, use its height as the offset.
			if (breakpoints.active('<=large')
				&& !breakpoints.active('<=small')
				&& $sidebar.length > 0)
				return $sidebar.height();

			return 0;

		}
	});

	// Spotlights.
	$('.spotlights > section')
		.scrollex({
			mode: 'middle',
			top: '-10vh',
			bottom: '-10vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		})
		.each(function () {

			var $this = $(this),
				$image = $this.find('.image'),
				$img = $image.find('img'),
				x;

			// Assign image.
			$image.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set background position.
			if (x = $img.data('position'))
				$image.css('background-position', x);

			// Hide <img>.
			$img.hide();

		});

	// Features.
	$('.features')
		.scrollex({
			mode: 'middle',
			top: '-20vh',
			bottom: '-20vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		});

})(jQuery);



// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// #skill_htmlcss
var bar = new ProgressBar.Line(skill_htmlcss, {
	strokeWidth: 3,
	easing: 'easeInOut',
	duration: 1400,
	color: '#0d4568',
	trailColor: 'rgba(0,0,0,0)',
	trailWidth: 3,
	svgStyle: { width: '75%', height: '100%' },
	text: {
		style: {
			// Text color.
			// Default: same as stroke color (options.color)
			color: '#fff',
			position: 'absolute',
			left: '0',
			top: '1.5em',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
	},
	from: { color: '#FFEA82' },
	to: { color: '#ED6A5A' },
	step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(0.95);  // Number from 0.0 to 1.0


// #skill_jquery
var bar = new ProgressBar.Line(skill_jquery, {
	strokeWidth: 3,
	easing: 'easeInOut',
	duration: 1400,
	color: '#0d4568',
	trailColor: 'rgba(0,0,0,0)',
	trailWidth: 3,
	svgStyle: { width: '75%', height: '100%' },
	text: {
		style: {
			// Text color.
			// Default: same as stroke color (options.color)
			color: '#fff',
			position: 'absolute',
			left: '0',
			top: '1.5em',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
	},
	from: { color: '#FFEA82' },
	to: { color: '#ED6A5A' },
	step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(0.85);  // Number from 0.0 to 1.0


// #skill_ps
var bar = new ProgressBar.Line(skill_ps, {
	strokeWidth: 3,
	easing: 'easeInOut',
	duration: 1400,
	color: '#0d4568',
	trailColor: 'rgba(0,0,0,0)',
	trailWidth: 3,
	svgStyle: { width: '75%', height: '100%' },
	text: {
		style: {
			// Text color.
			// Default: same as stroke color (options.color)
			color: '#fff',
			position: 'absolute',
			left: '0',
			top: '1.5em',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
	},
	from: { color: '#FFEA82' },
	to: { color: '#ED6A5A' },
	step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(0.9);  // Number from 0.0 to 1.0


// #skill_ai
var bar = new ProgressBar.Line(skill_ai, {
	strokeWidth: 3,
	easing: 'easeInOut',
	duration: 1400,
	color: '#0d4568',
	trailColor: 'rgba(0,0,0,0)',
	trailWidth: 3,
	svgStyle: { width: '75%', height: '100%' },
	text: {
		style: {
			// Text color.
			// Default: same as stroke color (options.color)
			color: '#fff',
			position: 'absolute',
			left: '0',
			top: '1.5em',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
	},
	from: { color: '#FFEA82' },
	to: { color: '#ED6A5A' },
	step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(0.85);  // Number from 0.0 to 1.0


// #skill_xd
var bar = new ProgressBar.Line(skill_xd, {
	strokeWidth: 3,
	easing: 'easeInOut',
	duration: 1400,
	color: '#0d4568',
	trailColor: 'rgba(0,0,0,0)',
	trailWidth: 3,
	svgStyle: { width: '75%', height: '100%' },
	text: {
		style: {
			// Text color.
			// Default: same as stroke color (options.color)
			color: '#fff',
			position: 'absolute',
			left: '0',
			top: '1.5em',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
	},
	from: { color: '#FFEA82' },
	to: { color: '#ED6A5A' },
	step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(0.8);  // Number from 0.0 to 1.0


// #skill_prae
var bar = new ProgressBar.Line(skill_prae, {
	strokeWidth: 3,
	easing: 'easeInOut',
	duration: 1400,
	color: '#0d4568',
	trailColor: 'rgba(0,0,0,0)',
	trailWidth: 3,
	svgStyle: { width: '75%', height: '100%' },
	text: {
		style: {
			// Text color.
			// Default: same as stroke color (options.color)
			color: '#fff',
			position: 'absolute',
			left: '0',
			top: '1.5em',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
	},
	from: { color: '#FFEA82' },
	to: { color: '#ED6A5A' },
	step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(0.7);  // Number from 0.0 to 1.0