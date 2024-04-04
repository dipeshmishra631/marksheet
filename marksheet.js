function def()
{
let m= Number(document.getElementById("m").value) 
let m1= Number(document.getElementById("m1").value) 
let m2= Number(document.getElementById("m2").value) 
let m3= Number(document.getElementById("m3").value) 
let m4= Number(document.getElementById("m4").value) 
let t =m+m1+m2+m3+m4 
let avg = t/5
document.getElementById("t2").value= t

if ((t>=175)&&(m>=35)&&(m1>=35)&&(m2>=35)&&(m3>=35)&&(m4>=35))
{
document.getElementById("result").innerHTML = "pass"
document.getElementById("result").style.color = "green"
if(t<=300)
{
document.getElementById("grade").innerHTML = "D"
}
else if(t<=350)
{
document.getElementById("grade").innerHTML = "C"
}
else if(t<=400)
{
document.getElementById("grade").innerHTML = "B"
}
else if(t<=450)
{
document.getElementById("grade").innerHTML = "A"
}
else if(t<=500)
{
document.getElementById("grade").innerHTML = "A+"
}
else
{
document.getElementById("grade").innerHTML = "F"

}
}

else
{
document.getElementById("result").innerHTML = "fail"
document.getElementById("result").style.backgroundColor = "red"
}
}
