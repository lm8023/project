var menuA=document.querySelectorAll(".menu li");
//获取产品下标，并存放在localStorage
for(var i=1;i<menuA.length;i++)
{
    menuA[i].onclick=function (z) {
        return function () {
            if(window.localStorage.Id)
            window.localStorage.Id=z;
            else
                window.localStorage.Id=z;
            console.log(window.localStorage.Id)
        }
    }(i)
}
//判断用户是否登录
var userName=document.querySelector(".fl");
if(window.sessionStorage.userID==""||window.sessionStorage.userID==undefined)
{
    userName.children[0].innerHTML="欢迎光临本店"+"<a href='login.html' target='_parent'>请登录</a>";
}
else
{
    userName.children[0].innerHTML="欢迎光临本店,"+window.sessionStorage.userID;
}
console.log(userName.children[0].innerHTML);
//购物车数量
var car_count=document.querySelector(".car_count");
if(window.localStorage.carID!="")
car_count.innerHTML=window.localStorage.carID.split(",").length;