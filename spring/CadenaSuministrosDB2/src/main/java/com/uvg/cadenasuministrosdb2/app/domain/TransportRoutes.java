package com.uvg.cadenasuministrosdb2.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Node("TransportRoute")
public class TransportRoutes {

    @Id
    @GeneratedValue
    private Long id;
    private String origin;
    private String destination;
    private Integer cost;
    @Property("estimated_time")
    private String estimatedTime;
    private String company;
}