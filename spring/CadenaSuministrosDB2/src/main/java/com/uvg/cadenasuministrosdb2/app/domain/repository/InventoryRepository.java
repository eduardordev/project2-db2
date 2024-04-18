package com.uvg.cadenasuministrosdb2.app.domain.repository;

import com.uvg.cadenasuministrosdb2.app.domain.Inventory;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InventoryRepository extends Neo4jRepository<Inventory, Long> {
    List<Inventory> findAllByStatus(String status);
    @Query("MATCH (i:Inventory {status: $status}) RETURN sum(i.quantity) AS total")
    Long getTotalQuantityByStatus(@Param("status") String status);

}
