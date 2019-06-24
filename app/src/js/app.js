// import bootstrap js
import "./bootstrap";

import "./particles"

import "./panzoom"

/*
* You can add your custom JavaScript below.
* You can either start writing the entire code below or
* Divide the code into seperate modules and require them below.
* 
* Note: Make sure you import all the modules inside this file.
* 
* Use bootstrap.js to require node packages.
*/

$("#feat_idm, #feat_ip").click(() => {
    
    if ($('#feat_idm').hasClass('closed')) {
        $("#feat_ip").addClass("closed");
        $("#feat_idm").removeClass("closed");

        $("#feature-image-idm").removeClass("uk-hidden")
        $("#feature-image-ip").addClass("uk-hidden")
    }

    else {
        $("#feat_idm").addClass("closed");
        $("#feat_ip").removeClass("closed");

        $("#feature-image-ip").removeClass("uk-hidden")
        $("#feature-image-idm").addClass("uk-hidden")
    }
})

// custom checkbox
$('.custom-checkbox').each((i, el) => {

    $(el).find('.icon').click(function(e) {

        e.preventDefault()

        const input = $(el).find('input')[0]

        const icon = $(this).find('i')[0]

        const checked = $(input).attr('checked')

        if (checked) {
            $(input).removeAttr('checked')
            $(icon).removeClass('fas').addClass('far')
        }

        else {
            $(input).attr('checked', 'true')
            $(icon).removeClass('far').addClass('fas')
        }
    })
})

// form-input
$('.form-input, .form-textarea').each((i,el) => {

    // initial setup
    if ($(el).find('input, textarea').val().trim()) {
        $(el).addClass('focused')
    }

    $(el).find('input, textarea').focus(function(e) {

        if (!$(el).hasClass('focused')) $(el).addClass('focused')

    });

    $(el).find('input, textarea').blur(function(e) {

        if (!$(this).val().trim()) {
            $(el).removeClass('focused')
        }

    });
});