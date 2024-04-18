package com.uvg.cadenasuministrosdb2.app.domain.services;

import com.uvg.cadenasuministrosdb2.app.domain.Suppliers;
import com.uvg.cadenasuministrosdb2.app.domain.repository.SuppliersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class SuppliersService {

    private final SuppliersRepository suppliersRepository;

    @Autowired
    public SuppliersService(SuppliersRepository suppliersRepository) {
        this.suppliersRepository = suppliersRepository;
    }

    public List<Suppliers> getAllSuppliers() {
        return suppliersRepository.findAll();
    }

    public Optional<Suppliers> getSupplierById(Long id) {
        return suppliersRepository.findById(id);
    }

    public Suppliers createSupplier(Suppliers supplier) {
        return suppliersRepository.save(supplier);
    }

    public Suppliers updateSupplier(Long id, Suppliers updatedSupplier) {
        Optional<Suppliers> existingSupplier = suppliersRepository.findById(id);
        if (existingSupplier.isPresent()) {
            Suppliers supplier = existingSupplier.get();
            supplier.setName(updatedSupplier.getName());
            supplier.setAddress(updatedSupplier.getAddress());
            supplier.setPhone(updatedSupplier.getPhone());
            supplier.setCountry(updatedSupplier.getCountry());
            supplier.setReputation(updatedSupplier.getReputation());
            supplier.setContact(updatedSupplier.getContact());
            supplier.setEmail(updatedSupplier.getEmail());
            supplier.setWebsite(updatedSupplier.getWebsite());
            return suppliersRepository.save(supplier);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Supplier not found with id: " + id);
        }
    }

    public void deleteSupplier(Long id) {
        suppliersRepository.deleteById(id);
    }
}
