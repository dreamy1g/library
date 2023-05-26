package spring.spr.service;

import spring.spr.model.User;
import spring.spr.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    

    private final UserRepository userRepository;

    public User getUser(Long id){
        return userRepository.findById(id).orElseThrow();
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User updateUser(User newUser,Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setAge(newUser.getAge());
                    user.setEmail(newUser.getEmail());
                    user.setNumber(newUser.getNumber());
                    return userRepository.save(user);
                }).orElseThrow();
    }

    public String deleteUser(Long id){
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }
}
