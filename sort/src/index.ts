import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactorsCollection } from './CharactorsCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

const charactorsCollection = new CharactorsCollection('dasdASCCXZsdasdw');

const linkedList = new LinkedList();

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
