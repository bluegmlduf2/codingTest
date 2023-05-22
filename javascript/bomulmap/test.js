function solution(n, arr1, arr2) {
    var answer = [];

    for (let idx1 = 0; idx1 < n; idx1++) {
        var encMap="";
        var a=getBinary(arr1[idx1],n)
        var b=getBinary(arr2[idx1],n)

        for (let idx2 = 0; idx2 < n; idx2++) {
            if(a[idx2]==0&&b[idx2]==0){
                encMap+=" "
            }else{
                encMap+="#"
            }
        }
        answer.push(encMap)
    }
    return answer
}

//10진수를 2진수로 바꾼다
function getBinary(num,n){
    let binArr=Array.from(num.toString(2))//2진수로변경후분할된배열로반환
    let len=binArr.length
    for (let i = 0; i < n-len; i++) {
        binArr.unshift("0")
    }
    return binArr
}
solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28])