var m =[];
var m1 = [99, 33, 'Hello'];
m1[3] = 444;
m1[4] = 444444;
console.log (m1);

function masOut(){
	var p = document.getElementById('out');
	var str='';
	for (var i=0; i<m1.length; i++){
		str += i +' --- ' + m1[i]+'<br>';
	}
	p.innerHTML = str;
}
masOut();

document.getElementById('p3').onclick=change;
function change(){
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	m1[inp1]=inp2;
// Если ввести masOut(); за пределами этой функции, то вывод результата будет не видно
	masOut();
}
// Эта запись ничего не покажет, так делать нельзя
// masOut();
document.getElementById('p1').onclick=p1;
function p1(){
	var i1 = document.getElementById('i1').value;
	m1.push(i1);
	masOut();
}

document.getElementById('p2').onclick=p2;
function p2(){
	m1.pop();
	masOut();
}

document.getElementById('p4').onclick=p4;
function p4(){
	m1.shift();
	masOut();
}

document.getElementById('p5').onclick=p5;
function p5(){
	var i2 = document.getElementById('i1').value;
	m1.unshift(i2);	
	masOut();
}
