String.prototype.countLetter = function (letterToFind) {
    var count = 0;
    count += this.split('').reduce(function (n, val) { return n += ((val === letterToFind) ? 1 : 0); }, 0);
    return count;
};