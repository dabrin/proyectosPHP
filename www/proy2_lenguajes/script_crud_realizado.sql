create table genero(
idGenero int not null auto_increment,
nombre varchar(30) not null,
constraint primary key (idGenero)
);

call sp_ingresar_genero('Acción');






USE `lenguajes_examen1`;
DROP procedure IF EXISTS `sp_ingresar_genero`;

DELIMITER $$
USE `lenguajes_examen1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ingresar_genero`( in _nombre varchar(30) )
BEGIN
insert into genero(nombre) values(_nombre);
END$$

DELIMITER ;





