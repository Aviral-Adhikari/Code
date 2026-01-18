function calculate() {

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);
    let m6 = Number(document.getElementById("m6").value);

    let total = m1 + m2 + m3 + m4 + m5 + m6;
    let average = total / 6;

    let grade = "";
    let result = document.getElementById("result");

    if (average >= 90) {
        grade = "A";
        result.innerHTML = "Congratulations! You have achieved grade A.";
        result.style.color = "green";
    }
    else if (average >= 80) {
        grade = "B";
        result.innerHTML = "Well done! You have achieved grade B.";

    }
    else if (average >= 70) {
        grade = "C";
        result.innerHTML = "Good job! You have achieved grade C.";
        
    }
    else if (average >= 60) {
        grade = "D";
        result.innerHTML = "You have achieved grade D.";
    }
    else {
        grade = "F";
        result.innerHTML = "Unfortunately, you have failed with grade F.";
        result.style.color = "red";
    }


}
