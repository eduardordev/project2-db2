package com.uvg.cadenasuministrosdb2.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Node("Transport_Routes")
public class TransportRoutes {

    @Id
    @GeneratedValue
    private Long id;
    private Integer transportRouteId;
    private String origin;
    private String destination;
    private Integer cost;
    private String estimatedTime;
    private String company;
}