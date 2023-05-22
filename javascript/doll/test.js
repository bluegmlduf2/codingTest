const inputArray=[]
let times=0;

function solution(board, moves) {   
    for (let mIdx = 0; mIdx < moves.length; mIdx++) {
        var selNum=moves[mIdx]-1
        for (let bIdx = 0; bIdx < board.length; bIdx++) {
            var rVal=board[bIdx][selNum]//선택한 인형
            
            //선택한 인형이 존재할 경우 옮김
            if (rVal) {
                inputValue(rVal);
                delete board[bIdx][selNum];
                break;
            }
        }  
    }
    console.log(times*2)
}

function inputValue(rVal) {
    //inputArray의 첫배열이 있는 경우
    if(inputArray[0]){
        //inputArray의 첫배열이 넘겨받은 값과 동일 한 경우
        if(inputArray[0]==rVal){
            times++
            inputArray.shift()
        }else{
            inputArray.unshift(rVal)
        }
    }else{
    //inputArray의 첫배열이 비어있을경우
        inputArray.unshift(rVal)
    }
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])