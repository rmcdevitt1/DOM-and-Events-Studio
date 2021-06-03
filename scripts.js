// Write your JavaScript code here.
// Remember to pay attention to page loading!

//re-doing this with colleages on 6/2 since zoom crashed last week//

                        //what I originall had://

// function init () {

//     const takeoffButton = document.getElementById("takeoff");
//     const landingButton = document.getElementById("landing");
//     const abortMissionButton = document.getElementById("missionAbort");

//     const up = document.getElementById("up");
//     const down = document.getElementById("down");
//     const left = document.getElementById("left");
//     const right = document.getElementById("right");


//         function takeoffConfirm () {
//             let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
//             if (confirm) {
//                 flightStatus.innerHTML = "Shuttle in flight";
//                 shuttleBackground.style.backgroundColor = "blue";
//                 spaceShuttleHeight.innerHTML += 10000;
//             }

//         }
//         takeoff.addEventListener("click", takeoffConfirm);

//         function land () {
//             window.alert("The shuttle is landing. Landing gear engaged.");
//             flightStatus.innerHTML = "The shuttle has landed.";
//             shuttleBackground.style.backgroundColor = "green";
//             spaceShuttleHeight.innerHTML = 0;

//         }
//         landing.addEventListener("click", land);

//         function abort () {
//             let confirm = window.confirm("Confirm that you want to abort the mission.");
//             if (confirm) {
//                 flightStatus.innerHTML = "Mission aborted.";
//                 shuttleBackground.style.backgroundColor = "green";
//                 spaceShuttleHeight.innerHTML = 0;
//             }
//         }
//         missionAbort.addEventListener("click", abort);

//         function up () {
//             spaceShuttleHeight.innerHTML += 10000;
//         }
//         goingUp.addEventListener("click", up);


// }

// window.addEventListener("load", init);


                    //what we're all doing together!!://

function init () {
    const shuttle = document.getElementById("rocket");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    shuttle.style.position = "absolute";
    shuttle.style.left ="0px";
    shuttle.style.bottom = "0px"; 


    function takeoffConfirm () {
    let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirm) {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    }
    takeoffButton.addEventListener("click", takeoffConfirm);


    function land () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
    landingButton.addEventListener("click", land);

    function abort () {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        }
    }
    abortMissionButton.addEventListener("click", abort);


    function moveUp () {
        shuttle.style.bottom = parseInt(shuttle.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
    upButton.addEventListener("click", moveUp);


    function moveRight () {
        shuttle.style.left = parseInt(shuttle.style.left) + 10 + "px";
    }
    rightButton.addEventListener("click", moveRight);

    
}

window.addEventListener("load", init);