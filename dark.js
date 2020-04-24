$(document).ready(function(){
    var x = 0;
$( "#btn" ).click(function() {
    if(x == 0) {


    $('body, .menu, .content, .join,  ul.iter > li').css({
        'background-color': 'black',
    });
    $('.content, a').css({
        'color': '#616161'
    });
  
  $('.form-parent').css( {
    'background-image': 'url(file:///home/ivan/Downloads/83114_2880_1800.jpg)'
});
$('.foot, .rights').css( {
    'background-color': '#111111'
});
$('#custorder2, tr td' ).css( {
    'color': 'white'
});
$('#submit_id' ).css( {
    'background-color': '#111111',
    'color':'white'
});
$('nav' ).css( {
    'flex-flow':'row-reverse'
});



$('li').css({
    'background-color': 'black',
});

x=1;
    }
    else {
        $("body, nav, .rights, #submit_id, #custorder2, tr td, .foot, .rights, .form-parent, .content, a, body, .menu, .content, .join, .theme, li,  ul.iter > li").removeAttr('style');
        x = 0;
    }


});
});



//"ul.topnav > li" ).css( "border", "3px double red" );
