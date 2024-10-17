class Member {
    constructor(name) {
        this.name = name;
        this.checkedOutBooks = new Array();
    }


    checkOutBook(book) {
        if (!book.isCheckedOut) {
            book = book.checkOut();
            this.checkedOutBooks.push(book);
            console.log("Книга успешно выдана!");
        }
        else {
            console.log("Эта книга уже выдана!");
        }
    }

    returnBook(book) {
        if(book.isCheckedOut) {
            this.checkedOutBooks = this.checkedOutBooks.filter((everyBook) => {
                if (everyBook != book) {
                    return everyBook;
                }
            })
        }
        book.returnBook();
    }
}

module.exports = Member;