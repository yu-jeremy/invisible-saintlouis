

window.addEventListener('DOMContentLoaded', function () {

    AOS.init();
    var containers = document.getElementsByClassName("container");
    var content = document.getElementsByClassName("content");
    var timeline_2000 = document.getElementById("hidden_2000");
    var explore_2000 = document.getElementById("explore_2000");

    var timeline_2019 = document.getElementsByClassName("hidden_2019");
    var explore_2019 = document.getElementById("explore_2019");
    var quote_2019 = document.getElementById("quote_2019");

    var buttons = document.getElementsByClassName("pure-button");
    var situate_btn = document.getElementById("situate_button");
    var emass_timeline = document.getElementById("emass_timeline");
    var broad_timeline = document.getElementById("broad_timeline");
    var header = document.getElementById("header");
    var class_title = document.getElementById("class_title");

    var broad_timeline_1997 = document.getElementById("hidden_broad_1997");
    var footer = document.getElementById("footer");

    broad_timeline.hidden = true;
    
    situate_btn.addEventListener("click", function() {  
        $(class_title).css("opacity", 0.65);
        if (situate_btn.textContent == "Zoom In") {
            header.textContent = " A History of Eastern Missouri Alternative Sentencing Services"
            emass_timeline.hidden = false;
            broad_timeline.hidden = true;
            situate_btn.textContent = "Situate";
            $(footer).animate({
                backgroundColor: "#191919",
                color: "white"
            });
            $(situate_btn).animate({
                backgroundColor: "#153243",
                color: "white"
            }, 1000);
            $(situate_btn).hover(function() {
                $(this).css({
                    "background-color":"#3D7499", 
                    "color":"white"
                });
            }, function() {
                $(this).css("background-color", "#153243")
            });
            $(document.body).animate({
                backgroundColor: "#F15025",
                color: "#191919"
            }, 1000);
            var newContentStyles = {
                "background-color": "#F2F4F3",
                "padding": "20px 30px",
                "position": "relative",
                "border-radius": "6px"
            }
            Array.from(content).forEach(
                function (element) {
                    $(element).css(newContentStyles);
                }
            );
            
        } else if (situate_btn.textContent == "Situate") {

            emass_timeline.hidden = true;
            broad_timeline.hidden = false;
            $(footer).css({
                "background-color": "#F2F4F3",
                "color": "black"
            });
            var newContentStyles = {
                "background-color": "#F2F4F3",
                "padding": "20px 30px",
                "position": "relative",
                "border-radius": "6px",
                "color": "black"
            }
            Array.from(content).forEach(
                function (element) {
                    $(element).animate(newContentStyles);
                }
            );
            header.textContent = " A History of Privatized Probation Companies and Services"
            situate_btn.textContent = "Zoom In"
            $(situate_btn).hover(function() {
                $(this).css({
                    "background-color": "#BFC3BA", 
                    "color":"#191919"
                });
            }, function() {
                $(this).css("background-color", "white");
            });
            $(situate_btn).animate({
                backgroundColor: "white",
                color: "#191919"
            }, 1000);
            $(document.body).animate({
                backgroundColor: "#2E2235",
                color: "#F2F4F3"
            }, 1000);
            
        }
    });

    Array.from(containers).forEach(
        function (element) {
            element.setAttribute("data-aos-duration", "1250")
        }
    );

    Array.from(buttons).forEach(
        function (element) {
            $(element).css("border-radius", "10px");
        }
    );

    explore_broad_1997.addEventListener("click", function () {
        if (this.textContent == "Explore") {
            broad_timeline_1997.removeAttribute("hidden");
            this.textContent = "See Less";
            $(this).css("background-color", "red");
        } else if (this.textContent == "See Less") {
            broad_timeline_1997.hidden = true;
            this.textContent = "Explore";
            $(this).css('background-color', "#284B63");
        }
    })
    explore_2000.addEventListener("click", function () {
        if (explore_2000.textContent == "Explore") {
            timeline_2000.removeAttribute("hidden");
            explore_2000.textContent = "See Less";
            $(explore_2000).css("background-color", "red");
        } else if (explore_2000.textContent == "See Less") {
            timeline_2000.hidden = true;
            explore_2000.textContent = "Explore";
            $(explore_2000).css("background-color", "#284B63");
        }
    });

    explore_2019.addEventListener("click", function () {
        if (explore_2019.textContent == "Explore") {
            Array.from(timeline_2019).forEach(
                function (element) {
                    element.removeAttribute("hidden");
                }
            );
            quote_2019.removeAttribute("hidden");
            explore_2019.textContent = "See Less";
            $(explore_2019).css("background-color", "red");
        } else if (explore_2019.textContent = "See Less") {
            Array.from(timeline_2019).forEach(
                function (element) {
                    element.hidden = true;
                }
            );
            quote_2019.hidden = true;
            explore_2019.textContent = "Explore";
            $(explore_2019).css("background-color", "#284B63");
        }
    })
});