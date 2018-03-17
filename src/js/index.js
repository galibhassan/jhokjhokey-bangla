window.addEventListener('load', function () {
    var wrapperDiv = document.getElementById("wrapper");
    var mainTextarea = document.getElementById("mainTextarea");

    wrapperDiv.style.position = 'absolute';
    var windowMidpoint = {
        "x": window.innerWidth / 2,
        "y": window.innerHeight / 2
    };
    var wrapperDivMidpoint = {
        "x": wrapperDiv.offsetWidth / 2,
        "y": wrapperDiv.offsetHeight / 2
    }
    wrapperDiv.style.left = parseInt(windowMidpoint.x - wrapperDivMidpoint.x) + 'px';
    wrapperDiv.style.top = parseInt(windowMidpoint.y - wrapperDivMidpoint.y) + 'px';
});