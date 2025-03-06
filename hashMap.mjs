import { linkedList } from "./linkedListForHashMap.mjs";
const hashMap = () => {
  const loadFactor = 0.75;
  const buckets = [];
  buckets.length = 16;
  let content = 0;

  const itemsInBucket = 0;

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * (hashCode + key.charCodeAt(i))) % buckets.length;
    }

    return hashCode;
  }

  function getChangeLevel() {
    const levelfactor = loadFactor * buckets.length;
    return console.log(levelfactor);
  }

  function set(key, value) {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (buckets[index] == undefined) {
      buckets[index] = linkedList();
      buckets[index].append(key, value);
      content++;
    } else {
      buckets[index].append(key, value);
    }
  }

  function get(key) {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (buckets[index] == undefined) {
      return console.log(null);
    } else if (buckets[index].containsKey(key)) {
      buckets[index].returnValue(key);
    } else {
      return console.log(null);
    }
  }

  function printBucket(pos) {
    buckets[pos].toString();
    // buckets[pos].printHead();
  }

  function print(pos) {
    console.log(buckets);
  }

  return {
    set,
    get,
    printBucket,
    print,
  };
};

const test = hashMap();
test.set("Rama", 2004);
test.printBucket(13);
test.get("there");
// test.print();
