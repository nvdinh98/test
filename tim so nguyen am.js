function kiTuNguyenAm() {
    let arr = "i love you"
    let count = 0;
    let check = false
    for (let i = 0; i < arr.length; i++) {
        let str = arr.charAt(i);
        if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
            count++;
            check = true;
        }
    }
    if (check == false) {
        document.writeln("Không Có Kí Tự Nguyên Âm nào")
        return false;
    } else {
        document.writeln("Có Tất Cả : " + count + " Kí Tự Nguyên Âm");
    }
}
kiTuNguyenAm();