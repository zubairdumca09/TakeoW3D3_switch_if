let x, y = "value3";
switch (y) {
    case "value1":
        x = 10;
    case "value2":
        x = 20;
        break;
    case "value3":
        x = 30;
        break;
    case "value4":
        x = 40;
        break;
    default:
        x = 100
        break;
}
console.log(x)