
function check() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    if (a == 0 && b == 0) {
        document.getElementById("result").innerHTML = "Phương Trình Có Vố Số Nghiệm !!!";
    } else if ( a== 0 && b!= 0) {
        document.getElementById("result").innerHTML = "Phương Trình  Vô Nghiệm !!"
    } else {
        document.getElementById("result").innerHTML = " Nghiệm Phương Trình là : " + (-b/a);
    }

}