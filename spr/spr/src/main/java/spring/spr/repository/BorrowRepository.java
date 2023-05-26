package spring.spr.repository;

import spring.spr.model.User;
import spring.spr.model.Borrow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BorrowRepository extends JpaRepository <Borrow,Long> {
    List<Borrow> findByUserId(User user);
} 
