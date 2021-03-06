(function(win, doc, $) {

    $(doc).ready(init);

    function init() {
        $('.navbar-nav a').on('click', function(ev) {
            ev.preventDefault();
    
            var href = $(this).attr("href")
            var id = href.substring(1);
    
            doc.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        }); 

        $('.btn#btnApplyOrder').on('click', function() {
            var $history = $('.history');
            var recent = $history.hasClass('recent-first');
            
            $history.removeClass('recent-first');
            $history.removeClass('oldest-first');

            $history.addClass(recent ? 'oldest-first' : 'recent-first');

            toggleCheckpointOrder();
        });
    }
    
    function toggleCheckpointOrder() {
        var $timeline = $('.timeline');
        var $checkpointReverted = $('.checkpoint').get().reverse();
        var timelineHtml = $checkpointReverted.map(checkpoint => $(checkpoint)[0].outerHTML).join('');;

        $timeline.html(timelineHtml);
    }

})(window, document, jQuery);