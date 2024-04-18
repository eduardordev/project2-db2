package com.uvg.cadenasuministrosdb2.app.domain;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Node("Product")
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    private Integer productId;
    private String name;
    private String type;
    private Integer stock;
    private String brand;
    private String description;

    @Relationship(type = "TRANSPORT_ROUTES", direction = Relationship.Direction.OUTGOING)
    private List<Product> transportRoutes = new ArrayList<>();
}
