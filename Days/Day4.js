module.exports = function Day4() {
    const util = require('util');
    const fs = require('fs');
    var input = fs.readFileSync('./Data/Day4Data.txt', 'utf8').trim();
    //var input = fs.readFileSync('./Data/Day4DataSample.txt', 'utf8').trim();
    var inputLines = input.split('\r\n');

    this.part1 = function () {
        var sidSum = 0;
        inputLines.forEach(function (element) {
            //working data
            var lastSplitter = element.lastIndexOf('-');
            var letters = element.substr(0, lastSplitter);
            var checkData = element.substr(lastSplitter + 1, element.length - (lastSplitter + 1));
            letters = letters.replace(/-/g, '');
            var uniqueLetters = letters.replace(/(.)(?=.*\1)/g, "");
            var ckeck = checkData.substring(checkData.indexOf('[') + 1, checkData.indexOf("]"));
            var id = parseInt(checkData.substr(0, checkData.indexOf('[')));
            var repeations = [];
            //statistics of letter repeation
            uniqueLetters.split('').forEach(function (letter) {
                var count = letters.split('').reduce(function (n, val) { return n += ((val === letter) ? 1 : 0); }, 0); 
                repeations.push({ l: letter, lcount: count});
            });
            //sort letters by repeation and alphabetically
            repeations.sort(function (a, b) {
                var diff = b.lcount - a.lcount;
                if (diff == 0) {
                    if (a.l < b.l) return -1;
                    if (a.l > b.l) return 1;
                    return 0;
                } else {
                    return diff;
                }
            });
            var realCheck = '';
            //here is our real check
            for (var i = 0; i < 5; i++) {
                realCheck += repeations[i].l;
            }

            if (realCheck == ckeck) {
                sidSum += id;
            }

            //util.debug("%s - %s, %s = [%s = %s], %s", element, letters, uniqueLetters, ckeck, realCheck, id);
            //util.log(repeations);
        });

        console.log(util.format('Day 4 part 1 answer: %s', sidSum));
    }

    this.part2 = function () {
        var answer = 0;
        inputLines.forEach(function (element) {
            var lastSplitter = element.lastIndexOf('-');
            var letters = element.substr(0, lastSplitter).replace(/-/g, ' ');
            var id = parseInt(element.substr(lastSplitter + 1, element.indexOf('[') - lastSplitter + 1));
            var charIdMod = id%26;
            
            var result = '';
            letters.split('').forEach(function (letter) {
                if (letter != ' ') {
                    var newCode = letter.charCodeAt(0) + charIdMod;
                    if (newCode > 122) {
                        newCode = newCode - 122 + 96;
                    }
                    result += String.fromCharCode(newCode);
                } else {
                    result += letter;
                }
            });
            if (result.indexOf('pole') > -1) {
                answer = id;
            }
            //uncomment for fun decrypted data
            //console.log(util.format('%s - %s', element, result ));
        });

        console.log(util.format('Day 4 part 2 answer: %s', answer));
    }
}