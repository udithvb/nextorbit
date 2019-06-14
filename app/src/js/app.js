// import bootstrap js
import "./bootstrap";

/*
* You can add your custom JavaScript below.
* You can either start writing the entire code below or
* Divide the code into seperate modules and require them below.
* 
* Note: Make sure you import all the modules inside this file.
* 
* Use bootstrap.js to require node packages.
*/

$("#feat_idm .feat-toggle-expand, #feat_ip .feat-toggle-expand").click(() => {
    
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