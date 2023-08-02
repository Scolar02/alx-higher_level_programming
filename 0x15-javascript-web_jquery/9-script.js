$(document).ready(function () {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
    const helloValue = data.hello;
    $('#hello').text(helloValue);
  });
});
