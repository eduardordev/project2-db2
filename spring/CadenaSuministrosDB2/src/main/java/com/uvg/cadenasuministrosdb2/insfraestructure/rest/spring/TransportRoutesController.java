package com.uvg.cadenasuministrosdb2.insfraestructure.rest.spring;

import com.uvg.cadenasuministrosdb2.app.domain.TransportRoutes;
import com.uvg.cadenasuministrosdb2.app.domain.services.TransportRoutesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transport-routes")
public class TransportRoutesController {

    private final TransportRoutesService transportRoutesService;

    @Autowired
    public TransportRoutesController(TransportRoutesService transportRoutesService) {
        this.transportRoutesService = transportRoutesService;
    }

    @GetMapping
    public ResponseEntity<List<TransportRoutes>> getAllTransportRoutes() {
        List<TransportRoutes> transportRoutes = transportRoutesService.getAllTransportRoutes();
        return ResponseEntity.ok(transportRoutes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransportRoutes> getTransportRouteById(@PathVariable Long id) {
        Optional<TransportRoutes> transportRoute = transportRoutesService.getTransportRouteById(id);
        return transportRoute.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TransportRoutes> createTransportRoute(@RequestBody TransportRoutes transportRoute) {
        TransportRoutes createdTransportRoute = transportRoutesService.createTransportRoute(transportRoute);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTransportRoute);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransportRoutes> updateTransportRoute(@PathVariable Long id, @RequestBody TransportRoutes updatedTransportRoute) {
        TransportRoutes transportRoute = transportRoutesService.updateTransportRoute(id, updatedTransportRoute);
        if (transportRoute != null) {
            return ResponseEntity.ok(transportRoute);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTransportRoute(@PathVariable Long id) {
        transportRoutesService.deleteTransportRoute(id);
        return ResponseEntity.ok("Transport route with ID " + id + " has been deleted.");
    }
}
