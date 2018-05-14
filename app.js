// Change Text
$('#BtnChangeFontText').click(function() {
  var text = $('#InputFontText').val();

  (text !== '') ? $('#content').text(text) : alert("텍스트를 입력하세요.");
})

// Change Font_Size
$('#BtnChangeFontSize').click(function() {
  var text = $('#InputFontSize').val();

  (text !== '') ? $('#content').css('font-size', text) : alert("폰트크기를 입력하세요.");
  
  getCSSList()
  // console.log(document.getElementById("content").getAttribute("style"));
})

// Change Font_Color
$('#BtnChangeFontColor').click(function() {
  var text = $('#InputFontColor').val();

  (text !== '') ?  $('#content').css('color', text) : alert("폰트색깔을 입력하세요.");
  
  getCSSList()
  // console.log(document.getElementById("content").getAttribute("style"));
})

// Change CSS
$('#BtnChangeCSS').click(function() {
  var text = $('#InputChangeCSS').val();
  var index = text.indexOf(':');
  
  if(index !== -1) {
    var key = text.substring(0, index - 1);
    var value = text.substring(index + 1, text.length);
  
    key = key.trim();
    value = value.trim();

    $('#content').css(key, value);
    
    getCSSList()
    // console.log(document.getElementById("content").getAttribute("style"));
  } else {
    alert("key : value를 입력하세요.");
  }
})

// Bounce
$('#BtnAnimate1').click(function() {
  $('#content').addClass('animated bounce');

  // setTimeout( function() {
  //   $('#content').removeClass('animated bounce');
  // }, 1000)
  
  setTimeout( () => {
    $('#content').removeClass('animated bounce');
  }, 1000)
})

// Flash
$('#BtnAnimate2').click(function() {
  $('#content').addClass('animated flash');

  setTimeout( () => {
    $('#content').removeClass('animated flash');
  }, 1000)
})

// Pulse
$('#BtnAnimate3').click(function() {
  $('#content').addClass('animated pulse');

  setTimeout( () => {
    $('#content').removeClass('animated pulse');
  }, 1000)
})

function getCSSList() {
  $("#CSSList").empty();

  var cssList = $("#content").attr("style");
  var split = cssList.split(';');

  for(i=0; i < split.length - 1 ; i++) {
    $("#CSSList").append("<li class='list-group-item'>" + split[i] + "</li>")
  }
}