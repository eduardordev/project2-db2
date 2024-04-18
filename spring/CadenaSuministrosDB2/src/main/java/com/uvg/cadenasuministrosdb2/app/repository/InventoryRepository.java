package com.uvg.cadenasuministrosdb2.app.repository;

import com.uvg.cadenasuministrosdb2.app.domain.Inventory;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.List;

public interface InventoryRepository extends Neo4jRepository<Inventory, Long> {
    List<Inventory> findAllByStatus(String status);

}
