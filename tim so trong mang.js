let arr = [2,4,5,6,7,8,9,0]
document.getElementById("arr").innerHTML = "arr =["+arr+"]"

function check() {
    let check = false;
    let count = 0;
    let number = +document.getElementById("number").value
        document.getElementById("number").value = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            check = true;
            count = i;
            break;
        }
    }
    if (check) {
        document.getElementById("result").innerHTML = number + " Là số có trong mảng tại index " + count;
    } else {
        document.getElementById("result").innerHTML = number + " Là giá trị không có trong mảng !!!"
    }
}