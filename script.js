  function runSlots(){
    
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];
    
    var slotOne =  slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var slotTwo =   slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var slotThree =  slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  

    
    $('.logger').html('');
    $('.logger').html('You are a Winner!');
    
    // Only change code below this line.
    //The images[slotOne - 1] is loading an image from the image array based on //the roll minus one because arrays start from 0. There are only 1,2,3 images if we subtract -1 then it will be 1-1 = 0 showing the first image 2-1 = 1 showing second image so in essence, it's saying image[0], image[1], image[2]
    $($(".slot")[0]).html('<img src= "' + images[slotOne-1] + '">');
    $($(".slot")[1]).html('<img src= "' + images[slotTwo-1] + '">');
    $($(".slot")[2]).html('<img src= "' + images[slotThree-1] + '">');
    
    
    // Only change code above this line.
    
    if (slotOne === slotTwo && slotTwo === slotThree) {
      return slotOne;
    }
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $('.logger').html(slotOne);
      $('.logger').append(' ' + slotTwo);
      $('.logger').append(' ' + slotThree);
    }
    
    return [slotOne, slotTwo, slotThree];
  }

function colors() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    var randomRGBA = "rgba("+ red +","+green+","+blue +",1)"
    $(".container").css("background-color:",randomRGBA);
}


$(document).ready(function(){
  
  $(".go").click(function(){
      runSlots();
      var red = Math.floor(Math.random()* 255);
      var green = Math.floor(Math.random()* 255);
      var blue = Math.floor(Math.random()* 255);

      var randomRGBA = "rgba("+ red +","+ green +","+ blue + ",1)"
      $(".container").css("background",randomRGBA);

  });
});