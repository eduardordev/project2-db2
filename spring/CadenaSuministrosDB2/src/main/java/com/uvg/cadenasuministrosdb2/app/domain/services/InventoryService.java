package com.uvg.cadenasuministrosdb2.app.domain.services;

import com.uvg.cadenasuministrosdb2.app.domain.Inventory;
import com.uvg.cadenasuministrosdb2.app.domain.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.*;

@Service
public class InventoryService{

    private final InventoryRepository inventoryRepository;

    @Autowired
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    // CREATE
    public Inventory createInventory(Integer productId, String location, Integer quantity, String status, ZonedDateTime updateDate, Map<String, Object> properties) {
        Inventory inventory = new Inventory(null, productId, location, quantity, status, updateDate, new ArrayList<>(), properties);
        return inventoryRepository.save(inventory);
    }

    // READ
    public Page<Inventory> getAllInventories(int page, int size) {
        return inventoryRepository.findAll(PageRequest.of(page, size));
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



    public Long getTotalQuantityByStatus(String status) {
        return inventoryRepository.getTotalQuantityByStatus(status);
    }

    // Operación que permita agregar 1 o más propiedades a un nodo
    public Inventory addPropertiesToInventory(Long id, Map<String, Object> properties) {
        Inventory inventory = getInventoryById(id).orElseThrow(() -> new RuntimeException("Inventory not found with id: " + id));

        if (inventory.getProperties() == null) {
            inventory.setProperties(new HashMap<>());
        }

        properties.forEach((key, value) -> {
            if (value instanceof String && ((String) value).equalsIgnoreCase("SI")) {
                value = "SI";
            }
            inventory.getProperties().put(key, value);
        });

        return inventoryRepository.save(inventory);
    }





    public List<Inventory> addPropertiesToInventories(List<Long> ids, Map<String, Object> properties) {
        List<Inventory> inventories = inventoryRepository.findAllById(ids);
        inventories.forEach(inventory -> {
            properties.forEach((key, value) -> inventory.getProperties().put(key, value.toString()));
        });
        return inventoryRepository.saveAll(inventories);
    }

    public Inventory updatePropertiesOfInventory(Long id, Map<String, Object> properties) {
        Inventory inventory = getInventoryById(id).orElseThrow(() -> new RuntimeException("Inventory not found with id: " + id));
        properties.forEach((key, value) -> inventory.getProperties().put(key, value.toString()));
        return inventoryRepository.save(inventory);
    }

    public List<Inventory> updatePropertiesOfInventories(List<Long> ids, Map<String, Object> properties) {
        List<Inventory> inventories = inventoryRepository.findAllById(ids);
        inventories.forEach(inventory -> {
            properties.forEach((key, value) -> inventory.getProperties().put(key, value.toString()));
        });
        return inventoryRepository.saveAll(inventories);
    }

    // Operación que permita eliminar 1 o mas propiedades de un nodo
    public Inventory removePropertiesOfInventory(Long id, List<String> propertyKeys) {
        Inventory inventory = getInventoryById(id).orElseThrow(() -> new RuntimeException("Inventory not found with id: " + id));
        propertyKeys.forEach(key -> inventory.getProperties().remove(key));
        return inventoryRepository.save(inventory);
    }

    // Operación que permita eliminar 1 o más propiedades de múltiples nodos al mismo tiempo
    public List<Inventory> removePropertiesOfInventories(List<Long> ids, List<String> propertyKeys) {
        List<Inventory> inventories = inventoryRepository.findAllById(ids);
        inventories.forEach(inventory -> propertyKeys.forEach(key -> inventory.getProperties().remove(key)));
        return inventoryRepository.saveAll(inventories);
    }

}
