package spring.spr.controller;

import spring.spr.model.Book;
import spring.spr.service.BookService;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@ResponseBody
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;
    
    @GetMapping(path="/books/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public Book getBookByID(@PathVariable Long id){
        return bookService.getBook(id);
    }


    @PostMapping(path="/books")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public Book addBook(@RequestBody Book book){
        return bookService.addBook(book);
    }

    @GetMapping(path="/books")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<Book> getBooks(){
        return bookService.getBooks();
    }

    @PutMapping(path="/books/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public Book updateBook(@RequestBody Book newBook, @PathVariable Long id){
        return bookService.updateBook(newBook, id);
    }

    @DeleteMapping(path="/books/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String deleteBook(@PathVariable Long id){
        return bookService.deleteBook(id);
    }
}
