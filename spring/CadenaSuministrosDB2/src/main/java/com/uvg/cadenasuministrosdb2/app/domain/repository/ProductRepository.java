package com.uvg.cadenasuministrosdb2.app.domain.repository;

import com.uvg.cadenasuministrosdb2.app.domain.Product;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface ProductRepository extends Neo4jRepository<Product, Long> {
}
