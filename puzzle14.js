function passWord() {
var testV = 1;
var pass1 = prompt('캐비넷을 여는 비밀번호는: ','');
while (testV < 2) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "slow") {
alert('너에게 비밀을 알려줄게.');
window.open('text2.html', '_top');
break;
} 
testV+=1;
var pass1 = 
alert('캐비넷 문은 꿈쩍도 하지 않는다. 이게 아닌 것 같다.');
}
if (pass1.toLowerCase()!="" & testV ==2) 
history.go(-1);
return " ";
} 
