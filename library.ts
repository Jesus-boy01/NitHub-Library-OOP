type Gender = "MALE" | "FEMALE"
type Category = "ACTION" | "ADVENTURE" | "THRILLER" | "SCI-FI" | "ROMANCE"

class Librarian {
    private firstName: string;
    private lastName: string;
    private email: string;
    private gender: Gender;
    private phoneNum: string;

    constructor(firstName: string, lastName: string, email: string, gender: Gender, phoneNum: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.phoneNum = phoneNum;
    }

    get fullName(){
        if(this.gender === "MALE"){
            return `Mr ${this.firstName} ${this.lastName}`;
        } else {
            return `Mrs ${this.firstName} ${this.lastName}`;
        }
    }
}

class Author {
    private firstName: string;
    private lastName: string;
    private email: string;
    private phoneNumber: string;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Book {
    private bookName: string;
    private authors: Author[];
    private quantity: number;
    private category: Category;
    private datePublished: string;

    constructor(bookName: string, quantity: number, category: Category, datePublished: string){
        this.bookName = bookName;
        this.authors = [];
        this.quantity = quantity;
        this.category = category;
        this.datePublished = datePublished;
    }

    set bookAuthor(author: Author){
        this.authors.push(author);
    }

    get getBookAuthor(){
        return this.authors;
    }
}

class Library {
    private name: string;
    private books: Book[];
    private librarians: Librarian[];
    private authors: Author[];

    constructor(name: string){
        this.name = name;
        this.books = [];
        this.librarians = [];
        this.authors = [];
    }

    assignLibrarian(librarian: Librarian){
        this.librarians.push(librarian);
        return this.librarians;
    }

    addBooks(book: Book){
        this.books.push(book);
        return this.books;
    }

    get libraryName(): string{
        return this.name;
    }

    get booksNames(): Book[]{
        return this.books;
    }

    get librariansName(): Librarian[]{
        return this.librarians;
    }

    get authorsName(): Author[]{
        return this.authors;
    }
}

const mainLib: Library = new Library("Main");

// Librarians
const tolu = new Librarian("Tolu", "Dada", "tolud12@gmail.com", "MALE", "0901251627");
const david = new Librarian("David", "Dada", "anonymous@gmail.com", "MALE", "08055628921");
const tobi = new Librarian("Tobi", "Adedeji", "tobiadedeji@gmail.com", "MALE", "09177283829");

// Authors
const einstein = new Author("Albert", "Einstein", "alberteinstein19@gmail.com", "08056271863");
const tesla = new Author("Nikola", "Tesla", "nikolatesla20@gmail.com", "09066735267");
const edison = new Author("Thomas", "Edison", "thomasedison21@gmail.com", "08183526454");

// Books
const book1 = new Book("Singles don't do that", 3, "ACTION", "29th April 2023");
mainLib.addBooks(book1)

// Assigning Librarians
mainLib.assignLibrarian(tolu);
mainLib.assignLibrarian(david);
mainLib.assignLibrarian(tobi);

// Setting authors for books
book1.bookAuthor = einstein;
book1.bookAuthor = tesla;

console.log(mainLib);