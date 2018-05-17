/**
 * Created by 81805 on 2018/4/12.
 */
//��ȡ����
var names=document.querySelector(".name");
var pwd=document.querySelector(".pwd");
var copy_pwd=document.querySelector(".copy_pwd");
var QQ=document.querySelector(".QQ");
var email=document.querySelector(".email");
var tel=document.querySelector(".tel");
var sub=document.querySelector(".sub");
var name_reg=document.querySelector(".name_reg");
var pwd_reg=document.querySelector(".pwd_reg");
var copy_pwd_reg=document.querySelector(".copy_pwd_reg");
var QQ_reg=document.querySelector(".QQ_reg");
var email_reg=document.querySelector(".email_reg");
var tel_reg=document.querySelector(".tel_reg");
names.onblur=function(){
    if(names.value=="")
    name_reg.innerHTML="账号不能为空";
    else
        name_reg.innerHTML="";
};
pwd.onblur=function(){
    var pwd_regs=/\w/
    if(pwd.value=="")
        pwd_reg.innerHTML="密码不能为空";
    else if(!pwd_regs.test(pwd.value))
    pwd_reg.innerHTML="密码由字母数字组成";
    else
    pwd_reg.innerHTML="";
};
copy_pwd.onblur=function(){
    var pwd_regs=/\w/
    if(copy_pwd.value=="")
    copy_pwd_reg.innerHTML="密码不能为空";
    else if(copy_pwd.value!=pwd.value)
        copy_pwd_reg.innerHTML="两次密码不一致";
    else if(!pwd_regs.test(copy_pwd.value))
    copy_pwd_reg.innerHTML="密码由字母数字组成";
    else
    copy_pwd_reg.innerHTML="";
};
QQ.onblur=function(){
    var regs=/\d/;
    if(QQ.value!="")
    {
        console.log(regs.test(QQ.value));
        if(!regs.test(QQ.value))
            QQ_reg.innerHTML="qq号码不正确";
        else
            QQ_reg.innerHTML="";
    }

};
email.onblur=function(){
    var emails= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(email.value=="")
    email_reg.innerHTML="email不能为空";
    else if(!emails.test(email.value))
        email_reg.innerHTML="请输入正确的邮箱";
    else
        email_reg.innerHTML="";
};
tel.onblur=function(){
    var reg = /^1[3|5|8|7][0-9]\d{4,8}$/;
    if(tel.value=="")
    tel_reg.innerHTML="手机号码不能为空";
    else if(tel.value.length<11)
        tel_reg.innerHTML="手机号码长度不够";
    else if(!reg.test(tel.value))
        tel_reg.innerHTML="手机号码不正确";
    else
        tel_reg.innerHTML="";
}
sub.onclick=function(){
    if(names.value==""||pwd.value==""||copy_pwd.value==""||tel.value=="")
    {
        return false;
    }
    var xmlhttp;//全局的对象的变量
    if(window.XMLHttpRequest) {//判断浏览器的兼容性
        xmlhttp=new XMLHttpRequest();//new 对象，针对高版本
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
    }
    xmlhttp.open('GET','../php/register.php?name='+names.value+'&pwd='+pwd.value+'&tel='+tel.value+'&QQ='+QQ.value+'&email='+email.value,true);//请求的方式 请求的URL  异步(true)或者同步(false)
    xmlhttp.send();//向服务器发送请求
    xmlhttp.onreadystatechange=function () {//响应事件
        if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
            var json=xmlhttp.responseText//响应数据
            console.log(json)
            if(json=="成功")
                window.location.href="login.html";
            else
                tel_reg.style.color="red";
                tel_reg.innerHTML="该手机号码已被注册";
        }
    }
};