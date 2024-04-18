package com.uvg.cadenasuministrosdb2.app.domain.services;

import com.uvg.cadenasuministrosdb2.app.domain.Product;
import com.uvg.cadenasuministrosdb2.app.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductsService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product createProduct(String productName, String type, Integer stock, String brand, String description) {
        Product product = new Product(null, productName, type, stock, brand, description, new ArrayList<>());
        return productRepository.save(product);
    }


    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            product.setName(updatedProduct.getName());
            product.setType(updatedProduct.getType());
            product.setStock(updatedProduct.getStock());
            product.setBrand(updatedProduct.getBrand());
            product.setDescription(updatedProduct.getDescription());
            return productRepository.save(product);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Product not found with id: " + id);
        }
    }

    public void deleteProduct(Long id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            productRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Product not found with id: " + id);
        }
    }
}
