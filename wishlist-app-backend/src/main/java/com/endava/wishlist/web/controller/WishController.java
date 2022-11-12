package com.endava.wishlist.web.controller;

import com.endava.wishlist.domain.dto.WishRequest;
import com.endava.wishlist.domain.dto.WishResponse;
import com.endava.wishlist.domain.model.Wish;
import com.endava.wishlist.domain.model.exception.CustomUserServiceException;
import com.endava.wishlist.service.WishService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
//@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@AllArgsConstructor
@RequestMapping("/wishes")
public class WishController {

    private final WishService wishService;

    @PostMapping("/{id}")
    public ResponseEntity<HttpStatus> addWish(@Valid @PathVariable(value = "id") Long idEvent, @Valid @RequestBody WishRequest wishRequest) throws CustomUserServiceException {
        wishService.saveWish(wishRequest, idEvent);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteWish(@PathVariable("id") Long id) throws CustomUserServiceException {
        wishService.deleteWish(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HttpStatus> editWish(@Valid @PathVariable(value = "id") Long idWish, @Valid @RequestBody WishRequest wishRequest) throws CustomUserServiceException {
        wishService.editWish(idWish, wishRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<WishResponse>> getAllWishes() throws CustomUserServiceException {
        List<Wish> wishList = wishService.getAllWishes();

        List<WishResponse> dtoList = new ArrayList<>();
        wishList.forEach(elem -> dtoList.add(elem.toWishResponse()));

        return ResponseEntity.ok(dtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WishResponse> getWishById(@PathVariable("id") Long itemId) throws CustomUserServiceException {
        ;
        Wish wish = wishService.getWishById(itemId);

        return ResponseEntity.ok(wish.toWishResponse());
    }

    @GetMapping("/wishlist/{id}")
    public ResponseEntity<List<WishResponse>> getWishesByWishlistId(@PathVariable("id") Long eventId) throws CustomUserServiceException {
        ;
        List<Wish> wishList = wishService.getWishesByEventId(eventId);

        List<WishResponse> dtoList = new ArrayList<>();
        wishList.forEach(elem -> dtoList.add(elem.toWishResponse()));

        return ResponseEntity.ok(dtoList);
    }
}