var Library = /** @class */ (function () {
    function Library() {
    }
    Library.prototype.addBook = function () {
        Library.totalBooks++;
    };
    Library.getTotalBooks = function () {
        return Library.totalBooks;
    };
    Library.totalBooks = 0;
    return Library;
}());
var library1 = new Library();
var library2 = new Library();
library1.addBook();
library1.addBook();
library2.addBook();
console.log(Library.getTotalBooks());
library1.addBook();
console.log(Library.getTotalBooks());
