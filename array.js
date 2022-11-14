const readline = require('readline-sync');
class IntArray {
    #array = [];
    #name = '';
    constructor(array = [], name = '') {
        this.#array = array;
        this.#name = name;
    }
    input() {
        this.#array = readline.question(`Nhap mang: `);

    }
    printArr() {
        console.log(this.#array);
    }
    printName() {
        console.log(this.#name);
    }
    setArr(array) {
        this.#array = array;
        return this.#array;
    }
    setName(name) {
        this.#name = name;
        return this.#name;
    }
    getElement (index) {
        return this.#array[index];
    }
    getSize() {
        let count = 0;
        for (let i = 1; i < this.#array.length; i++) {
            if (this.#array[i] == Number) {
                count++;
            }
        }
        return count;
    }
}

function chayIntArray() {
    let arr = new IntArray([2,3], `abc`);
    // console.log(arr);
    // arr.input();
    let b = arr.getElement(0);
    console.log(`Phan tu o vi tri la: ${b}`);
    // console.log(`so luong phan tu trong mang la ${arr.getSize()}`);
    // arr.printArr();
    // arr.setArr([1,9]);
    // arr.setName("Tien");
    // arr.printName();
}
chayIntArray();