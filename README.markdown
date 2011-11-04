# Line Length Optimizer

This is a jQuery plugin that optimizes line length for either the current width (by adjusting the font size) or the current font size (by adjusting the width) of a container element.

## Optimizing for width

    jQuery('#container').optimizeLineLengthFor('width');

...sets the default font size for text in `#container` to an optimally readable value based on the container’s width.

## Optimizing for font size

    jQuery('#container').optimizeLineLengthFor('font');

...sets the maximum width of `#container` to an optimally readable value based on the current font size.
