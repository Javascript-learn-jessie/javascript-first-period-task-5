// Write your cade below:
function main() {};
function generateNumber(){
    let initNum = [];
    let book = [];
    for(let i=0;i<=10;i++){
        book.push(0);
    }
    for(let i=0;i<4;i++ ){
        let temp = Math.ceil(Math.random()*10);
        while(temp==10){
        }
        while(book[temp]){
            temp = Math.ceil(Math.random()*10);
            if(temp==10){
                temp = Math.ceil(Math.random()*10);
            }
        }
        book[temp]=1;
        initNum.push(temp);
    }
    console.log(initNum);
    return initNum;
}
//generateNumber();
module.exports = function judgeNum(initNum,answerNum){
    let ANum=0,BNum=0;
    let result;
    for(let i=0;i<4;i++){
        if(initNum.indexOf(answerNum[i])!=-1){
            BNum++;
        }
        if(answerNum[i]==initNum[i]){
            ANum++;
            BNum--;
        }
    }
    result = ANum+'A'+BNum+'B';
    return result;
}
