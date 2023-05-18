let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
    let a = Number(document.getElementById("area").value);
    let bhkarr = document.getElementByName("bhk").value;
    let bathroomarr = document.getElementByName("bathroom").value;
    let location = document.getElementById("location").value;
    var bhk = 0;
    var bathroom = 0;
    var i = 0;

    for (i = 0; i < bhkarr.length; i++) {
        if (bhkarr[i].checked)
            bhk = Number(bhkarr[i].value);
    }

    for (i = 0; i < bathroomarr.length; i++) {
        if (bathroomarr[i].checked)
            bathroom = Number(bathroomarr[i].value);
    }


    let cost =
        location == "Location 1" ? ((a * bhk * 934) + (bathroom * 450)) : ((a * bhk * 786) + (bathroom * 435));

    result.innerHTML = `<div>Total Cost: <span>${cost}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);