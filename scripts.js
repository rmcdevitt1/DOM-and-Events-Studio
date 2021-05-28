// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {

    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");


        function takeoffConfirm () {
            let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirm) {
                flightStatus.innerHTML = "Shuttle in flight";
                shuttleBackground.style.backgroundColor = "blue";
                spaceShuttleHeight.innerHTML += 10000;
            }

        }
        takeoff.addEventListener("click", takeoffConfirm);

        function land () {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;

        }
        landing.addEventListener("click", land);

        function abort () {
            let confirm = window.confirm("Confirm that you want to abort the mission.");
            if (confirm) {
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.innerHTML = 0;
            }
        }
        missionAbort.addEventListener("click", abort);

        function up () {
            spaceShuttleHeight.innerHTML += 10000;
        }
        goingUp.addEventListener("click", up);


}

window.addEventListener("load", init);