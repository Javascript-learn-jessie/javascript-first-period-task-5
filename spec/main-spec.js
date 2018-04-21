const judgeGame = require('../main/main');

describe('main()', () => {
    //var initAnswer = main.generateNumber();
    var initNum;
    var answerNum;
    it('locations all right',function(){
        initNum=[2,5,1,6];
        answerNum=[2,5,1,6];
        var expected = '4A0B';
        var actual = judgeGame(initNum,answerNum);
        expect(actual).toEqual(expected);
    });
    it('some locations are right',function(){
        initNum=[2,5,1,6];
        answerNum=[2,1,5,6];
        var expected = '2A2B';
        var actual = judgeGame(initNum,answerNum);
        expect(actual).toEqual(expected);
    });
    it('no matches',function(){
        initNum=[2,5,1,6];
        answerNum=[3,7,8,9];
        var expected = '0A0B';
        var actual = judgeGame(initNum,answerNum);
        expect(actual).toEqual(expected);
    });
});