(function () {
    // Gets all the TDs.
    var td = document.getElementsByTagName("td");

    // Iterates through them and add a black background for "Corinthians" and a green blackground for "Palmeiras".
    for (var index = 0; index < td.length; index++)
        if (index % 2 == 0)
            td[index].style.background = "rgba(0,0,0,.8)";
        else
            td[index].style.backgroundColor = "rgba(0,120,0,.8)";

    // Gets the first THs.
    var corinthians = document.getElementsByTagName("th")[1];
    var palmeiras = document.getElementsByTagName("th")[2];

    // Gets the padding-left and the padding-right of "Corinthians".
    corinthiansPaddings = Number(window.getComputedStyle(corinthians).paddingLeft.replace("px", "")) + Number(getComputedStyle(corinthians).paddingRight.replace("px", ""));

    // Sets the "Palmeiras" width as the "Corinthians" width minus its padding.
    palmeiras.style.width = (corinthians.offsetWidth - corinthiansPaddings) + "px";
})();