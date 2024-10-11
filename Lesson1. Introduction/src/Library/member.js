class Member {
    constructor(name) {
        this.name = name;
        this.books = new Array();
    }


    checkOutBook(book) {
        if (!book.checkOut()) {
            this.books.push(book);
        }
        else {
            console.log("Эта книга уже выдана!")
        }
    }

    returnBook(book) {
        if(book.checkOut()) {
            this.books = this.books.filter((everyBook) => {
                if (everyBook != book) {
                    return everyBook;
                }
            })
        }
        book.returnBook();
    }
}