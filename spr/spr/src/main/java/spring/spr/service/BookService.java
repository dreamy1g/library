package spring.spr.service;

import spring.spr.model.Book;
import spring.spr.repository.BookRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import java.util.List;


@Service
@RequiredArgsConstructor
public class BookService {

    
    private final BookRepository bookRepository;

    public Book getBook(Long id){
        return bookRepository.findById(id).orElseThrow();
    }

    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    public List<Book> getBooks(){
        return bookRepository.findAll();
    } 

    public Book updateBook(Book newBook,Long id) {
        return bookRepository.findById(id)
                .map(book -> {
                    book.setName(newBook.getName());
                    book.setPages(newBook.getPages());
                    book.setAuthor(newBook.getAuthor());
                    book.setPrice(newBook.getPrice());
                    return bookRepository.save(book);
                }).orElseThrow();
    }

    public String deleteBook(Long id){
        bookRepository.deleteById(id);
        return  "Book with id "+id+" has been deleted success.";
    }
    
}
