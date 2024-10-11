class Library {
    constructor() {
        this.books = new Array();
        this.members = new Array();
    }

    addBook(book) {
        this.books.push(book);
    }

    addMember(member) {
        this.members.push(member);
    }

}