package com.uvg.cadenasuministrosdb2.app.services;

import com.uvg.cadenasuministrosdb2.app.domain.Inventory;
import com.uvg.cadenasuministrosdb2.app.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InventoryService{

    private final InventoryRepository inventoryRepository;

    @Autowired
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    // CREATE
    public Inventory createInventory(Integer productId, String location, Integer quantity, String status, ZonedDateTime updateDate) {
        Inventory inventory = new Inventory(null, productId, location, quantity, status, updateDate, new ArrayList<>());
        return inventoryRepository.save(inventory);
    }

    // READ
    public List<Inventory> getAllInventories() {
        return inventoryRepository.findAll();
    }

    public List<Inventory> findAllByStatus(String status) {
        return inventoryRepository.findAllByStatus(status);
    }

    public Optional<Inventory> getInventoryById(Long id) {
        return inventoryRepository.findById(id);
    }

    // UPDATE
    public Inventory updateInventory(Long id, Integer productId, String location, Integer quantity, String status, ZonedDateTime updateDate) {
        Optional<Inventory> optionalInventory = inventoryRepository.findById(id);
        if (optionalInventory.isPresent()) {
            Inventory inventory = optionalInventory.get();
            inventory.setProductId(productId);
            inventory.setLocation(location);
            inventory.setQuantity(quantity);
            inventory.setStatus(status);
            inventory.setUpdateDate(updateDate);
            return inventoryRepository.save(inventory);
        } else {
            throw new RuntimeException("Inventory not found with id: " + id);
        }
    }

    // DELETE
    public void deleteInventory(Long id) {
        inventoryRepository.deleteById(id);
    }

}
