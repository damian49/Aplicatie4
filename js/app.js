// This is a JavaScript file
(function () {

       function tratareEvenimente() {
           var watchID = navigator.compass.watchHeading(onSuccess, onError, {frequency: 10});
           document.querySelector("#set").addEventListener("click", function() {
              // Citesc unghiul
              var u = document.querySelector("#unghi").value;
              //  Rotesc cadranul
              var element = document.querySelector("#cadran");
              var rot = "rotate(" + (-u) + "deg)";
              element.style.transform = rot;
            });
       }

       ons.ready(function () {
           console.log("Onsen UI is ready!");
           tratareEvenimente();
       });

       function onSuccess(heading) {
           var element = document.getElementById("indicator");
           var rot = "rotate(" + (-heading.magneticHeading) + "deg)";
           element.style.transform = rot;
       }

       function onError(compassError) {
           ons.notification.alert('Compass error: ' + compassError.code);
       }
   })();
