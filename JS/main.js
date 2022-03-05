$(document).ready(function () {
	var $Container  = $('.container');
	var $Header 	= $Container.find('.header');
	var $Row		= $Container.find('.row');
	var $Level  	= $Row.find('.course-level');
	var $Hexagon	= $Level.find('.hexagon');
	var $Stars  	= $Level.find('.stars');
	var $Lv 		= $Level.find('.level');
	var $Course		= $Level.find('.course-name');

	// Crown Object
	var $Crown		= $('#Crown');
	var $CrownSvg	= $Crown.find('svg');
	var $CrownCircle= $Crown.find('circle');
	var $CrownPath	= $Crown.find('path');
	
	// BigStars Object
	var $BigStars 		= $('#BigStars');
	var $BigStarsSvg	= $BigStars.find('svg');
	var $BigStarsPath 	= $BigStars.find('path');
	var $BigStarsCircle = $BigStars.find('circle');

	// Trophy Object
	var $Trophy 		= $('#Trophy');
	var $TrophySvg		= $Trophy.find('svg');
	var $TrophyPath		= $Trophy.find('path');
	var $TrophyCircle	= $Trophy.find('circle');

	var $Src;

	const e 		= 'click';				// Click event
	const l 		= 'left';				// CSS left 
	const w 		= 'width';				// CSS width
	const h 		= 'height';				// CSS height
	const bgc		= 'background-color';	// CSS background-color
	const ts 		= 'transition';			// CSS transition

	const dark_tangering = '#FAB815';

	// <summary> Set progress </summary>
	var setProgress = function () {
		var $this 	= $(this);
		$Src	 	= $this;
		var $row;
		var $prev;

		if($this.hasClass('level')) {
			$this.text() == '10' ? 
				startProgress() : runProgress();
		}
		else if($this.hasClass('stars')) {
			$this.next().text() == '10' ? 
				startProgress() : runProgress();
		}
		else if($this.hasClass('course-name')) {
			$this.prev().text() == '10' ? 
				startProgress() : runProgress();
		}
		else {
			$this.parent().find('.level').text() == '10' ?
				startProgress() : runProgress();
		}
	};

	// <summary> Start Point </summary>
	var startProgress = function () {
		var $done = $Header.find('.done');
		$done.css(h, '100%');
	};

	// <summamry> Run Progress </summary>
	var runProgress = function () {
		var $Parent = $Src.parent();
		var level 	= $Parent.find('.level').text();

		if(['20', '30', '40', '120', '130', '140'].indexOf(level) >= 0) {
			var $prev 	= $Parent.prev();
			var $done 	= $prev.find('.done');
			$done.css(w, '100%');
		} else if(['70', '80', '90'].indexOf(level) >= 0) {
			var $next 	= $Parent.next();
			var $done 	= $next.find('.done');
			$done.css(w, '100%');
		} else {
			var $vertical = level == '60' ? 
				$Crown.find('.vertical') :
				$BigStars.find('.vertical');
			var $done = $vertical.find('.done');
			$done.css(h, '100%');
		}
	};

	// <summary> Achieve Crown </summary> 
	var achieveCrown 	= function () {
		var tag = $(this).prop('tagName');

		if(['svg', 'circle', 'path'].indexOf(tag) >= 0) {
			var $horizon 	= $Crown.find('.horizon');
			var $h_done 	= $horizon.find('.done');

			$h_done.css(ts, 'all 1s');
			$h_done.css(w, '100%');
		}
	};

	// <summary> Achieve Big Stars </summary>
	var achieveBigStars = function () {
		var $horizon 	= $BigStars.find('.horizon');
		var $done 		= $horizon.find('.done');
		$done.css(w, '100%');
	};

	var achieveFinal 	= function () {
		var $vertical 	= $Trophy.find('.vertical');
		var $horizon	= $Trophy.find('.horizon');

		var $h_done 	= $horizon.find('.done');
		var $v_done		= $vertical.find('.done');

		$h_done.css(w, '100%');
		setTimeout(function () {
			$v_done.css(h, '100%');
		}, 1000)
	};

	// Level Click
	$Hexagon.on(e, setProgress);
	$Stars.on(e, setProgress);
	$Lv.on(e, setProgress);
	$Course.on(e, setProgress);
	// Crown Click
	$Crown.on(e, achieveCrown);
	$CrownCircle.on(e, achieveCrown);
	$CrownPath.on(e, achieveCrown);
	// BigStart Click
	$BigStarsSvg.on(e, achieveBigStars);
	$BigStarsPath.on(e, achieveBigStars);
	$BigStarsCircle.on(e, achieveBigStars);
	// Trophy Click
	$TrophySvg.on(e, achieveFinal);
	$TrophyPath.on(e, achieveFinal);
	$TrophyCircle.on(e, achieveFinal);
});