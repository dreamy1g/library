package spring.spr.service;

import spring.spr.model.User;
import spring.spr.model.Borrow;
import spring.spr.repository.BorrowRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BorrowService {
    

    private final BorrowRepository borrowRepository;

    public Borrow add(Borrow borrow){
        return borrowRepository.save(borrow);
    }

    public List<Borrow> getById(Long id){
        var user = new User();
        user.setUserId(id);
        return borrowRepository.findByUserId(user);
    }

    public List<Borrow> getAllBorrows(){
        return borrowRepository.findAll();
    } 

    public String deleteBorrow(Long id){
        borrowRepository.deleteById(id);
        return  "Borrow with id "+id+" has been deleted success.";
    }
}
