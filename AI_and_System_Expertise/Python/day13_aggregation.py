class Book:
    def __init__(self,title,author):
        self.title=title
        self.author=author
    def display_book(self):
        print("Title:",self.title)
        print("Author:",self.author)

class Library:
    def __init__(self,name,book):
        self.name=name
        self.book=book
        
    def display_library(self):
        print("Name:",self.name)
        self.book.display_book()

book1 = Book("Python Programming", "John Smith")
library = Library("Central Library", book1)

library.display_library()