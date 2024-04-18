package com.uvg.cadenasuministrosdb2.app.domain;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.neo4j.core.schema.*;

import java.time.ZonedDateTime;
import java.util.List;

@Data
@AllArgsConstructor

@Node("Inventory")
public class Inventory {

    @Id
    @GeneratedValue
    private Long id;

    @Property("product_id")
    private Integer productId;

    private String location;

    private Integer quantity;

    private String status;

    @Property("update_date")
    private ZonedDateTime updateDate;

    @Relationship(type = "Contains", direction = Relationship.Direction.INCOMING)
    private List<PO> purchaseOrders;

}