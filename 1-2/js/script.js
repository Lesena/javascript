var base = prompt('Введите число', 100);
var exponent = prompt('Введите степень', 100);

function pow(base, exponent) {
var res=base;
 for(var i=1;i<exponent; i++){
     res*=base;
 }
 
  return res;
}

alert(pow(base,exponent));
if (exponent <= 1) {
 
  console.log('Степень не поддерживается, введите целую степень, большую 1 ',exponent);
} else {
 
  console.log('==',pow(base,exponent));
}


var c=[];
var N=prompt('Введите число элементов массива:',1); //вводим число элементов массива
for(var i=0;i < N;i++)
    {
        C[i] = prompt('Введите C['+i+']',0); //Заполняем массив
    }
 for(i=0;i<N;i++){
        if()
        console.log('C['+i+']='+C[i]+'</br>'); //Выводим
    }
var name_user = prompt('Введите имя пользователя', 100);
 
function find(c, name_user){
  for( var i=0;i<c.length;i++){
     if(c[i]===name_user)
	 alert(c[i]+'вы успешно вошли')
	 return i;
  }
  alert('введенное имя пользователя не существует в массиве');
  return -1;
}