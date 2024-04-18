package com.uvg.cadenasuministrosdb2.app.domain.repository;

import com.uvg.cadenasuministrosdb2.app.domain.PO;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface PORepository extends Neo4jRepository<PO, Long> {
}
