package com.uvg.cadenasuministrosdb2.insfraestructure.rest.spring;

import com.uvg.cadenasuministrosdb2.app.domain.Suppliers;
import com.uvg.cadenasuministrosdb2.app.domain.services.SuppliersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/suppliers")
public class SuppliersController {

    private final SuppliersService suppliersService;

    @Autowired
    public SuppliersController(SuppliersService suppliersService) {
        this.suppliersService = suppliersService;
    }

    @GetMapping
    public ResponseEntity<List<Suppliers>> getAllSuppliers() {
        List<Suppliers> suppliers = suppliersService.getAllSuppliers();
        return ResponseEntity.ok(suppliers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Suppliers> getSupplierById(@PathVariable Long id) {
        Optional<Suppliers> supplier = suppliersService.getSupplierById(id);
        return supplier.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Suppliers> createSupplier(@RequestBody Suppliers supplier) {
        Suppliers createdSupplier = suppliersService.createSupplier(supplier);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSupplier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Suppliers> updateSupplier(@PathVariable Long id, @RequestBody Suppliers updatedSupplier) {
        Suppliers supplier = suppliersService.updateSupplier(id, updatedSupplier);
        if (supplier != null) {
            return ResponseEntity.ok(supplier);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable Long id) {
        suppliersService.deleteSupplier(id);
        return ResponseEntity.ok("Supplier with ID " + id + " has been deleted.");
    }
}
