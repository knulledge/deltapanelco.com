$(document).ready(function () {
    let navMargin = parseVal($navbar.css('margin-top'));

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['top', 'cabin-panel', 'floor-panel', 'contact-us'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            'صفحه اصلی',
            'پنل داخل کابین',
            'پنل طبقات',
            'تماس با ما'
        ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        paddingTop: '5em',
        paddingBottom: '36px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && nextIndex != 1) {
                navExpand();
                $navbar.css({
                    marginTop: (navMargin.val / 4) + navMargin.unit,
                    marginBottom: (navMargin.val / 4) + navMargin.unit
                });
            } else if (nextIndex == 1) {
                navShrink();
                $navbar.css({
                    marginTop: navMargin.val + navMargin.unit,
                    marginBottom: navMargin.val + navMargin.unit
                });
            }
        },
        afterLoad: function (anchorLink, index) { /* Empty */ },
        afterRender: function () { /* Empty */ },
        afterResize: function () { /* Empty */ },
        afterResponsive: function (isResponsive) { /* Empty */ },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { /* Empty */ },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { /* Empty */ }
    });
});
