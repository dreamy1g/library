package spring.spr.controller;

import spring.spr.model.Borrow;
import spring.spr.service.BorrowService;
import spring.spr.service.UserService;
import spring.spr.service.BookService;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@ResponseBody
@RequiredArgsConstructor
public class BorrowController {

    private final BorrowService userBooksService;
    private final UserService userService;
    private final BookService bookService;
    
    @GetMapping(path="/borrows/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<Borrow> getById(@PathVariable Long id) {
        return userBooksService.getById(id);
    }

    @PostMapping(path="/borrows/{id}/{bookId}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public Borrow addUserBooks(@RequestBody Borrow userBooks, @PathVariable Long id, @PathVariable Long bookId){
        var user = userService.getUser(id);
        var book = bookService.getBook(bookId);

        userBooks.setUserId(user);
        userBooks.setBookId(book);
       
        return userBooksService.add(userBooks);
    }

    @GetMapping(path="/borrows")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<Borrow> getAllBorrows(){
        return userBooksService.getAllBorrows();
    }

    @DeleteMapping(path="/borrows/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String deleteBorrow(@PathVariable Long id){
        return userBooksService.deleteBorrow(id);
    }
}
