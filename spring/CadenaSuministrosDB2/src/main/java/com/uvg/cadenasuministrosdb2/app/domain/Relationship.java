package com.uvg.cadenasuministrosdb2.app.domain;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Relationship {
    @Id
    private Long id;
    private Long productId;
    private Long inventoryId;
    private String relationshipType;
    private List<Inventory.InventoryProperty> properties;
}