<?php
/**
 * Created by PhpStorm.
 * User: 81805
 * Date: 2018/4/13
 * Time: 3:35
 */
mysql_connect('127.0.0.1','root','root');//�������ݿ�ip,�û���������
mysql_query('set names utf8');//�������
mysql_select_db('db_warehouse');//�������ݿ������
$name=$_GET['name'];
echo $name;