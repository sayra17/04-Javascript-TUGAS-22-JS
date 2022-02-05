function pegulangan() {
    var kata = "Saya ingin belajar bersama";
    var kata2 = kata.split(" ");
    kata2.forEach(function (item, index) {
        console.log("Item : " + item + " index ke " + index);
    });
}

pegulangan()