package spring.spr.controller;

import spring.spr.model.User;
import spring.spr.service.UserService;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@ResponseBody
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    
    @GetMapping(path="/users/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public User getUserByID(@PathVariable Long id){
        return userService.getUser(id);
    }


    @PostMapping(path="/users")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping(path="/users")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PutMapping(path="/users/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userService.updateUser(newUser, id);
    }

    @DeleteMapping(path="/users/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }



}
