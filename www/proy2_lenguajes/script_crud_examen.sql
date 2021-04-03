create database lenguajes_examen1;


use lenguajes_examen1;

create table articulos(
codigo int not null,
nombre varchar(40) not null
);

alter table articulos add primary key(codigo);


select * from articulos;

call sp_listar();
call sp_ingresar_articulos('1','Nada');
call sp_actualizar('22','Frijoles');
call sp_eliminar('12');
call sp_buscar('69');

-- Procedimientos almacenados !!!!!

USE `lenguajes_examen1`;
DROP procedure IF EXISTS `sp_actualizar`;

DELIMITER $$
USE `lenguajes_examen1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_actualizar`(_codigo INT, _nombre VARCHAR(20))
BEGIN
	update articulos set nombre=_nombre where codigo=_codigo;
END$$

DELIMITER ;




USE `lenguajes_examen1`;
DROP procedure IF EXISTS `sp_ingresar_articulos`;

DELIMITER $$
USE `lenguajes_examen1`$$
CREATE PROCEDURE `sp_ingresar_articulos`(_codigo INT, _nombre VARCHAR(20))
BEGIN
	INSERT INTO producto (codigo, nombre)VALUES (_codigo, _nombre);
END$$

DELIMITER ;


USE `lenguajes_examen1`;
DROP procedure IF EXISTS `sp_eliminar`;

DELIMITER $$
USE `lenguajes_examen1`$$
CREATE PROCEDURE `sp_eliminar` (in id int)
BEGIN
delete from articulos where id=codigo;
END$$

DELIMITER ;


USE `lenguajes_examen1`;
DROP procedure IF EXISTS `sp_listar`;

DELIMITER $$
USE `lenguajes_examen1`$$
CREATE  PROCEDURE `sp_listar`()
BEGIN
	select * from articulos;
END$$

DELIMITER ;

USE `lenguajes_examen1`;
DROP procedure IF EXISTS `sp_buscar`;

DELIMITER $$
USE `lenguajes_examen1`$$
CREATE PROCEDURE `sp_buscar` (in id int)
BEGIN
select codigo,nombre from articulos where codigo=id;
END$$

DELIMITER ;

