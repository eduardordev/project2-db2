package com.uvg.cadenasuministrosdb2.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.time.ZonedDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Node("PurchaseOrder")
public class PO {

    @Id
    @GeneratedValue

    private Long id;
    private Integer orderId;
    private ZonedDateTime date;
    private Boolean delivered;
    private String paymentMethod;
    private String products;
    private String status;
    private Integer total;

    @Relationship(type = "Contains", direction = Relationship.Direction.INCOMING)
    private Inventory contains;
}