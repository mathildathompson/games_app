//this file controls the sidebar that displays the resume
//it uses jquery to add content into the sidebar-resume div in the DOM
//these events are triggered by code in the phaser.js/index.html
//in this file is the jQuery that controls the accordion effect. It interacts with the content in the 
//sidebar-resume div in the games index view. 

/*jQuery time*/
$(document).ready(function(){
    $("#accordian h3").click(function(){
        //slide up all the link lists
        $("#accordian ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
        }
    })
})