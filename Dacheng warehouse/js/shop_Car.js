/**
 * Created by 81805 on 2018/4/13.
 */
var xmlhttp;
if(window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
}
xmlhttp.open('GET','../php/shop_Car.php?id='+window.localStorage.carID,true);
xmlhttp.send();
xmlhttp.onreadystatechange=function () {
    if(xmlhttp.readyState==4 &&xmlhttp.status==200){
        var json=JSON.parse(xmlhttp.responseText);
        var str="";
        console.log(json);
        for(var i=0;i<json.length;i++) {
                var src=json[i].img.split(",");
                str +="<tr>"+ "<td><input type='checkbox' name='check'></td>"+
                    "<td><img src='../image/"+src[0]+"'></td>" +
                    "<td>"+json[i].name+"</td>" +
                    "<td>&yen;"+json[i].shop_price+"</td>" +
                    "<td><input type='text' value='"+json[i].stock+"' onblur='sum_price(this)'></td>" +
                    "<td>&yen;"+json[i].shop_price+"</td>" +
                    "<td><span class='id'>"+json[i].id+"</span><input type='button' value='删除' onclick='getID(this)'></td>"+
                    "</tr>";
        }
        document.querySelector('.goodsInfo').innerHTML+=str;
    }
}
//总价
function sum_price(th){
    var count=th.value;
    var price=th.parentNode.parentNode.cells[3].innerHTML;
    var sum_price=th.parentNode.parentNode.cells[5].innerHTML;
    var prices=price.substr(1,price.length);
    var sum_prices=sum_price.substr(1,sum_price.length);
    if(count<=0||count=="")
    {
        th.value=1;
    }
    else
    th.parentNode.parentNode.cells[5].innerHTML='&yen;'+parseInt(count)*parseInt(prices);
}
//全选
function checkALl(){
    var check=document.getElementsByName("check");
    console.log(check[0].checked)
    for(var k=0;k<check.length;k++)
    {
        if(check[k].checked==false)
            check[k].checked=true;
        else
            check[k].checked=false;
    }
}
//删除购物车商品
function getID(th){
    var info=confirm("确认将此商品移出购物车？");
    if(info)
    {
        var id=th.parentNode.childNodes[0].innerHTML;
        var carID=window.localStorage.carID.split(",");
        carID.splice(carID.indexOf(id),1);
        carID=carID.join(",");
        window.localStorage.carID=carID;
        window.location.href="shop_Car.html";
    }

    /*
    str="123456";
    var tr1=str.split("")
     tr1 .splice(1,1);
    console.log(tr1.join(","))
   */
}