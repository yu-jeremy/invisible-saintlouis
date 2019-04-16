

window.addEventListener('DOMContentLoaded', function () {

    AOS.init();
    var containers = document.getElementsByClassName("container");
    var timeline_boxes = document.getElementsByClassName("content");
    var timeline_2000 = document.getElementById("hidden_2000");
    var explore_2000 = document.getElementById("explore_2000");

    Array.from(containers).forEach(
        function (element) {
            element.setAttribute("data-aos-duration", "1000")
        }
    );

    Array.from(timeline_boxes).forEach(
        function (element) {
            element.addEventListener("mouseover", function () {
                $(this).css("transform", "scale(1.04)")
            });
        }
    );

    Array.from(timeline_boxes).forEach(
        function (element) {
            element.addEventListener("mouseout", function () {
                $(this).css("transform", "scale(1.0)")
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
            $(explore_2000).css("background-color", "#284B63");
        }
        
        
       
    });


    
});