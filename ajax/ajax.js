$(document).ready(function () {

$('#clickme').click(function () {

$.ajax({
url: "/echo/json/",
type: "POST",
data: { a:1 },
success: function() {alert("успех"); }
});

})

});
