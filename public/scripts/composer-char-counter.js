$(document).ready(function() {
// incrementing the char counter
  let maxLength = 140;
  $('#tweet-text').keyup(function() {
    let count = $(this).val().length;
    let length = maxLength - count

    if (length < 0) {
      $('.counter').addClass('red');
    } else {
      $('.counter').removeClass('red');
    }
    $('.counter').text(length);
  });

  $('#scrollUp').click(() => {
    $("html, body").animate({ scrollTop: "0px" }, 'smooth');
  })
})