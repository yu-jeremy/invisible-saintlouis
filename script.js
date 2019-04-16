
window.addEventListener('DOMContentLoaded', function () {
    var timeline_boxes = document.getElementsByClassName("timeline_description");
    var timeline_2000 = document.getElementById("hidden_2000");
    var explore_2000 = document.getElementById("explore_2000");

    Array.from(timeline_boxes).forEach(
        function (element) {
            element.addEventListener("mouseover", function () {
                console.log("hovered over timeline content");
            });
        }
    );

    explore_2000.addEventListener("click", function () {
        if (explore_2000.textContent == "Explore") {
            timeline_2000.removeAttribute("hidden");
            explore_2000.textContent = "See Less";
            $(explore_2000).css("background-color", "red");
        } else if (explore_2000.textContent = "See Less") {
            timeline_2000.hidden = true;
            explore_2000.textContent = "Explore";
            $(explore_2000).css("background-color", "#274690");
        }
        
        
       
    });


    
});