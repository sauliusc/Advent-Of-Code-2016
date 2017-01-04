module.exports = function Day21() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day21Data.txt', 'utf8').trim();
    var startString = 'abcdefgh';
    var finalString = 'fbgdceah';
    //test for real data
    //var finalString = 'agcebfdh';
    //var input = fs.readFileSync('./Data/Day21DataSample.txt', 'utf8').trim();
    //var startString = 'abcde';
    //var finalString = 'decab';
    //var input = '';
    var inputLines = input.split('\r\n');

    function swapPosition(letters, x, y) {
        var xbackup = letters[x];
        letters[x] = letters[y];
        letters[y] = xbackup;
        return letters;
    }

    function swapLetters(letters, l1, l2) {
        var l1position = letters.indexOf(l1);
        var l2position = letters.indexOf(l2);
        letters[l1position] = l2;
        letters[l2position] = l1;
        return letters;
    }

    function moveRight(letters, size) {
        for (var i = 0; i < size; i++) {
            var slicedLetter = letters.splice(-1)[0];
            letters.unshift(slicedLetter);
        }
        return letters;
    }

    function moveLeft(letters, size) {
        for (var i = 0; i < size; i++) {
            var slicedLetter = letters.splice(0,1)[0];
            letters.push(slicedLetter);
        }
        return letters;
    }

    function getNewBasedIndex(letters, leter4move) {
        var index = letters.indexOf(leter4move);
        if (index >= 4) {
            index += 2;
        } else {
            index++;
        }
        return index;
    }

    function rotateBased(letters, leter4move) {
        return moveRight(letters, getNewBasedIndex(letters, leter4move));
    }

    function rotateBasedBack(letters, leter4move) {
        var index = letters.indexOf(leter4move);
        var backIndex = 1;
        if (index > 1) {
            backIndex = 2;
        }
        letters = moveLeft(letters, backIndex);
        while (index != ((getNewBasedIndex(letters, leter4move) + letters.indexOf(leter4move)) % letters.length)) {
            letters = moveLeft(letters, 1);
        }
        return letters;

    }

    function rotateByDirection(letters, direction, moveSize, reverse) {
        if ((direction == 'right' && !reverse) || (direction == 'left' && reverse)) {
            return moveRight(letters, moveSize);
        } else {
            return moveLeft(letters, moveSize);
        }
    }

    function reverse(letters, startPosition, endPosition) {
        var newArray = letters.slice(0, startPosition);
        newArray = newArray.concat(letters.slice(startPosition, endPosition+1).reverse());
        newArray = newArray.concat(letters.slice(endPosition+1, letters.length));
        return newArray;
    }

    function move(letters, x, y) {
        var letter = letters.splice(x, 1)[0];
        letters.splice(y, 0, letter);
        return letters;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var letters = startString.split('');
        inputLines.forEach(function (line) {
            //util.log(letters.join());
            //util.log(line);
            var commands = line.trim().split(' ');
            if (commands[0] === 'swap' && commands[1] === 'position') {
                letters = swapPosition(letters, commands[2], commands[5]);
            } else if (commands[0] === 'swap' && commands[1] === 'letter') {
                letters = swapLetters(letters, commands[2], commands[5]);
            } else if (commands[0] === 'rotate' && commands[1] === 'based') {
                letters = rotateBased(letters, commands[6]);
            } else if (commands[0] === 'rotate') {
                letters = rotateByDirection(letters, commands[1], commands[2], false);
            } else if (commands[0] === 'reverse') {
                letters = reverse(letters, parseInt(commands[2]), parseInt(commands[4]));
            } else if (commands[0] === 'move') {
                letters = move(letters, commands[2], commands[5]);
            }
        });
        stopwatch.stop();
        console.log(util.format('Day 21 part 1 answer: %s. Total duration: %s ms', letters.join(''), stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var letters = finalString.split('');
        inputLines.reverse().forEach(function (line) {
            //util.log(letters.join());
            //util.log(line);
            var commands = line.trim().split(' ');
            if (commands[0] === 'swap' && commands[1] === 'position') {
                letters = swapPosition(letters, commands[2], commands[5]);
            } else if (commands[0] === 'swap' && commands[1] === 'letter') {
                letters = swapLetters(letters, commands[2], commands[5]);
            } else if (commands[0] === 'rotate' && commands[1] === 'based') {
                letters = rotateBasedBack(letters, commands[6]);
            } else if (commands[0] === 'rotate') {
                letters = rotateByDirection(letters, commands[1], commands[2], true);
            } else if (commands[0] === 'reverse') {
                letters = reverse(letters, parseInt(commands[2]), parseInt(commands[4]));
            } else if (commands[0] === 'move') {
                letters = move(letters, commands[5], commands[2]);
            }
        });
        stopwatch.stop();
        console.log(util.format('Day 21 part 2 answer: %s. Total duration: %s ms', letters.join(''), stopwatch.elapsedMilliseconds));
    }
}