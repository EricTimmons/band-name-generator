'use strict';

$(function() {
  $("#name").on('click', function() {
    $.get("http://localhost:3000/adjective", function(res) {
      var adjective = res.word;
      $("#adjective").text(adjective);
    })
  })
});
