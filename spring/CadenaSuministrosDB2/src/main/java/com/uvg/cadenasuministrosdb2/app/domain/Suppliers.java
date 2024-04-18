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
@Node("Suppliers")
public class Suppliers {

    @Id
    @GeneratedValue
    private Long id;

    private Integer supplierId;
    private String name;
    private String address;
    private String phone;
    private String country;
    private Integer reputation;
    private String contact;
    private String email;
    private String website;
}