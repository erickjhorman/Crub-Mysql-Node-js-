-- Creating database 
Crate database CrudNode;
-- Using the database
use CrudNode;

--Creating a table
Create table propietario(
    id_cedulapro number(10),
    nombre varchar(15),
    apellido  varchar(15);
)

create table vehiculo(
    id_placa number(7),
    cedulapro_id number() references(id_cedulapro from propietario )
    modelo varchar(15),
    año number(5)
    
)

create table vehiculo(
    id_placa number(7),
    cedulapro_id number() references(id_cedulapro from propietario )
    modelo varchar(15),
    año number(5)
    
)