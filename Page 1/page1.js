var scrollingPhoto=document.getElementsByClassName("car1")[0];
var a=0;

setInterval(function(){

    
if(a==0)
{
    scrollingPhoto.src="1.jpg";
    ++a;
}
else if(a==1)
{
    scrollingPhoto.src="2.jpg";
    ++a;
}
else if(a==2)
{
    scrollingPhoto.src="3.jpg";
    ++a;
}
else if(a==3)
{
    scrollingPhoto.src==="4.jpg"
    ++a;
}
else if(a==4)
{
    scrollingPhoto.src="5.jpg";
    ++a;
}

else if(a==5)
{
    scrollingPhoto.src="6.jpg";
    a=0;
}

},3000);
// ====================================================================================================

var addToCart=document.querySelectorAll(".add");
var numOfProduct=0;
var num=document.getElementById("numInsideCart");
var cartNum=document.getElementsByClassName("remo")[0];

for(var i=0;i<addToCart.length;i++)
{
    addToCart[i].addEventListener('click',function(){
        numOfProduct++;

        console.log(numOfProduct);
        num.textContent=numOfProduct;
    });
}

cartNum.addEventListener("click",function(){
    if( numOfProduct>0){
        let a=numOfProduct--;
        num.textContent=numOfProduct;
    } 
})


// =====================================================================================================

var car=document.getElementsByClassName("cars")[0];
var products=document.getElementsByClassName("products")[0];


products.style.display='none';
car.style.display='none';

function cars(){
    products.style.display='none';
    car.style.display='block';
    
}


function product(){
    
    car.style.display='none';
    products.style.display='block';
}

var resetCounter=document.getElementById("reset");

resetCounter.addEventListener('click',function(){
    numOfProduct=0;
    num.textContent=numOfProduct;

    car.style.display='none';
    products.style.display='none';
});







// function clear(){
    
//         car.style.display='none';
    
    
//         products.style.display='none';
    
// }





















