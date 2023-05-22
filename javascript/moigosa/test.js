function solution(answers) {
    var answer = [];
    
    let supo1=[1,2,3,4,5]
    let supo2=[2,1,2,3,2,4,2,5]
    let supo3=[3,3,1,1,2,2,4,4,5,5]
    
    let supoIdx1=0,supoIdx2=0,supoIdx3=0
    let supoAns1=0,supoAns2=0,supoAns3=0//각 정답갯수
    
    answers.forEach(e=>{
        if(supoIdx1==supo1.length-1){
            supoIdx1=0
        }
        if(supoIdx2==supo2.length-1){
            supoIdx2=0
        }
        if(supoIdx3==supo3.length-1){
            supoIdx3=0
        }

        if(e==supo1[supoIdx1]){
            supoAns1++
        }
        
        if(e==supo2[supoIdx2]){
            supoAns2++
        }
        
        if(e==supo3[supoIdx3]){
            supoAns3++
        }

        supoIdx1++
        supoIdx2++
        supoIdx3++
        
    })
    //정렬함수, 배열정렬
    answer=[[1,supoAns1],[2,supoAns2],[3,supoAns3]].sort((a,b)=>{
        return b[1]-a[1];//내림차순
    })

    //1등중복체크
    if (answer[0][1]!=answer[1][1]) {
        console.log(1)
        return [answer[0][0]]
    }else{
        console.log(2)
        return answer.map((e)=>{return e[0]});
    }
}


solution([1, 3, 2, 4, 2])