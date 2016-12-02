module.exports = function Day2() {
    /*var input = "ULL\n\
                RRDDD\n\
                LURDL\n\
                UUUUD";*/
    var input = "RRLLRLLRULLRUUUDRDLDDLLLDDDDDUUURRRRUUDLRULURRRDRUDRUUDDRUDLLLRLDDDUDRDDRRLLLLRLRLULUURDRURRUULDRRDUDURRUURURDLURULLDUDRDLUUUUDDURRLLLUDLDLRDRRRDULLDLDULLDRLDLDURDLRRULLDDLDRLLLUDDLLRDURULLDDDDDUURURLRLRRDUURUULRLLLULLRLULLUUDRRLLDURLDDDDULUUDLUDDDULRLDURDDRUUDRRUUURLLLULURUDRULDRDUDUDRRDDULRURLLRRLRRLLDLULURDRDRULDRDRURUDLLRRDUUULDDDUURDLULDLRLLURRURLLUDURDDRUDRDLLLLDLRLDLDDRDRRDUUULLUULRRDLURLDULLDLDUUUULLLDRURLRULLULRLULUURLLRDDRULDULRLDRRURLURUDLRRRLUDLDUULULLURLDDUDDLLUDRUDRLDUDURRRRLRUUURLUDDUDURDUDDDLLRLRDDURDRUUDUDRULURLRLDRULDRRLRLDDDRDDDRLDUDRLULDLUDLRLRRRLRDULDDLRRDDLDDULDLLDU\n\
    RULLUDDUDLULRRDLLDRUDLLLDURLLLURDURLRDRRDLRDRDLLURRULUULUDUDDLLRRULLURDRLDURDLDDUURLUURLDLDLRLDRLRUULDRLRLDRLRLUDULURDULLLDRUDULDURURRRUDURDUDLRDRRURULRRLRLRRRRRRDRUDLDRULDRUDLRDLRRUDULDLRLURRRLLDRULULRUDULRLULLRLULDRUDUULLRUULDULDUDDUUULLLDRDDRRDLURUUDRRLRRRDLRRLULLLLDLRUULDLLULURUURURDRURLLDUDRRURRURRUUDDRRDDRRRRUDULULRLUULRRDDRDDLLUDLDLULLRLDRLLUULDURLDRULDDUDRUUUURRLDDUDRUURUDLLDLDLURDLULDRLLLULLLUDLLDLD\n\
    RDLDULURDLULRRDLRLLLULRUULURULLLDLLDDRLLURUUUURDRLURLLRLRLLLULRDLURDURULULDDUDDUDRLRLDLULLURRRUULUDRDURRRUDDDLUDLDLRLRRLLLRUULLLLURRDDDRRRUURULRLDRRRLRLUDDRRULDDDRUUDDRLLDULRLUDUDLDLDDDUDDLLDDRDRDUDULDRRUDRDRRDRLUURDLRDDDULLDRRRRRUDRLURDUURRDDRLUDLURRRLRDDDLRRLUULRLURDUUURRDLDDULLLRURRRUDRLUDLLDDDDDUDDRDULLUUDDURRLULLUDULUUDRLDRRRLLURLRRLLDLLLLUDRUUUDDULLRDLLDUDUDUURRUUUDRUURDRDLLDLDDULLDDRRULDLDDUUURLDLULLLRRLLRDDULLDLDLDDLDLDULURRDURURDRDRRDLR\n\
    RDRLRRUUDRLDUDLLDLUDLUUDUDLRRUUDRDDDLDDLLLRRRUDULLRRRRRURRRLUDDDLRRRRUUULDURDRULLDLRURRUULUDRURRRRLRURLRDUUDUDUDRDDURRURUDLLLLLRURUULRUURLLURDRUURLUDDDRLDDURDLDUDRURDRLRRRRUURDDRRRRURDLUUDRLDRDUULURUDDULLURRDUDLUULLDURRURLUDUUDRDDDUUDDUUUULDLDUDDLUDUUDRURLLULRUUULLRRDDUDDLULDDUUUDLUDDLDDLLRUUDRULLRRDRLLDLLRRLULLRRDDRLRDUULLLUULLDLLUDUDDLRDULUDLDLUDDRRRRDUDLUULLULDLRRDLULRLRRRULRURRDRLULDDUDLDLDULLURLLRDLURRULURDLURLUDRDRRUUDRLLUDDRLRDDUURLRRDUDLDRURDUUUDRRLLRDLDLLDRRURLUDURUULDUDLDDDDRUULLDDRLRURRDURLURRLDDRRRRLRLRDRURUDDRDLDRURLULDDL\n\
    RULRDLDDLRURDDDDDDRURLLLDDDUUULLRRDLDLURUURLUDLURRLUDUURDULDRUULDDURULDUULDDULLLUDLRULDRLDLRDDRRDLDDLLDRRUDDUDRDUULUDLLLDDLUUULDDUUULRRDULLURLULDLRLLLRLURLLRLRLDRDURRDUUDDURRULDDURRULRDRDUDLRRDRLDULULDRDURDURLLLDRDRLULRDUURRUUDURRDRLUDDRRLDLDLULRLLRRUUUDDULURRDRLLDLRRLDRLLLLRRDRRDDLDUULRLRRULURLDRLRDULUDRDLRUUDDDURUDLRLDRRUDURDDLLLUDLRLURDUDUDULRURRDLLURLLRRRUDLRRRLUDURDDDDRRDLDDLLDLRDRDDRLLLURDDRDRLRULDDRRLUURDURDLLDRRRDDURUDLDRRDRUUDDDLUDULRUUUUDRLDDD";
    
    var inputLines = input.split('\n');
    /*
    123
    456
    789
    */
    var keypad = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ];
    /*
        1
      2 3 4
    5 6 7 8 9
      A B C
        D
    */
    var keypad2 = [
        ['0','0','5','0','0'],
        ['0', 'A', '6', '2', '0'],
        ['D','B','7','3','1'],
        ['0', 'C', '8', '4', '0'],
        ['0', '0', '9', '0', '0'],
    ];
    this.part1 = function () {
        var resultCode = '';
        var x = 1;
        var y = 1;
        inputLines.forEach(function (line) {
            var instructionLine = line.trim();
            for (var i = 0; i < instructionLine.length; i++) {
                switch (instructionLine[i]) {
                    case 'U':
                        if (y < 2) {
                            y++;
                        } 
                        break;
                    case 'D':
                        if (y > 0) {
                            y--;
                        }
                        break;
                    case 'R':
                        if (x < 2) {
                            x++;
                        }
                        break;
                    case 'L':
                        if (x > 0) {
                            x--;
                        }
                        break;
                }
                //console.log('x' + x + 'y' + y + keypad[y][x]);
            }
            resultCode += keypad[x][y]
        });
        console.log('part1 answer:' + resultCode);
    };
    this.part2 = function () {
        var resultCode = '';
        var x = 0;
        var y = 2;
        //console.log('x ' + x + 'y ' + y + ' ' + keypad2[x][y]);
        inputLines.forEach(function (line) {
            var instructionLine = line.trim();
            for (var i = 0; i < instructionLine.length; i++) {
                var newx = x;
                var newy = y;
                switch (instructionLine[i]) {
                    case 'U':
                        if (y < 4) {
                            newy++;
                        }
                        break;
                    case 'D':
                        if (y > 0) {
                            newy--;
                        }
                        break;
                    case 'R':
                        if (x < 4) {
                            newx++;
                        }
                        break;
                    case 'L':
                        if (x > 0) {
                            newx--;
                        }
                        break;
                }
                if (keypad2[newx][newy] != '0') {
                    x = newx;
                    y = newy;
                }
                //console.log('x ' + x + 'y ' + y + ' ' + keypad2[x][y]);
            }
            resultCode += keypad2[x][y]
        });
        console.log('part2 answer:' + resultCode);

    };
}