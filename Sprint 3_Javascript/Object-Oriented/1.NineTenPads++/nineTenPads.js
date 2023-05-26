// class notepad {
//     constructor() {
//       this.cursor = 0;
//       this.text = "";
//     }
  
//    addText(text) {
//     if (Array.isArray(text)) {
//       text.forEach((code) => {
//         if (typeof code !== "number" || code < 0 || code > 127) {
//           return null;
//         }
  
//         const symbol = String.fromCharCode(code);
//         const textBeforeCursor = this.text.slice(0, this.cursor);
//         const textAfterCursor = this.text.slice(this.cursor);
//         this.text = textBeforeCursor + symbol + textAfterCursor;
//         this.cursor++;
//       });
//     } else if (typeof text === "number" && text >= 0 && text <= 127) {
//       const symbol = String.fromCharCode(text);
//       const textBeforeCursor = this.text.slice(0, this.cursor);
//       const textAfterCursor = this.text.slice(this.cursor);
//       this.text = textBeforeCursor + symbol + textAfterCursor;
//       this.cursor++;
//     } else {
//       return null;
//     }
//   }
//   delete() {
//     if (this.text.length === 0 || arguments.length !== 0) {
//       return "Delete error";
//     }
  
//     if (this.cursor === 0) {
//       return "Delete error";
//     }
  
//     const textBeforeCursor = this.text.slice(0, this.cursor - 1);
//     const textAfterCursor = this.text.slice(this.cursor);
//     this.text = textBeforeCursor + textAfterCursor;
//     this.cursor--;
//     return "Deleted";
//   }
//     moveLeft() {
//       if (this.cursor > 0) {
//         this.cursor--;
//       }
//     }
  
//     moveRight() {
//       if (this.cursor < this.text.length) {
//         this.cursor++;
//       }
//     }
  
//     enter() {
//       return this.text;
//     }
//   }
// const myNotepad = new notepad();

// myNotepad.addText(72); // 'H'
// console.log(myNotepad.enter()); // 'H'

// myNotepad.addText(101); // 'e'
// console.log(myNotepad.enter()); // 'He'

// myNotepad.addText(108); // 'l'
// console.log(myNotepad.enter()); // 'Hel'

// myNotepad.addText(112); // 'p'
// console.log(myNotepad.enter()); // 'Help'

// myNotepad.addText(115); // 's'
// console.log(myNotepad.enter()); // 'Helps'

// myNotepad.moveLeft();
// console.log(myNotepad.enter()); // 'Help|s'

// console.log(myNotepad.delete()); // 'Deleted'
// console.log(myNotepad.enter()); // 'Hel|s'

// myNotepad.addText(108); // 'l'
// console.log(myNotepad.enter()); // 'Hell|s'

// myNotepad.addText(111); // 'o'
// console.log(myNotepad.enter()); // 'Hello|s'

// myNotepad.moveRight();
// console.log(myNotepad.enter()); // 'Hellos|'

// console.log(myNotepad.delete()); // 'Deleted'
// console.log(myNotepad.enter()); // 'Hello|'

// console.log(myNotepad.enter()); // 'Hello'

// const res = new notepad();
// res.addText(75,24,23);
// console.log(res.enter());

class notepad {
    constructor() {
      this.cursor = 0;
      this.text = "";
    }
  
   addText(text) {
    if (Array.isArray(text)) {
      text.forEach((code) => {
        if (typeof code !== "number" || code < 0 || code > 127) {
          return null;
        }
  
        const symbol = String.fromCharCode(code);
        this.text.splice(this.cursor,0,symbol)
        this.cursor++;
      });
    } else if (typeof text === "number" && text >= 0 && text <= 127) {
      const symbol = String.fromCharCode(text);
    this.text.splice(this.cursor,0,symbol)
      this.cursor++;
    } else {
      return null;
    }
  }
  delete() {
    if (this.text.length === 0 || arguments.length !== 0 || this.cursor === 0) {
      return "Delete error";
    }

    this.text.splice(this.cursor -1,1)
    this.cursor--;
    return "Deleted";
  }
    moveLeft() {
      if (this.cursor > 0) {
        this.cursor--;
      }
    }
  
    moveRight() {
      if (this.cursor < this.text.length) {
        this.cursor++;
      }
    }
  
    enter() {
      return this.text;
    }
  }
  
const myNotepad = new notepad();

myNotepad.addText(72); // 'H'
console.log(myNotepad.enter()); // 'H'

myNotepad.addText(101); // 'e'
console.log(myNotepad.enter()); // 'He'

myNotepad.addText(108); // 'l'
console.log(myNotepad.enter()); // 'Hel'

myNotepad.addText(112); // 'p'
console.log(myNotepad.enter()); // 'Help'

myNotepad.addText(115); // 's'
console.log(myNotepad.enter()); // 'Helps'

myNotepad.moveLeft();
console.log(myNotepad.enter()); // 'Help|s'

console.log(myNotepad.delete()); // 'Deleted'
console.log(myNotepad.enter()); // 'Hel|s'

myNotepad.addText(108); // 'l'
console.log(myNotepad.enter()); // 'Hell|s'

myNotepad.addText(111); // 'o'
console.log(myNotepad.enter()); // 'Hello|s'

myNotepad.moveRight();
console.log(myNotepad.enter()); // 'Hellos|'

console.log(myNotepad.delete()); // 'Deleted'
console.log(myNotepad.enter()); // 'Hello|'

console.log(myNotepad.enter()); // 'Hello'

const res = new notepad();
res.addText(75,24,23);
console.log(res.enter());