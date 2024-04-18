package com.uvg.cadenasuministrosdb2.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.neo4j.driver.internal.value.DateValue;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Node("Purchase_Orders")
public class PO {

    @Id
    @GeneratedValue

    private Long id;
    private Integer orderId;
    private DateValue date;
    private Boolean delivered;
    private String paymentMethod;
    private String products;
    private String status;
    private Integer total;

    @Relationship(type = "Contains", direction = Relationship.Direction.OUTGOING)
    private Inventory contains;
}