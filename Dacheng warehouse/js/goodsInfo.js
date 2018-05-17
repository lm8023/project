/**
 * Created by 81805 on 2018/4/12.
 */
var names=document.querySelector(".name");
var product_code=document.querySelector(".product_code");
var stock=document.querySelector(".stock");
var brand=document.querySelector(".brand");
var weight=document.querySelector(".weight");
var time=document.querySelector(".time");
var clicks_num=document.querySelector(".clicks_num");
var count=document.querySelector(".count");
var market_price=document.querySelector(".market_price");
var shop_price=document.querySelector(".shop_price");
var sum_price=document.querySelector(".sum_price");
var num=document.querySelector(".num");
var count=document.querySelector(".count");
var car=document.querySelector(".car");
var integral=document.querySelector(".integral");
var shop=document.querySelector(".shop");
var imgs=document.querySelector(".img");
var img_small=document.querySelector(".img_small");
var id=window.localStorage.goodsID;
var xmlhttp;
if(window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
}
xmlhttp.open('GET','../php/goodsInfo.php?id='+id,true);
xmlhttp.send();
xmlhttp.onreadystatechange=function () {
    if(xmlhttp.readyState==4 &&xmlhttp.status==200){
        var json=JSON.parse(xmlhttp.responseText)
        //绑定数据
        names.innerHTML=json[0].name;
        stock.innerHTML=json[0].stock;
        product_code.innerHTML=json[0].product_code;
        brand.innerHTML=json[0].brandID;
        weight.innerHTML=json[0].weight;
        count.innerHTML=json[0].count;
        integral.innerHTML=json[0].integral+"积分";
        time.innerHTML=json[0].time;
        clicks_num.innerHTML=json[0].clicks_num;
        market_price.innerHTML="<a>"+json[0].market_price+"</a>";
        shop_price.innerHTML="&yen;"+json[0].shop_price;
        sum_price.innerHTML="&yen;"+json[0].shop_price;
        var src=json[0].img.split(",");
        imgs.innerHTML="<img src='../image/"+src[0]+"'>";
        var str="";
        for(var i=0;i<src.length;i++)
        {
            str+="<li><img  src='../image/"+src[i]+"'></li>"
        }
        img_small.innerHTML=str;
        var lis=document.querySelectorAll(".img_small li");
        for(var j=0;j<lis.length;j++){
            lis[j].onmousemove=function(z){
                return function(){
                    imgs.innerHTML=lis[z].innerHTML;
                }
            }(j)
        }
        num.onblur=function(){
            if(num.value<=0||num.value=="")
                num.value=1;
            if(parseInt(num.value)<=parseInt(stock.innerHTML))
            {
                var shop_prices=parseInt((shop_price.innerHTML).substr(1,shop_price.innerHTML.length));
                var num_value=num.value;
                sum_price.innerHTML="&yen;"+shop_prices*num_value;
            }
            else{
                num.value=stock.innerHTML;
            }
        }
            shop.onclick=function(){
                alert("暂不支持此功能");
            }
        car.onclick= function () {
            var carID;
            if(window.localStorage.carID=="")
            {
                window.localStorage.carID=id;
                window.location.href='shop_Car.html';
            }
            else
            {
                carID=(window.localStorage.carID).split(",");
                for(var i=0;i<carID.length;i++)
                {
                    if(carID.indexOf(id)==-1)
                    {
                        window.localStorage.carID+=","+id;
                        window.location.href='shop_Car.html';
                        break;
                    }
                }
            }

        }
    }
}