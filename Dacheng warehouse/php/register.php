<?php
/**
 * Created by PhpStorm.
 * User: 81805
 * Date: 2018/4/12
 * Time: 21:52
 */
$name=$_GET['name'];
$pwd=$_GET['pwd'];
$tel=$_GET['tel'];
$QQ=$_GET['QQ'];
$email=$_GET['email'];
mysql_connect('127.0.0.1','root','root');//链接数据库
mysql_query('set names utf8');//设置编码格式
mysql_select_db('db_warehouse');//数据已库名
$sql1='SELECT * FROM userinfo WHERE tel="'.$tel.'"';
$res=mysql_query($sql1);
$arr=mysql_fetch_array($res);
if(!$arr)
{
    $sql='INSERT INTO userinfo (name,email,pwd,qq,tel) VALUES ("'.$name.'","'.$email.'","'.$pwd.'","'.$QQ.'","'.$tel.'")';
    mysql_query($sql);//ִ执行sql语句
    if(mysql_affected_rows()>0){
        echo '成功';
    }
    else{
        echo '失败';
    }
}
else
{
    echo "成功";
}
