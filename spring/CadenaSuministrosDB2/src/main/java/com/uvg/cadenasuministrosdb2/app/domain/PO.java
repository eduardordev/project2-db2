package com.uvg.cadenasuministrosdb2.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.neo4j.core.schema.*;

import java.time.ZonedDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Node("PurchaseOrder")
public class PO {

    @Id
    @GeneratedValue

    private Long id;
    private ZonedDateTime date;
    private Boolean delivered;
    @Property("payment_method")
    private String paymentMethod;
    private String products;
    private String status;
    private Integer total;

    @Relationship(type = "Contains", direction = Relationship.Direction.INCOMING)
    private Inventory contains;
}