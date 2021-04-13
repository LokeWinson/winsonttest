import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LoginDemo extends StatefulWidget {
  @override
  _LoginDemoState createState() => _LoginDemoState();
}

class _LoginDemoState extends State<LoginDemo> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.all(20.0),
      child: Table(
        border: TableBorder.all(color: Colors.black),
        children: [
          TableRow(children: [
            Text('Chan Saw Lin'),
            Text('0152131113'),
            Text('2020-06-30 16:10:05'),
          ]),
          TableRow(children: [
            Text('Lee Saw Loy'),
            Text('0158398109'),
            Text('2020-08-19 11:10:18'),
          ]),
          TableRow(children: [
            Text('Khaw Tong Lin'),
            Text('0158398109'),
            Text('2020-08-19 11:10:18'),
          ])
          TableRow(children: [
            Text('Lim Kok Lin'),
            Text('0168279101'),
            Text('2020-08-19 11:11:35'),
          ])
          TableRow(children: [
            Text('Low Jun Wei'),
            Text('0112731912'),
            Text('2020-08-15 13:00:05'),
          ])
          TableRow(children: [
            Text('Yong Weng Kai'),
            Text('0172332743'),
            Text('2020-07-31 18:10:11'),
          ])
          TableRow(children: [
            Text('Jayden Lee'),
            Text('0191236439'),
            Text('2020-08-22 08:10:38'),
          ])
          TableRow(children: [
            Text('Kong Kah Yan'),
            Text('0111931233'),
            Text('2020-07-11 12:00:00'),
          ])
          TableRow(children: [
            Text('Jasmine Lau'),
            Text('0162879190'),
            Text('2020-08-01 12:10:05'),
          ])
          TableRow(children: [
            Text('Chan Saw Lin'),
            Text('016783239'),
            Text('2020-08-23 11:59:05'),
          ])
        ],
      ),
    )