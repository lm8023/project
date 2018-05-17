/**
 * Created by 81805 on 2018/4/7.
 */
var commodity=document.querySelector(".commodity")
var title=["1F 网球拍专区","2F 羽毛球拍专区","3F 球拍包专区","热门商品推荐"];
/*
var imgs=["tennis.jpg","tennis1.jpg","tennis2.jpg","tennis3.jpg","tennis4.png","tennis5.jpg","tennis6.jpg","tennis7.jpg"];
var info=["威尔逊wilson ProStaff 6.1网球拍 埃德伯格用拍25周年","威尔胜 WILSON BLX Surge100 底线 全碳素网球拍","威尔胜wilson网球拍正品Six.One Lite BLX 网球拍 费德勒","威尔胜Wilson 网球拍 BURN FST 95 99 德尔波特罗全碳素拍","威尔胜wilson网球拍 six two 全碳素纤维男女初学拍","威尔胜wilson网球拍BLX Juice Pro 96 网球拍 德尔波特罗","维尔胜 Wilson juice 23寸儿童网球拍 青少年网球拍","威尔胜 Wilson ProStaff ps97 95s 费德勒 网球拍"];
var price=["1290","899","899","1400","899","990","239","1559"];
var imgs1=["Badminton1.jpg","Badminton2.jpg","Badminton3.jpg","Badminton4.jpg","Badminton5.jpg","Badminton6.jpg","Badminton7.jpg","Badminton8.jpg"];
var imgs2=["bag1.jpg","bag2.jpg","bag3.jpg","bag4.jpg","bag5.jpg","bag6.jpg","bag7.jpg","bag8.jpg"];
var imgs3=["Selling1.jpg","Selling2.jpg","Selling3.jpg","Selling4.jpg","Selling5.jpg","Selling6.jpg","Selling7.jpg","Selling8.jpg","Selling9.jpg","Selling10.jpg","Selling11.jpg","Selling12.jpg","Selling13.jpg","Selling14.jpg","Selling15.jpg"];*/
var str="";
var xmlhttp;//全局的对象的变量
if(window.XMLHttpRequest) {//判断浏览器的兼容性
    xmlhttp=new XMLHttpRequest();//new 对象，针对高版本
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
}
xmlhttp.open('GET','../php/goods.php',true);//请求的方式 请求的URL  异步(true)或者同步(false)
xmlhttp.send();//向服务器发送请求
xmlhttp.onreadystatechange=function () {//响应事件
    if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
        var json=JSON.parse(xmlhttp.responseText)//响应数据
        var str="";
        //拼接数据
        for(var i=0;i<title.length;i++) {
            str = "<h1>" + title[i] + "</h1>";
            var n=0;
            str += "<section class='commodity_content'>";
                for(var j=0;j<json.length;j++)
                {
                    if(json[j].classID==i+1)
                    {
                        str += "<a href='goodsInfo.html' onclick='GetID(this)'>" + "<section class='commodity_con'>" +
                            "<section>" + '<img src="../image/' + json[j].img.split(",")[0] + '">' + "</section>" +
                            "<section class='name'>" + json[j].name + "</section>" +
                            "<section class='price'><span>" + "&yen;" + json[j].shop_price + "" + "元" + "</span><span class='id'>"+json[j].id+"</span></section>" +
                            "</section>" + "</a>";
                        n++;
                        if(n>=8)
                        {
                            break;
                        }
                    }
                }
            str += "</secion>";
            commodity.innerHTML += str;
            }
    }
}
//获取商品ID并存放在localStoragezg中
function GetID(th){
    var id=th.children[0].children[2].children[1].innerHTML;
    if(window.localStorage.goodsID)
        window.localStorage.goodsID=id;
    else
        window.localStorage.goodsID=id;
    console.log( window.localStorage.goodsID);
}
