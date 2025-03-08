const node = (key = null, nextNode = null) => {
  return {
    key,
    nextNode,
  };
};

export const linkedList = () => {
  let head = null;
  let size = 0;

  //adds a new node containing value to the end of the list
  function append(key) {
    if (head == null) {
      return prepend(key);
    }
    if (containsKey(key)) {
      return null;
    } else {
      let current = head;
      let previous;
      while (current) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = node(key);
      size++;
    }
  }

  //adds a new node containing value to the start of the list
  function prepend(key) {
    head = node(key, head);
    size++;
  }

  //returns the total number of nodes in the list
  function printSize() {
    return size;
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

  //return all Entries [keys, Values]
  function returnAllEntries() {
    let current = head;
    let txtEntries = [];
    while (current) {
      let newEntry = [current.key];
      txtEntries.push(newEntry);
      current = current.nextNode;
    }
    return txtEntries;
  }

  return {
    append,
    prepend,
    printSize,
    containsKey,
    returnAllEntries,
    removeUsingKey,
    returnAllKey,
  };
};
