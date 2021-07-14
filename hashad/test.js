var answer = true;
    
x%String(x).split("").reduce((acc,cur)=>{
    return Number(acc)+Number(cur)
})==0?answer=true:answer=false

console.log(answer);
    