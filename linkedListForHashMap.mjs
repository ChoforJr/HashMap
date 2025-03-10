const node = (key = null, value = null, nextNode = null) => {
  return {
    key,
    value,
    nextNode,
  };
};

export const linkedList = () => {
  let head = null;
  let size = 0;

  //adds a new node containing value to the end of the list
  function append(key, value) {
    if (head == null) {
      return prepend(key, value);
    }
    if (containsKey(key)) {
      return changeValue(key, value);
    } else {
      let current = head;
      let previous;
      while (current) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = node(key, value);
      size++;
    }
  }

  //adds a new node containing value to the start of the list
  function prepend(key, value) {
    head = node(key, value, head);
    size++;
  }

  //returns the total number of nodes in the list
  function printSize() {
    return size;
  }

  //returns true if the passed in value is in the list and otherwise returns false
  function containsValue(value) {
    let current = head;
    for (let i = 1; i <= size; i++) {
      if (value == current.value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  //returns true if the passed in key is in the list and otherwise returns false
  function containsKey(key) {
    let current = head;
    for (let i = 1; i <= size; i++) {
      if (key == current.key) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  //return value using its key
  function returnValue(key) {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (key == current.key) {
        return current.value;
      }
      current = current.nextNode;
    }
  }

  //change the value using the key
  function changeValue(key, value) {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (key == current.key) {
        current.value = value;
      }
      current = current.nextNode;
    }
  }

  //that removes the node using the key
  function removeUsingKey(key) {
    let current = head;
    let previous;
    if (key == current.key) {
      head = current.nextNode;
      size--;
      return;
    }
    for (let i = 0; i <= size; i++) {
      if (key == current.key) {
        previous.nextNode = current.nextNode;
        size--;
        return;
      }
      previous = current;
      current = current.nextNode;
    }
  }

  //return all Keys
  function returnAllKey() {
    let current = head;
    let txtKeys = [];
    while (current) {
      txtKeys.push(current.key);
      current = current.nextNode;
    }
    return txtKeys;
  }

  //return all Values
  function returnAllValues() {
    let current = head;
    let txtValues = [];
    while (current) {
      txtValues.push(current.value);
      current = current.nextNode;
    }
    return txtValues;
  }

  //return all Entries [keys, Values]
  function returnAllEntries() {
    let current = head;
    let txtEntries = [];
    while (current) {
      let newEntry = [current.key, current.value];
      txtEntries.push(newEntry);
      current = current.nextNode;
    }
    return txtEntries;
  }

  return {
    append,
    prepend,
    printSize,
    containsValue,
    containsKey,
    returnValue,
    returnAllEntries,
    removeUsingKey,
    returnAllKey,
    returnAllValues,
  };
};
