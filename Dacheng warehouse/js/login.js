/**
 * Created by 81805 on 2018/4/12.
 */
var names=document.querySelector(".name");
var name_reg=document.querySelector(".name_reg");
var pwd=document.querySelector(".pwd");
var pwd_reg=document.querySelector(".pwd_reg");
var sub=document.querySelector(".sub");
names.onblur=function () {
    if(names.value=="")
    {
        name_reg.innerHTML="账号不能为空";
    }
    else if(names.value.length<11||names.value.length>=12)
    {
        name_reg.innerHTML="账号长度不对";
    }
    else
    {
        name_reg.innerHTML="";
    }
}
pwd.onblur=function () {
    if(pwd.value=="")
    {
        pwd_reg.innerHTML="密码不能为空";
    }
    else
    {
        pwd_reg.innerHTML="";
    }
}
sub.onclick=function () {
    var xmlhttp;//全局的对象的变量
    if(window.XMLHttpRequest) {//判断浏览器的兼容性
        xmlhttp=new XMLHttpRequest();//new 对象，针对高版本
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
    }
    var ids=names.value;
    var pwds=pwd.value;
    xmlhttp.open('GET','../php/login.php?id='+ids+'&pwd='+pwds,true);//请求的方式 请求的URL  异步(true)或者同步(false)
    xmlhttp.send();//向服务器发送请求
    xmlhttp.onreadystatechange=function () {//响应事件
        if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
            var json=xmlhttp.responseText//响应数据
            if(json!="no")
            {
                if(window.sessionStorage.userID&&window.sessionStorage.userName)
                {
                    window.sessionStorage.userID=json.split(",")[0];
                    window.sessionStorage.userName=json.split(",")[1];
                }
                else
                {
                    window.sessionStorage.userID=json.split(",")[0];
                    window.sessionStorage.userName=json.split(",")[1];
                }

                window.location.href="index.html";
                name_reg.innerHTML="";
                pwd_reg.innerHTML="";
            }
            else
            {
                pwd_reg.style.color="red";
                name_reg.style.color="red";
                pwd_reg.innerHTML="账号不存在或密码错误不能登录！";
                name_reg.innerHTML="账号不存在或密码错误不能登录";
            }
        }
    }
}