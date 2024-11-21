// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View

	

// var myApp = new Framework7(); 

 $(document).ready(function(){
 	$('.my').hide();
 });

	$('#serachme').keyup(function() {
    if($(this).val() == ''){
    	
    	$('.my').hide();
    }else{
    	
    	$('.my').show();
    }
}); 


/*  var mySearchbar = app.searchbar('.searchbar', {
          searchList: '.list-block',
          searchIn: '.item-inner'
      });   */



// var inputbox = document.getElementById('serachme')
// {
// 	inputbox.onkeyup = function () {
// 		document.getElementById('my') = show;
// 	}
// }

var mySearchbar = $$('.searchbar')[0].f7Searchbar;
 
// Now you can use it
mySearchbar.search();
searchList: '.list-block';
searchIn: '.item-inner';


 // $(document).ready(function(){
 //  $('.my').hide();
 // });


// var myApp = new Framework7();
 
// var $$ = Dom7;
 
// $$('.open-about').on('click', function () {
//     var clickedLink = this;
//     myApp.popover('.popover-about', clickedLink);
// });




 
 $(document).ready(function(){
// $$('.create-about').on('click', function () {
  var clickedLink = this;
  var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p>About Popover created dynamically.</p>'+
                          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>'
  myApp.popover(popoverHTML, clickedLink);
});
     












