<?php
/**
 * Created by PhpStorm.
 * User: 81805
 * Date: 2018/4/13
 * Time: 0:04
 */
mysql_connect('127.0.0.1','root','root');//�������ݿ�ip,�û���������
mysql_query('set names utf8');//�������
mysql_select_db('db_warehouse');//�������ݿ������
$id=$_GET['id'];
$sql='SELECT * FROM goodsinfo WHERE id='.$id.'';//дsql
$res=mysql_query($sql);//ִ��sql���
$rows = array();//��������
while($row=mysql_fetch_assoc($res)){//����ÿһ�����ݸ�ֵ$row����
    $rows[]=$row;//��ÿһ�����ݷ�������
}
$data=json_encode($rows);//����ת���ɶ���
echo $data;