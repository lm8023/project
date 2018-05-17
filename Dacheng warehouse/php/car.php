<?php
/**
 * Created by PhpStorm.
 * User: 81805
 * Date: 2018/4/13
 * Time: 3:35
 */
mysql_connect('127.0.0.1','root','root');//连接数据库ip,用户名，密码
mysql_query('set names utf8');//编码规则
mysql_select_db('db_warehouse');//连接数据库的名字
$name=$_GET['name'];
echo $name;