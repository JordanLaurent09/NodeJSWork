class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
    }

    checkOut() {
        if (this.isCheckedOut) {
            console.log("Эта книга уже выдана! Мы не можем выдать ее заново");
        }
        else if (!this.isCheckedOut) {
            this.isCheckedOut = true;
            return this;
        }
    }

    returnBook() {
        if(this.isCheckedOut) {
            console.log("Спасибо, что вернули книгу в целости и сохранности!");
            this.isCheckedOut = false;
            return this;
        }
    }

}

module.exports = Book;