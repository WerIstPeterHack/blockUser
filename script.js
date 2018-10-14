$('div.item-container').bind('DOMSubtreeModified', function(e) {

  if (e.target.innerHTML.length > 0) {
    
    var currentUser = $('div.item-details a.user').html()
    var newStyle = {
       'opacity' : 0,
       'width' : '5px',
       'height' : '5px'
    };
    
    // first hide image
    if (currentUser == 'Gehirnherpes') {
        
        $('div.item-image').css(newStyle);
        $('div.item-image-thumb').css(newStyle);
        $('img.item-image-actual').css(newStyle);
        
    }
    
    
  }
  
});
