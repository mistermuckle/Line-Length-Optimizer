(function($) {
    $.fn.optimizeLineLengthFor = function(criteria) {
        this.each(function() {
            var el = $(this);
            var measureDiv = $('<div>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</div>')
                .css('float', 'left')
                .appendTo(el);
            var measure = measureDiv.width();
            measureDiv.remove();
            var fontSize = parseInt(el.css('fontSize'));

            if (criteria == 'width') {
                el.css('fontSize', (el.width() * fontSize / measure) + 'px');
            } else if (criteria == 'font') {
                el.css('maxWidth', measure + 'px');
            }
        });

        return this;
    };
})(jQuery);
