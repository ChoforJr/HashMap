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

  //returns the node at the given index
  function at(index) {
    let current = head;
    let previous;
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        console.log(current.key, current.value);
        return;
      }
      previous = current;
      current = current.nextNode;
    }
    return console.log(null);
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
  function contains(value) {
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

  //returns the index of the node containing value, or null if not found
  function find(value) {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (value == current.value) {
        return console.log(i);
      }
      current = current.nextNode;
    }
    return console.log(null);
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

  //that inserts a new node with the provided value at the given index
  function insertAt(value, index) {
    if (index < 0 || index >= size) return console.log("out of range");
    let current = head;
    let previous;
    let newNode = node(value);
    if (index == 0) {
      head = node(value, head);
      size++;
      return;
    }
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        previous.nextNode = newNode;
        newNode.nextNode = current;
        size++;
        return;
      }
      previous = current;
      current = current.nextNode;
    }
  }

  //that removes the node at the given index
  function removeAt(index) {
    if (index < 0 || index >= size) return console.log("out of range");
    let current = head;
    let previous;
    if (index == 0) {
      head = current.nextNode;
      size--;
      return;
    }
    for (let i = 0; i <= index; i++) {
      if (i == index) {
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
    at,
    pop,
    contains,
    containsKey,
    find,
    returnValue,
    toString,
    insertAt,
    removeAt,
  };
};
