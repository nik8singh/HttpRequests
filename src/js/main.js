/**
 * Created by Nikhil on 7/8/2016.
 *
 * Get html from two html files using ajax calls
 * then append the fetched html to divs respectively
 */
function  simultaneousHTTPReqs() {

    $.when(
        $.get("requestOne.html"),
        $.get("requestTwo.html")
    ).then(function (input, output) {

        $("#divReq1").html( input);
        $("#divReq2").html( output);
    });
}

/**
 * btnRequest click listener.
 * Call simultaneousHTTPReqs() method on click
 * */
$(document).ready(function(){

    $('#btnRequest').on('click', function() {
        simultaneousHTTPReqs();
    });
});