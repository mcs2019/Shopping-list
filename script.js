/// Just go to JQuery and look at the documentation for all the methods we can use with JQuery
// Lets create a wrapper function that waits for the DOM to lead 
$(document).ready(function(){

//Add an event lsitener that listen for a click on the Add button. (on the id#)
  $('#add').click(function(){
    // grab the user imput and store it in a variable for later use
    var userInput = $('input[name=shoppingListItem]').val();
    // test to make sure we are grabbing the value
    // console.log(userInput)

    // add user input to the DOM as a list Item
  $('.list').append('<li>' + '<input class ="checked-item" type="checkbox">' + userInput + '</li>');
  return false;
  })
  // Keep track of the user toggling each item and create an event listener

  $(document).on('click','.checked-item',function(){

    //capture the current list item user is clicking on
    $(this).parent().toggleClass('is-it-checked');

  })

  // add an event listener to the check buttom
  $('.checked').on('click', function(e){

    //prevent the default browser/form action from happening

    e.preventDefault();

    // remove the checked items

    $('.is-it-checked').remove();
  })

  $('.reset-list').on('click',function(e){
     
     e.preventDefault();

     //remove all list items in the shopping cart
     $('li').remove();
  })
  


})
