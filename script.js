$( document ).ready(function() {
  console.log("document is ready");

  $('.copy-button').on('click', function(event) {
    var copyTextarea = $(this).data('id');
    $('#' + copyTextarea)[0].select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      if (msg === 'successful') {
        $('.notification-success').fadeIn('fast', function() {
          $(this).delay(100).fadeOut('slow');
        });
      }
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
});
