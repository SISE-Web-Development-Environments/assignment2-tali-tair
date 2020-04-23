// Get the modal
var modal = $('#myModal');
// Get the button that opens the modal
var btn = $('#about');
// Get the <span> element that closes the modal
var span = $('#close');
// When the user clicks the button, open the modal 
btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).keydown(function(e) {
    var code = e.keyCode || e.which;
    if (code == 27) $('#myModal').hide();
});