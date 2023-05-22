function solution(arr1, arr2) {
  
    var answer = [[]];
    
    arr1.forEach((e,i)=>{
        if(i!=0)answer[i]=[]//다음배열추가

        e.forEach((o,j)=>{
            if(j!=0){
                answer[i].push(arr1[i][j]+arr2[i][j])
            }else{
                answer[i][j]=arr1[i][j]+arr2[i][j]   
            }
        })
    })
    
    return answer;
}

solution([[1,2],[2,3]],[[3,4],[5,6]])