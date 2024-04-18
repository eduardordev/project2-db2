package com.uvg.cadenasuministrosdb2.insfraestructure.rest.spring;

import com.uvg.cadenasuministrosdb2.app.domain.PO;
import com.uvg.cadenasuministrosdb2.app.domain.services.POService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/purchase-orders")
public class POController {

    private final POService poService;

    @Autowired
    public POController(POService poService) {
        this.poService = poService;
    }

    @GetMapping
    public ResponseEntity<List<PO>> getAllPOs() {
        List<PO> pos = poService.getAllPOs();
        return ResponseEntity.ok(pos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PO> getPOById(@PathVariable Long id) {
        Optional<PO> po = poService.getPOById(id);
        return po.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PO> createPO(@RequestBody PO po) {
        ZonedDateTime now = ZonedDateTime.now();
        PO createdPO = poService.createPO(po, now);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PO> updatePO(@PathVariable Long id, @RequestBody PO updatedPO) {
        ZonedDateTime now = ZonedDateTime.now();
        PO po = poService.updatePO(id, updatedPO, now);
        if (po != null) {
            return ResponseEntity.ok(po);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePO(@PathVariable Long id) {
        poService.deletePO(id);
        return ResponseEntity.ok("PO with ID " + id + " has been deleted.");
    }
}
