package com.uvg.cadenasuministrosdb2.insfraestructure.rest.spring;

import com.uvg.cadenasuministrosdb2.app.domain.Inventory;
import com.uvg.cadenasuministrosdb2.app.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventories")
public class InventoryController {

    private final InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @PostMapping
    public Inventory createInventory(@RequestParam Integer productId, @RequestParam String location,
                                     @RequestParam Integer quantity, @RequestParam String status,
                                     @RequestParam ZonedDateTime updateDate) {
        return inventoryService.createInventory(productId, location, quantity, status, updateDate);
    }

    @GetMapping
    public List<Inventory> getAllInventories() {
        return inventoryService.getAllInventories();
    }

    @GetMapping("/status/{status}")
    public List<Inventory> getAllInventoriesByStatus(@PathVariable String status) {
        return inventoryService.findAllByStatus(status);
    }

    @GetMapping("/{id}")
    public Optional<Inventory> getInventoryById(@PathVariable Long id) {
        return inventoryService.getInventoryById(id);
    }

    @PutMapping("/{id}")
    public Inventory updateInventory(@PathVariable Long id, @RequestParam Integer productId,
                                     @RequestParam String location, @RequestParam Integer quantity,
                                     @RequestParam String status, @RequestParam ZonedDateTime updateDate) {
        return inventoryService.updateInventory(id, productId, location, quantity, status, updateDate);
    }

    @DeleteMapping("/{id}")
    public void deleteInventory(@PathVariable Long id) {
        inventoryService.deleteInventory(id);
    }
}
