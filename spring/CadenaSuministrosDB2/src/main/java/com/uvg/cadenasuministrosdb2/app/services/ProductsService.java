package com.uvg.cadenasuministrosdb2.app.services;

import com.uvg.cadenasuministrosdb2.app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductsService {
    private final ProductRepository productRepository;
    @Autowired
    public ProductsService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
}
