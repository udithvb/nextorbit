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

$("#feat_idm .feat-icon").click(() => {
    $("#feat_ip").addClass("closed");
    $("#feat_idm").removeClass("closed");
})

$("#feat_ip .feat-icon").click(() => {
    $("#feat_idm").addClass("closed");
    $("#feat_ip").removeClass("closed");
})