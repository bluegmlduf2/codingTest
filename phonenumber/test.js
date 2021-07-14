//핸드폰번호 뒤에 4자리 남기고 *로 처리
var answer = '';

answer="*".repeat(phone_number.length-4)+phone_number.slice(-4)
