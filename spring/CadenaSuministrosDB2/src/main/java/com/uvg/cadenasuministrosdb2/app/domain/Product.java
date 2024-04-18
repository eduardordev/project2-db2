package com.uvg.cadenasuministrosdb2.app.domain;


import lombok.Data;
import lombok.AllArgsConstructor;
import org.springframework.data.neo4j.core.schema.*;

import java.util.List;

@Data
@AllArgsConstructor

@Node("Product")
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String type;
    private Integer stock;
    private String brand;
    private String description;

    @Relationship(type = "TRANSPORT_ROUTES", direction = Relationship.Direction.OUTGOING)
    private List<Product> transportRoutes;
}
