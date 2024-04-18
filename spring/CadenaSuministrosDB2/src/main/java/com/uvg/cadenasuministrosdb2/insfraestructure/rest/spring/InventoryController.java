package com.uvg.cadenasuministrosdb2.insfraestructure.rest.spring;

import com.uvg.cadenasuministrosdb2.app.domain.Inventory;
import com.uvg.cadenasuministrosdb2.app.domain.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Inventory> createInventory(@RequestBody Inventory inventory) {
        ZonedDateTime now = ZonedDateTime.now();
        Inventory createdInventory = inventoryService.createInventory(
                inventory.getProductId(),
                inventory.getLocation(),
                inventory.getQuantity(),
                inventory.getStatus(),
                now
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInventory);
    }

    @GetMapping
    public ResponseEntity<Page<Inventory>> getAllInventories(
            @RequestParam int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<Inventory> inventories = inventoryService.getAllInventories(page, size);
        return ResponseEntity.ok(inventories);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Inventory>> getAllInventoriesByStatus(@PathVariable String status) {
        List<Inventory> inventories = inventoryService.findAllByStatus(status);
        return ResponseEntity.ok(inventories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inventory> getInventoryById(@PathVariable Long id) {
        Optional<Inventory> inventory = inventoryService.getInventoryById(id);
        return inventory.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inventory> updateInventory(@PathVariable Long id, @RequestBody Inventory updatedInventory) {
        ZonedDateTime now = ZonedDateTime.now();
        Inventory inventory = inventoryService.updateInventory(
                id,
                updatedInventory.getProductId(),
                updatedInventory.getLocation(),
                updatedInventory.getQuantity(),
                updatedInventory.getStatus(),
                now
        );
        return ResponseEntity.ok(inventory);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteInventory(@PathVariable Long id) {
        inventoryService.deleteInventory(id);
        return ResponseEntity.ok("Inventario con ID " + id + " ha sido eliminado.");
    }
}
