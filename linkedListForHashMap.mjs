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
      changeValue(key, value);
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
    console.log(size);
  }

  //returns the first node in the list
  function printHead() {
    console.log(head.key, head.value);
  }

  //returns the last node in the list
  function printTail() {
    let current = head;
    let previous;
    while (current) {
      previous = current;
      current = current.nextNode;
    }
    console.log(previous.key, previous.value);
  }

  //removes the last element from the list
  function pop() {
    let current = head;
    let previous;
    for (let i = 1; i < size; i++) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    size--;
  }

  //returns true if the passed in value is in the list and otherwise returns false
  function containsValue(value) {
    let current = head;
    for (let i = 1; i <= size; i++) {
      if (value == current.value) {
        return console.log(true);
      }
      current = current.nextNode;
    }
    return console.log(false);
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
        return console.log(current.value);
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

  //represents your LinkedList objects as strings, so you can print them out and preview
  //them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    let current = head;
    let txtString = "";
    while (current) {
      txtString += ` ( ${current.key}, ${current.value} ) -> `;
      if (current.nextNode == null) {
        txtString += " null";
      }
      current = current.nextNode;
    }
    console.log(txtString);
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

  return {
    append,
    prepend,
    printSize,
    printHead,
    printTail,
    pop,
    containsValue,
    containsKey,
    returnValue,
    toString,
    removeUsingKey,
  };
};
