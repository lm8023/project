<?php
/**
 * Created by PhpStorm.
 * User: 81805
 * Date: 2018/4/13
 * Time: 10:48
 */
$carID=$_GET['id'];
mysql_connect('127.0.0.1','root','root');//�������ݿ�ip,�û���������
mysql_query('set names utf8');//�������
mysql_select_db('db_warehouse');//�������ݿ������
$sql='SELECT * FROM goodsinfo WHERE id in('.$carID.')';//дsql

$res=mysql_query($sql);//ִ��sql���
$rows = array();//��������
while($row=mysql_fetch_assoc($res)){//����ÿһ�����ݸ�ֵ$row����
    $rows[]=$row;//��ÿһ�����ݷ�������
}
$data=json_encode($rows);//����ת���ɶ���
echo $data;