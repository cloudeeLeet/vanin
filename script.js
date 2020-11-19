$(document).ready(function(){
    addListenerToAddTask();
});

function addListenerToAddTask(){ 
    $('.slider').click(function(){
        $('p').toggleClass('dark-mode');
        $('h1').toggleClass('dark-mode');
        $('a').toggleClass('dark-mode-a');
        $('div#dark').toggleClass('dark-mode-bg');
        $('img').toggleClass('dark-mode-img');
    });
 }