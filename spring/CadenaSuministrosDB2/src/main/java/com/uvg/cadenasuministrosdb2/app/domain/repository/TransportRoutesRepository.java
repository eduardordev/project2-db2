package com.uvg.cadenasuministrosdb2.app.domain.repository;

import com.uvg.cadenasuministrosdb2.app.domain.TransportRoutes;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface TransportRoutesRepository extends Neo4jRepository<TransportRoutes, Long> {
}
