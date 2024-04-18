package com.uvg.cadenasuministrosdb2.app.domain.services;

import com.uvg.cadenasuministrosdb2.app.domain.TransportRoutes;
import com.uvg.cadenasuministrosdb2.app.domain.repository.TransportRoutesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TransportRoutesService {

    private final TransportRoutesRepository transportRoutesRepository;

    @Autowired
    public TransportRoutesService(TransportRoutesRepository transportRoutesRepository) {
        this.transportRoutesRepository = transportRoutesRepository;
    }

    public List<TransportRoutes> getAllTransportRoutes() {
        return transportRoutesRepository.findAll();
    }

    public Optional<TransportRoutes> getTransportRouteById(Long id) {
        return transportRoutesRepository.findById(id);
    }

    public TransportRoutes createTransportRoute(TransportRoutes transportRoute) {
        return transportRoutesRepository.save(transportRoute);
    }

    public TransportRoutes updateTransportRoute(Long id, TransportRoutes updatedTransportRoute) {
        Optional<TransportRoutes> existingTransportRoute = transportRoutesRepository.findById(id);
        if (existingTransportRoute.isPresent()) {
            TransportRoutes transportRoute = existingTransportRoute.get();
            transportRoute.setOrigin(updatedTransportRoute.getOrigin());
            transportRoute.setDestination(updatedTransportRoute.getDestination());
            transportRoute.setCost(updatedTransportRoute.getCost());
            transportRoute.setEstimatedTime(updatedTransportRoute.getEstimatedTime());
            transportRoute.setCompany(updatedTransportRoute.getCompany());
            return transportRoutesRepository.save(transportRoute);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Transport Route not found with id: " + id);
        }
    }

    public void deleteTransportRoute(Long id) {
        transportRoutesRepository.deleteById(id);
    }
}
