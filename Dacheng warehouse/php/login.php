<?php
/**
 * Created by PhpStorm.
 * User: 81805
 * Date: 2018/4/12
 * Time: 15:45
 */
mysql_connect('127.0.0.1','root','root');//连接数据库ip,用户名，密码
mysql_query('set names utf8');//编码规则
mysql_select_db('db_warehouse');//连接数据库的名字
$id=$_GET['id'];
$pwd=$_GET['pwd'];
$sql='SELECT * FROM userinfo WHERE tel="'.$id.'" and pwd="'.$pwd.'"';
$res=mysql_query($sql);//执行sql语句
$arr=mysql_fetch_array($res);
if(!$arr)
{
    echo "no";
}
else
{
    echo $arr['name'].",".$arr['tel'];
}
