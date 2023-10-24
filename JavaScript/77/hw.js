/*globals $*/
(function () {
    'use strict';

    let css = '.yellow { background-color: yellow; }';
    $('<style>')
        .text(css)
        .appendTo('head');

    $(document).ready(function () {
        $("#evens").click(function () {
            $("p:even").addClass("yellow");
            $("p:odd").removeClass("yellow");
        });

        $("#odds").click(function () {
            $("p:odd").addClass("yellow");
            $("p:even").removeClass("yellow");
        });
    });
}
)();