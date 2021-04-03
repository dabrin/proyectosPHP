
create database exam1_b54994_Dabrin_Lenguajes;
use exam1_b54994_Dabrin_Lenguajes;

create table Madera(
identificador int not null auto_increment primary key,
nombre varchar(30) not null,
costoPulgada int not null

);

create table acabado(
identificador int not null auto_increment primary key,
tipoAcabado varchar(30) not null,
costoPulgada int not null);


create table Mueble(
    codigo varchar(30) not null primary key,
    nombre varchar(30) not null,
    tipoAcabado varchar(30) not null,
    maderas varchar(200),
    costoDeCreacion double not null
);

create table cliente(
id int not null auto_increment primary key,
nombre varchar(30) not null,
cedula varchar(9) not null,
direccion varchar(100)
);

call sp_insert_cliente('Dabrin','305020244','Tres Equis de turrialba');
create table Mueble_Madera(
codigoMadera int not null,
pulgadas double not null,
constraint f_Madera foreign key(codigoMadera) references madera(identificador),
constraint f_Mueble foreign key(codigoMueble) references mueble(identificador)
);

call sp_ingresar_mueble('CA12309','silla','Barniz','Pino','15');

select*from mueble;

-- Llamadas a procedimientos 
call sp_insertar_madera('nas','60');
call sp_listar();

-- //
select * from madera;
select* from acabado;
select*from cliente;

call sp_insertar_acabado('No se','1000');

call sp_cargar_madera();
call sp_cargar_acabado();

call sp_obtener_PrecioMadera_Id('Pino','barniz');
call sp_eliminar_mueble('CA36089');
-- PRocedimientos

USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_insertar_madera`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE DEFINER=`laboratorios`@`%` PROCEDURE `sp_insertar_madera`(in _nombre varchar(30), in _costo int )
BEGIN
insert into madera(nombre,costoPulgada) values(_nombre,_costo);
END$$

USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_insertar_acabado`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE DEFINER=`laboratorios`@`%` PROCEDURE `sp_insertar_acabado`(in _nombre varchar(30), in _costo int)
BEGIN
insert into acabado(tipoAcabado,costoPulgada) values(_nombre,_costo);
END$$

DELIMITER ;


USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_cargar_madera`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE DEFINER=`laboratorios`@`%` PROCEDURE `sp_cargar_madera`()
BEGIN
select nombre,costoPulgada from madera;
END$$

DELIMITER ;



USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_cargar_acabado`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE PROCEDURE `sp_cargar_acabado` ()
BEGIN
select tipoAcabado,costoPulgada from acabado;
END$$

DELIMITER ;

USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_obtener_PrecioMadera_Id`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE PROCEDURE `sp_obtener_PrecioMadera_Id` (in id int)
BEGIN
select costoPulgada from madera where identificador=id;
END$$

DELIMITER ;


USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_obtener_PrecioMadera_Id`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE DEFINER=`laboratorios`@`%` PROCEDURE `sp_obtener_PrecioMadera_Id`(in id varchar(30))
BEGIN
select costoPulgada from madera where nombre=id;
END$$

DELIMITER ;

USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_obtener_PrecioMadera_Id`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE DEFINER=`laboratorios`@`%` PROCEDURE `sp_obtener_PrecioMadera_Id`(in id varchar(30), in nombre varchar(30))
BEGIN
declare costo_madera int;

select madera.costoPulgada as maderaCosto,acabado.costoPulgada as acabadoCosto 
from madera,acabado
where madera.nombre=id AND acabado.tipoAcabado=nombre;
END$$

DELIMITER ;


USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_ingresar_mueble`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE PROCEDURE `sp_ingresar_mueble` (in id varchar(30), in nombre varchar(30),in tipoAcabado varchar(30),in maderas varchar(200),in costo double)
BEGIN
insert into mueble(codigo,nombre,tipoAcabado,maderas,costoDeCreacion) 
values(id,nombre,tipoAcabado,maderas,costoDeCreacion);
END$$

DELIMITER ;


USE `exam1_b54994_dabrin_lenguajes`;
DROP procedure IF EXISTS `sp_listar`;

DELIMITER $$
USE `exam1_b54994_dabrin_lenguajes`$$
CREATE PROCEDURE `sp_listar` ()
BEGIN
select codigo,nombre,tipoAcabado,costoDeCreacion from mueble;
END$$

DELIMITER ;



