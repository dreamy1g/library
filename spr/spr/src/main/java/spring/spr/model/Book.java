package spring.spr.model;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Getter;
import javax.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="BOOKS")
public class Book {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long bookId;
    @Column
    private String name;
    @Column
    private int pages;
    @Column
    private String author;
    @Column
    private double price;

}
