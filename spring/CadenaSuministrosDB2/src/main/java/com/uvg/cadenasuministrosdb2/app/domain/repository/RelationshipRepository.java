package com.uvg.cadenasuministrosdb2.app.domain.repository;

import com.uvg.cadenasuministrosdb2.app.domain.Relationship;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface RelationshipRepository extends Neo4jRepository<Relationship, Long> {
}