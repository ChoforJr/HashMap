import { linkedList } from "./linkedListForHashSet.mjs";
const hashSet = () => {
  const loadFactor = 0.75;
  const buckets = [];
  buckets.length = 16;

  //takes a key and produces a hash code with it
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * (hashCode + key.charCodeAt(i))) % buckets.length;
    }

    return hashCode;
  }

  //This clones the buckets content into a new variable, increase the buckets length by 2,
  //and then repopulate the bucket with the newly hash keys
  function growthFunctionality() {
    const bucketsKeyClone = keys();

    const bucketsNewLength = 2 * buckets.length;
    buckets.length = 0;
    buckets.length = bucketsNewLength;

    for (let i = 0; i < bucketsKeyClone.length; i++) {
      set(bucketsKeyClone[i]);
    }
  }

  //takes in a key, hash it and then add it to the hashMap If a key already exists then do nothing
  //We all so growth the bucket size and reaarange the contents using the the growthFunctionality function
  //If the length of the bucket exceeds the growthcheck, we grow the bucket by 2
  function set(key) {
    const growthChecker = loadFactor * buckets.length;

    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (buckets[index] == undefined) {
      buckets[index] = linkedList();
      buckets[index].append(key);
    } else {
      buckets[index].append(key);
    }
    if (length() > growthChecker) {
      growthFunctionality();
    }
  }

  //takes a key as an argument and returns true or false based on whether or not the key is in the hash map
  function has(key) {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (buckets[index] == undefined) {
      return false;
    } else if (buckets[index].containsKey(key)) {
      return true;
    } else {
      return false;
    }
  }

  //takes a key as an argument. If the given key is in the hash map,
  //it should remove the entry with that key and return true.
  //If the key isn’t in the hash map, it should return false
  function remove(key) {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (buckets[index] == undefined) {
      return false;
    } else if (buckets[index].containsKey(key)) {
      buckets[index].removeUsingKey(key);

      if (buckets[index].printSize() === 0) {
        buckets[index] = undefined;
      }

      return true;
    } else {
      return false;
    }
  }

  //returns the number of stored keys in the hash map
  function length() {
    let content = keys();
    return content.length;
  }

  //removes all entries in the hash map
  function clear() {
    buckets.length = 0;
    buckets.length = 16;
  }

  //returns an array containing all the keys inside the hash map
  function keys() {
    let txtKeys = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] == undefined) {
        continue;
      } else {
        let newKey = buckets[i].returnAllKey();
        newKey.forEach((item) => {
          txtKeys.push(item);
        });
      }
    }
    return txtKeys;
  }

  //returns an array that contains each key from each index.
  //Example: [[firstKey], [secondKey]]
  function entries() {
    let txtEntries = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] == undefined) {
        continue;
      } else {
        let newEntry = buckets[i].returnAllEntries();
        txtEntries.push(newEntry);
      }
    }
    return txtEntries;
  }

  return {
    set,
    has,
    remove,
    length,
    clear,
    keys,
    entries,
  };
};
const test = hashSet();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("moon", "silver");

console.log(test.has("carrot"));
console.log(test.length());
console.log(test.keys());
console.log(test.entries());

test.set("moon", "bronze");

console.log(test.has("moon"));
console.log(test.length());
console.log(test.keys());
console.log(test.entries());

console.log(test.remove("hat"));
console.log(test.length());
console.log(test.keys());
console.log(test.entries());
