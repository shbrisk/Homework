/*global $*/
(function () {
    'use strict';

    $(document).ready(function () {
        // Add click event handler to the "Load" button
        $("#loadButton").on("click", function () {
            // Get the input value (file name or URL)
            let fileName = $("#fileInput").val();
            // Display loading message
            $("#loadingMessage").show();
            // Clear previous content and error messages
            $("#fileContent").empty();
            $("#errorMessage").empty();

            // Make an AJAX request using fetch
            fetch(fileName)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.text();
                })
                .then(function (data) {
                    // Hide loading message
                    $("#loadingMessage").hide();
                    // Display the loaded file content
                    $("#fileContent").text(data);
                })
                .catch(function (error) {
                    // Hide loading message
                    $("#loadingMessage").hide();
                    // Display the error message
                    $("#errorMessage").text("Error: " + error.message);
                });
        });
    });
}());