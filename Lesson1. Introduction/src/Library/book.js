class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
    }

    checkOut() {
        if (!this.isCheckedOut) {
            this.isCheckedOut = true;
            return this;
        }
    }

    returnBook() {
        if(this.isCheckedOut) {
            this.isCheckedOut = false;
            return this;
        }
    }

}