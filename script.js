userToBlock = 'Gehirnherpes';

// trigger changes on comment container
$('div.comments').bind('DOMSubtreeModified', function(e) {

      if (e.target.innerHTML.length > 0) {
        console.log('userToBlock');

//      var currentUser = $('div.comments a.user').html()

      }
      
})

// trigger changes on image container
$('div.item-container').bind('DOMSubtreeModified', function(e) {

  if (e.target.innerHTML.length > 0) {
    
    var currentOP = $('div.item-details a.user').html()
    var newStyle = {
       'opacity' : 0,
       'width' : '5px',
       'height' : '5px'
    };
    
    if (currentOP == userToBlock) {
        
        $('div.item-image').css(newStyle);
        $('div.item-image-thumb').css(newStyle);
        $('img.item-image-actual').css(newStyle);
        
    }
    
    $('div.comments a.user').each(function(){
        
        currentCommenter =  $(this).html();
        
        if (currentCommenter == userToBlock) {
        
            $(this).parent().parent().text('<<blocked>>')
            
        }
        
    })
    
  }
  
});
