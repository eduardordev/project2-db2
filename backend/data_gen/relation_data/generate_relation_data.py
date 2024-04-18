import csv
from faker import Faker
import random

fake = Faker()

# Generar datos para la relación ForOrder
with open('for_order.csv', 'w', newline='') as csvfile:
    fieldnames = ['inventory_id', 'purchase_order_id',
                  'cantidad', 'precio_unitario', 'subtotal']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for i in range(25000):  # Generar 24999 filas de datos (24999 inventarios)
        writer.writerow({
            'inventory_id': i + 1,
            'purchase_order_id': fake.random_int(min=1, max=1000),  # 1000 purchase orders
            'cantidad': fake.random_int(min=1, max=100),
            'precio_unitario': fake.random_int(min=1, max=1000),
            'subtotal': fake.random_int(min=10, max=10000)
        })

# Generar datos para la relación Contains
with open('contains.csv', 'w', newline='') as csvfile:
    fieldnames = ['purchase_order_id', 'inventory_id',
                  'cantidad', 'precio_unitario', 'descuento']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for i in range(25000):  # Generar 1000 filas de datos
        writer.writerow({
            'purchase_order_id': fake.random_int(min=1, max=1000),  # 1000 purchase orders
            'inventory_id': i + 1,
            'cantidad': fake.random_int(min=1, max=100),
            'precio_unitario': fake.random_int(min=1, max=1000),
            # Generar descuento aleatorio
            'descuento': random.choice([0, 0.1, 0.2, 0.3, 0.4])
        })

# Generar datos para la relación Supplies
with open('supplies.csv', 'w', newline='') as csvfile:
    fieldnames = ['product_id', 'supplier_id',
                  'fecha_inicio', 'fecha_fin', 'cantidad']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for i in range(25000):  # Generar 24999 filas de datos
        writer.writerow({
            'product_id': i + 1,
            'supplier_id': fake.random_int(min=1, max=100),
            'fecha_inicio': fake.date_this_year().isoformat(),
            'fecha_fin': fake.date_between(start_date='today', end_date='+1y').isoformat(),
            'cantidad': fake.random_int(min=1, max=100)
        })

# Generar datos para la relación UsesRoute
with open('uses_route.csv', 'w', newline='') as csvfile:
    fieldnames = ['purchase_order_id', 'transport_route_id', 'delivery_cost', 'delivery_date', 'status']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for i in range(1000):  # Generar 1000 filas de datos
        writer.writerow({
            'purchase_order_id': fake.random_int(min=1, max=1000),
            'transport_route_id': fake.random_int(min=1, max=24999),
            'delivery_cost': random.uniform(10.0, 200.0), 
            'delivery_date': fake.date_between(start_date='today', end_date='+1y').isoformat(), 
            'status': random.choice(['on_route', 'delivered', 'delayed', 'canceled', 'lost'])
        })
