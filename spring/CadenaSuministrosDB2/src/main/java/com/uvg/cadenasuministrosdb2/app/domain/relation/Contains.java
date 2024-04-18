package com.uvg.cadenasuministrosdb2.app.domain.relation;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uvg.cadenasuministrosdb2.app.domain.Inventory;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contains {

    private Integer cantidad;
    private Float precioUnitario;
    private Float subtotal;

    @JsonIgnoreProperties("Contains") // Evita problemas de serialización
    private Inventory inventory;
}
