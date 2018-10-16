Create database transito;
use transito;

Create table propietario (
    id_cedulapro int(10) not null auto_increment,
    nombre varchar(15) not null,
    apellido  varchar(15) not null,
    PRIMARY KEY (id_cedulapro)
);

create table vehiculo(
    id_placa int(7) not null  auto_increment,
    cedulapro_id int(3) not null,
    modelo varchar(10) not null,
    año int(5) not null,
    PRIMARY KEY  (id_placa), 
    FOREIGN key (cedulapro_id) REFERENCES propietario (id_cedulapro) 
);

create table multa (
    id_multa int(3) not null auto_increment primary key, 
    fecha_multa date not null,
    placa_id varchar(7) not null REFERENCES propietario(vehiculo),
    descripcion_multa varchar(30) not null,
    estado_multa TINYINT(1) not null,
    valor_multa int(8) not null,
    cedula int(10) not null
);

show tables;
describe vehiculo;
ALTER TABLE vehiculo
MODIFY cedulapro_id int(3) NOT NULL; 