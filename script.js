
window.addEventListener('DOMContentLoaded', function () {
    var timeline_boxes = document.getElementsByClassName("timeline_description");

    Array.from(timeline_boxes).forEach(
        function (element) {
            element.addEventListener("mouseover", function () {
                console.log("hovered over timeline content");
            });
        }
    );
    
});