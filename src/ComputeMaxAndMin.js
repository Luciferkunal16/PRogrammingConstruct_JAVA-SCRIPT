function generateRandom(){
for ( i=0;i<5;i++){
    return Math.random()*100;
}
}
a=generateRandom();
b=generateRandom();
c=generateRandom();
d=generateRandom();
e=generateRandom();
if((a>b)&&(a>c)&&(a>d)&&(a>e)){
    console.log("A is max");
}
else if((b>a)&&(b>c)&&(b>e)&&(b>d)){
    console.log("B is max");
}
else if((c>a)&&(c>b)&&(c>d)&&(c>e)){
    console.log("C is max");

}
else if((d>a)&&(d>b)&&(d>c)&&( d>e)){
    console.log("D is max");
}
else{
    console.log("E is max");
}

