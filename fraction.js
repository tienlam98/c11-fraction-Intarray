const readline = require('readline-sync');

class Fraction {
    #tu = 0;
    #mau = 1;
    constructor(tu = 0, mau = 1) {
        this.#tu = tu;
        this.#mau = mau;
    }
    print() {
        console.log(`${this.#tu}/${this.#mau}`);
    }
    // get Tu() {
    //     return this.#tu;
    // }
    getTu() {
        return this.#tu;
    }
    setTu(t) {
        if (t - Math.floor(t) == 0) {
            this.#tu = t;
        }
    }
    // set Tu(t) {
    //     t = this.#tu;
    // }
    getMau() {
        if (this.#mau != 0 && (this.#mau - Math.floor(this.#mau) == 0)) {
            return this.#mau;
        }
    }
    setMau(mau){
        if (mau != 0 && (mau - Math.floor(mau) == 0)) {
            this.#mau = mau;
            return this.#mau;
        }
    }
    scan () {
        const tuSo = readline.question(`Nhap tu so: `);
        const mauSo = readline.question(`Nhap mau so: `)
        if (tuSo - Math.floor(tuSo) == 0) {
            this.#tu = tuSo;
        }
        if (mauSo - Math.floor(mauSo) == 0 && mauSo != 0) {
            this.#mau = mauSo;
        }       
    }
    fractionPlus(y) {
        if (this.#mau == y.#mau) {
            let m = this.#tu + y.#tu;
            let n = this.#mau;
            const d = new Fraction(m,n);
            return d.print();
        }
        else {
            let m = this.#tu * y.#mau + y.#tu * this.#mau;
            let n = this.#mau * y.#mau;
            const d = new Fraction(m,n);
            return d.print();
        }
    }
    fractionMultiple (y) {
        let m = this.#tu * y.#tu;
        let n = this.#mau * y.#mau;
        const d = new Fraction(m,n);
        return d.print();
    }
    equal(y) {
        if (this.#tu == y.#tu && this.#mau == y.#mau) {
            return true;
        }
        else return false;
    }
    lessThan(y) {
        let m = this.#tu / this.#mau;
        let n = y.#tu / y.#mau;
        if (m < n) {
            return true;
        }
        else return false;
    }
    reduce() {
        if (this.#tu > this.#mau) {
            return ((this.#tu % this.#mau == 0) ? this.#tu/this.#mau : false)
        }
        else if (this.#tu == this.#mau) {
            let d = new Fraction(1,1);
            return d.print();
        }
            else {
                if (this.#mau % this.#tu == 0) {
                this.#mau = this.#mau / this.#tu;
                this.#tu = this.#tu / this.#tu;
                let d = new Fraction(this.#tu, this.#mau);
                return d.print();
            }
        }
    }
    normalize() {
        if (this.#tu >= 0 && this.#mau > 0) {
            console.log(`${this.#tu}/${this.#mau}`);
        }
        if (this.#tu < 0 || this.#mau < 0) {
            if (this.#tu < 0) {
                console.log(`${this.#tu}/${this.#mau}`);
            }
            if (this.#mau < 0) {
                this.#mau = -this.#mau;
                console.log(`-${this.#tu}/${this.#mau}`);
            }
        }
        if (this.#tu / this.#mau == 0) {
            this.#tu = 0;
            this.#mau = 1;
            console.log(`${this.#tu}/${this.#mau}`);
        }
    }
}

function main() {
    const f1 = new Fraction(0, 5);
    // f1.print();
    const y = new Fraction(3, 6);
    // f1.Tu = 5;
    // f1.setTu(2);
    // f1.setMau(10);
    // f1.getMau();
    f1.print();
    f1.normalize();
    // f1.reduce(); -- TEST REDUCE
    // console.log(f1.lessThan(y)); --TEST LESS THAN
    // if (f1.lessThan(y)) {
    //     console.log(`f1 be hon y`);
    // }
    // else console.log(`f1 khong be hon y`);
    // console.log(f1.equal(y));
    // if (f1.equal(y)) {
    //     console.log(`2 phan so bang nhau`);
    // }
    // else console.log(`2 phan so ko bang nhau`);
    // f1.scan(); -- test scan()
    // f1.print();
    // console.log(`Mau so la: ${f1.getMau()}`); -- test getMau
    // f1.setMau(8); -- test setMau
    // f1.print();
    // console.log(f1.getTu()); --test getTu
    // const d = f1.fractionPlus(y); -- TEST PLUS
    // console.log(d);
    // const f = f1.fractionMultiple(y); -- test MULTIPLE
    // console.log(f);
}
main();
