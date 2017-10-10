class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		self.slideContentMarginAdjust();
		self.preSet()
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    	this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	preSet(){
		//scale images with aspect ratio
		let cardHeight = $(".preview-card .top").height();
		let cardWidth = $(".preview-card .top").width();
		let imgDimensions = this.calculateAspectRatioFit(2560, 1404, cardWidth, cardHeight);
		$(".preview-card .top img").css({width: imgDimensions.width, height:imgDimensions.height})
		
		let aboutWidth = $("#tab-about").width();
		console.log(aboutWidth);
		let aboutHeight = $("#tab-about").height();
		console.log(aboutHeight);
		let aboutOfsetHeight = $("#tab-about h1").height() * 3;
		let profileImgDimens = this.calculateAspectRatioFit(1024, 1024, (aboutWidth/2), (aboutHeight - aboutOfsetHeight));
		$("#tab-about img").css({width:profileImgDimens.width, height:profileImgDimens.height});
	}
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	slideContentMarginAdjust(){
		const heightOfNav = $(".et-hero-tabs-container").height();
		console.log(heightOfNav);
	}
	/**
	* keeps aspect ratio of the orignal region
	*
	* @param {Number} srcWidth src width
	* @param {Number} srcHeight src height
	* @param {Number} maxWidth max width
	* @param {Number} maxHeight max height
	* @return {Object} { width, height }
	*/
	calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
		let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
		return { width: srcWidth*ratio, height: srcHeight*ratio };
	}
	
}

$(document).ready( () => { new StickyNavigation(); 

});