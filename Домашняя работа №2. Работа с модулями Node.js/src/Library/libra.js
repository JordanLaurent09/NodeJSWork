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

    findBookByName(title) {
        let foundBook = new Array();

        this.books.forEach((book) => {
            if (book.title == title) {
                foundBook.push(book);
            }
        })

        return foundBook[0];
    }

    findMemberByName(name) {
        let currentMember = new Array();

        this.members.forEach((member) => {
            if (member.name == name) {
                currentMember.push(member);
            }
        })
        return currentMember[0];
    }

}

module.exports = Library;