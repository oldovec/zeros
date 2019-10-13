module.exports = function zeros(expression) {
 var arrExpr = expression.split("*");
    var singleF = [];
    var doubleF = [];
    for (var i = 0; i < arrExpr.length; i++) {
        if (arrExpr[i].includes('!!')) {
            console.log(arrExpr[i].slice(0, arrExpr[i].length - 2));
            doubleF.push(arrExpr[i].slice(0, arrExpr[i].length - 2));
        } else {
            console.log(arrExpr[i].slice(0, arrExpr[i].length - 1));
            singleF.push(arrExpr[i].slice(0, arrExpr[i].length - 1));
        }
    }
    var totalSingleF = [];
    var totalDoubleF = [];
    var sum = 0;
    for (var j = 0; j < singleF.length; j++) {
        totalSingleF.push(Math.floor(singleF[j] / 5));
        totalSingleF.push(Math.floor(singleF[j] / 25));
    }
    for (var k = 0; k < doubleF.length; k++) {
        if (doubleF[k] % 2 == 0) {
            totalDoubleF.push(Math.floor(doubleF[k] / 10));
            totalDoubleF.push(Math.floor(doubleF[k] / 50));
        }
    }
    for (var n = 0; n < doubleF.length; n++) {
        if ((doubleF[n] % 2 != 0 && totalDoubleF.length > 0) || (doubleF[n] % 2 != 0 && totalSingleF.length > 0)) {
            totalDoubleF.push(Math.round(doubleF[n] / 10));
            if (doubleF[n] >= 25 && doubleF[n] < 75) {
                totalDoubleF.push(1);
            }
            if (doubleF[n] >= 75) {
                totalDoubleF.push(2);
            }
        }
    }
    if (totalSingleF.length > 0) {
        sum = totalSingleF.reduce(function (a, b) {
            return a + b;
        });
    }
    if (totalDoubleF.length > 0) {
        sum += totalDoubleF.reduce(function (a, b) {
            return a + b;
        });
    }
    return sum;
}
