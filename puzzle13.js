function passWord() {
var testV = 1;
var pass1 = prompt('편지의 내용은:','');
while (testV < 2) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "stay") {
alert('그러고보니 이 편지는 내가 받았던 편지이다...');
window.open('text9.html', '_self');
break;
} 
testV+=1;
var pass1 = 
alert('왠지 이게 아닌 것 같다.');
}
if (pass1.toLowerCase()!="" & testV ==2) 
history.go(-1);
return " ";
} 
