package com.uvg.cadenasuministrosdb2.app.domain.repository;

import com.uvg.cadenasuministrosdb2.app.domain.Suppliers;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface SuppliersRepository extends Neo4jRepository<Suppliers, Long> {
}
