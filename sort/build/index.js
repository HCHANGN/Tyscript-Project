"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactorsCollection_1 = require("./CharactorsCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactorsCollection = new CharactorsCollection_1.CharactorsCollection('dasdASCCXZsdasdw');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
numbersCollection.sort();
charactorsCollection.sort();
console.log(numbersCollection);
console.log(charactorsCollection);
linkedList.sort();
linkedList.print();
