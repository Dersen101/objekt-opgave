console.log("hello")



class Table {
    constructor (pen, pc, calc) {
        this.pen = pen;
        this.pc = pc;
        this.calc = calc;
    }

    present() { //menignen der dette skal være knappen tror jeg...
        var x = document.createElement("button");
        var t = document.createTextNode("bord");
        x.appendChild(t);
        document.body.appendchild(x); 
    }

}


class Table2 extends Table {
    constructor (pen, pc, calc, nintendo, glass) {
        super(pen, pc, calc);

        this.nintendo = nintendo;
        this.glass = glass;
    }    

}

class Table3 extends Table {
    constructor(pen, pc, calc, plate, book) {
        super(pen, pc, calc);

        this.plate = plate;
        this.book = book;

    }

    show () {
        console.log("This desk i full, it has " + this.pen + this. calc + this.plate + "and" + this.book +". There is no space for the " + this.pc)
    }
}

let bord1 = new Table
let bord2 = new Table2

console.log(new Table("black", "laptop", "TI-30XB" ))

console.log(new Table2("black", "laptop", "TI-30XB", "switch", "ikea glass"))

let test = new Table3(" blue pen,", " stationary", " old TI-30 IIS", " dirty plate", " the book Everything Everything")
test.show();