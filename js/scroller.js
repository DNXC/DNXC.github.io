var initScrollerButton = function() {
    // Removes the fallback functionality
    $("#browse-videos-button").replaceWith('<a class="btn" id="browse-videos-button">Browse Videos<br><span class="octicon octicon-chevron-down"></span></a>');

    // Gives the "Browse Videos" button the ability to scroll to the videos section div
    $("#browse-videos-button").click(function() {
        $('html,body').animate(
            {scrollTop: $("#video-list").offset().top},
            500
        );
    });
};
