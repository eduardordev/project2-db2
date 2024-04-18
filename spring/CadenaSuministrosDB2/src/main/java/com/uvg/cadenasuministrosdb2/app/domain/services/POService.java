package com.uvg.cadenasuministrosdb2.app.domain.services;

import com.uvg.cadenasuministrosdb2.app.domain.PO;
import com.uvg.cadenasuministrosdb2.app.domain.repository.PORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class POService {

    private final PORepository poRepository;

    @Autowired
    public POService(PORepository poRepository) {
        this.poRepository = poRepository;
    }

    public List<PO> getAllPOs() {
        return poRepository.findAll();
    }

    public Optional<PO> getPOById(Long id) {
        return poRepository.findById(id);
    }

    public PO createPO(PO po, ZonedDateTime date) {
        po.setDate(date);
        return poRepository.save(po);
    }

    public PO updatePO(Long id, PO updatedPO, ZonedDateTime date) {
        Optional<PO> existingPO = poRepository.findById(id);
        if (existingPO.isPresent()) {
            PO po = existingPO.get();
            po.setDate(date);
            po.setDelivered(updatedPO.getDelivered());
            po.setPaymentMethod(updatedPO.getPaymentMethod());
            po.setProducts(updatedPO.getProducts());
            po.setStatus(updatedPO.getStatus());
            po.setTotal(updatedPO.getTotal());
            return poRepository.save(po);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Purchase Order not found with id: " + id);
        }
    }

    public void deletePO(Long id) {
        poRepository.deleteById(id);
    }
}
