// Change Text
$('#BtnChangeFontText').click(function () {
  var text = $('#InputFontText').val();

  (text !== '') ? $('#content').text(text) : alert("텍스트를 입력하세요.");
})

// Change Font_Size
$('#BtnChangeFontSize').click(function () {
  var text = $('#InputFontSize').val();

  (text !== '') ? $('#content').css('font-size', text) : alert("폰트크기를 입력하세요.");

  getCSSList()
  // console.log(document.getElementById("content").getAttribute("style"));
})

// Change Font_Color
$('#BtnChangeFontColor').click(function () {
  var text = $('#InputFontColor').val();

  (text !== '') ? $('#content').css('color', text) : alert("폰트색깔을 입력하세요.");

  getCSSList()
  // console.log(document.getElementById("content").getAttribute("style"));
})

// Change CSS
$('#BtnChangeCSS').click(function () {
  var text = $('#InputChangeCSS').val();
  var index = text.indexOf(':');

  if (index !== -1) {
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
$('#BtnAnimate1').click(function () {
  $('#content').addClass('animated bounce');

  // setTimeout( function() {
  //   $('#content').removeClass('animated bounce');
  // }, 1000)

  setTimeout(() => {
    $('#content').removeClass('animated bounce');
  }, 1000)
})

// Flash
$('#BtnAnimate2').click(function () {
  $('#content').addClass('animated flash');

  setTimeout(() => {
    $('#content').removeClass('animated flash');
  }, 1000)
})

// Pulse
$('#BtnAnimate3').click(function () {
  $('#content').addClass('animated pulse');

  setTimeout(() => {
    $('#content').removeClass('animated pulse');
  }, 1000)
})

function getCSSList() {
  $("#CSSList").empty();

  var cssList = $("#content").attr("style");
  var split = cssList.split(';');

  for (i = 0; i < split.length - 1; i++) {
    $("#CSSList").append(
      `<li class="list-group-item">
        <div style="display : flex; align-items: center;">
          <div>${split[i]}</div>
          <button class="btn btn-danger ml-auto">삭제</button>
        </div>
      </li>`
    )
  }
}

// $("li button").click(function() {
//   var index = $("li button").index(this);
//   var cssList = $("#content").attr("style");
//   var cssSplit = cssList.split(';');
//   var cssName = cssSplit[index].substring(0, cssSplit[index].indexOf(':'));

//   // 앞 뒤 공백 제거
//   cssName = cssName.trim();

//   // css 삭제
//   $("#content").css(cssName, '');
//   getCSSList()
// });

// 동적으로 생성된 Html 태그는 일반적인 이벤트 처리가 불가능
// 동적으로 생성된 태그에 대한 별도의 이벤트 처리
$(document).on("click", "li button", function () {
  var index = $("li button").index(this);
  var cssList = $("#content").attr("style");
  var cssSplit = cssList.split(';');
  var cssName = cssSplit[index].substring(0, cssSplit[index].indexOf(':'));

  // 앞 뒤 공백 제거
  cssName = cssName.trim();

  // css 삭제
  $("#content").css(cssName, '');
  getCSSList()
})