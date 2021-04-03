create database `b54994_Lenguajes_proy2`;
use `b54994_Lenguajes_proy2`;
CREATE TABLE articulos(
	codigo int not null,
    nombre varchar(50) not null,
    descripcion varchar(100) not null,
    imagen varchar(100) not null,
    precio int not null,
    cantidad int not null,
    primary key (codigo)
)ENGINE=INNODB;

CREATE TABLE combo(
	id_combo int auto_increment not null,
	nombre_combo varchar(50) not null,
    precio int not null,
	primary key (id_combo)
)ENGINE=INNODB;


create table usuario(
nombre varchar(100) not null,
identificador int not null,
correo varchar(50) not null,
tipo_usuario int not null,
primary key (identificador)
)ENGINE=INNODB;

alter table usuario add column contraseña varchar(30);
create table ventashistorial(
idCliente int not null,
fecha date not null,
precio int not null)ENGINE=INNODB;




CREATE TABLE combo_articulos(
	id_combo int not null,
    id_art int not null,
    CONSTRAINT fk_id_combo_ FOREIGN KEY(id_combo) REFERENCES combo(id_combo),
    CONSTRAINT fk_id_art_ FOREIGN KEY(id_art) REFERENCES articulos(codigo)
)ENGINE=INNODB;


CREATE TABLE carrito (
	ID INT NOT NULL AUTO_INCREMENT,
	ID_Usuario INT NOT NULL,
	CONSTRAINT TCarrito_PK PRIMARY KEY (ID),
	CONSTRAINT usuario_carrito_FK FOREIGN KEY (ID_Usuario) REFERENCES usuario (identificador)
)ENGINE=INNODB;


CREATE TABLE art_carrito (
	ID_Carrito INT NOT NULL,
	ID_Articulo INT NOT NULL,
	CONSTRAINT art_carrito_FK1 FOREIGN KEY (ID_Carrito) REFERENCES carrito (ID),
	CONSTRAINT art_carrito_FK2 FOREIGN KEY (ID_Articulo) REFERENCES articulos (codigo)
)ENGINE=INNODB;

create table combo_carrito(
Id_carrito int not null,
id_combo int not null,
constraint com_car_fk_carrito foreign key(id_carrito)references carrito(ID),
constraint com_car_fk_combo foreign key(id_combo)references combo(id_combo)
)ENGINE=INNODB;



CREATE TABLE rol (
	ID_rol int not null AUTO_INCREMENT,
	ID_user INT NOT NULL ,
	Descripcion VARCHAR(50) NOT NULL,
    constraint pf primary key(ID_rol,ID_user),
	CONSTRAINT fk_rol FOREIGN KEY (ID_user) REFERENCES usuario(identificador)
)ENGINE=INNODB;
CREATE TABLE permiso (
	ID INT NOT NULL AUTO_INCREMENT,
	Descripcion VARCHAR(50) NOT NULL,
	CONSTRAINT TPermiso_PK PRIMARY KEY (ID)
)ENGINE=INNODB;
CREATE TABLE TPermiso_X_TRol (
	ID_rol INT NOT NULL,
	ID_Permiso INT NOT NULL,
	CONSTRAINT TPermiso_X_TRol_PK PRIMARY KEY (ID_Rol, ID_Permiso),
	CONSTRAINT TPermiso_X_TRol_FK1 FOREIGN KEY (ID_Rol) REFERENCES rol (ID_rol),
	CONSTRAINT TPermiso_X_TRol_FK2 FOREIGN KEY (ID_Permiso) REFERENCES permiso (ID)
)ENGINE=INNODB;


CREATE PROCEDURE `sp_actualizar_articulos`(IN `codigo` INT(4), IN `nombre` VARCHAR(50), IN `descripcion` VARCHAR(100), IN `precio` INT(10))
    NO SQL
UPDATE articulos 
SET articulos.nombre = nombre,
articulos.descripcion=descripcion,
articulos.precio= precio
WHERE codigo=articulos.codigo;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_ver_historial_de_ventas`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_ver_historial_de_ventas`()
BEGIN
select idCliente,fecha,precio from ventashistorial;
END;$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_ver_carrito`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_ver_carrito`(in id int)
BEGIN
	select car.ID, a_cart.ID_Articulo, art.nombre 
    from carrito as car 
    join art_carrito as a_cart on car.ID=a_cart.ID_Carrito
    join articulos as art on art.codigo=a_cart.ID_Articulo
    where id=ID_Usuario;
 END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_user_exists`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_user_exists`(IN nombre varchar(50), IN contraseña varchar(25))
BEGIN
SELECT nombre,contraseña FROM cliente WHERE cliente.nombre = nombre AND cliente.contraseña = contraseña;
END$$

DELIMITER ;





USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_tipo_usuario`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_tipo_usuario`(IN id integer(9))
BEGIN
select tipo_usuario from usuario where identificador=id;
END$$

DELIMITER ;



USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_restar_prod_art`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_restar_prod_art`(in id_cliente int,in id int, in precio int)
BEGIN
	declare nombre_cliente varchar(50);
	set nombre_cliente=(select nombre from usuario where id_cliente=identificador);
	update articulos set cantidad=cantidad-1 where id=codigo;
    insert into ventashistorial(idCliente,fecha,precio) values (id,now(),precio);
    insert into informesventas(nombreCliente,idCliente,precio,fecha)values(nombre_cliente,id_cliente,precio,now());
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_un_admin`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_un_admin`(in id int)
BEGIN
select nombre,identificador,correo,tipo_usuario from usuario where tipo_usuario=0 AND id=identificador;
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_prod_para_actualizar`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_prod_para_actualizar`(in id int)
BEGIN
select codigo,nombre,descripcion,precio from articulos where codigo=id;
END$$

DELIMITER ;


USE `lenguajes`;
DROP procedure IF EXISTS `sp_obtener_prod_venta`;

DELIMITER $$
USE `lenguajes`$$
CREATE  PROCEDURE `sp_obtener_prod_venta`( in id_prod int)
BEGIN
	select codigo, nombre,descripcion,precio from articulos where id_prod=codigo;
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_prod`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_prod`(IN id_user int,in id_prod int)
BEGIN


select art.codigo,art.nombre,art.descripcion,art.precio,art.cantidad,carrito.ID 
from articulos as art,carrito
where art.codigo=id_prod AND id_user=carrito.ID_Usuario;
END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_id_rol`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_id_rol`(in id int)
BEGIN
select ID_rol from rol where id=ID_User;
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_Gestion_U`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE PROCEDURE `sp_obtener_Gestion_U`(in ID_Rol_ int,in ID_Permiso_ int)
BEGIN
	select ID_Permiso from tpermiso_x_trol 
    where tpermiso_x_trol.ID_Rol=ID_Rol_ AND tpermiso_x_trol.ID_Permiso=ID_Permiso_;
END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_combos`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_combos`()
BEGIN
	select combo.id_combo,combo.nombre_combo,combo.precio from combo;
END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_combo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_combo`(in id_user int,in id_combo_ int)
BEGIN
select combo.id_combo,combo.nombre_combo,combo.precio,carrito.ID 
from combo,carrito 
where combo.id_combo=id_combo_ AND id_user=carrito.ID_Usuario;
END$$

DELIMITER ;



USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_obtener_admin`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_obtener_admin`()
BEGIN
select nombre,identificador,correo from usuario where tipo_usuario=0;
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_log_`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_log_`(IN `nombre` VARCHAR(100), IN `contraseña` VARCHAR(25))
    NO SQL
SELECT nombre,identificador,correo,contraseña,tipo_usuario 
from usuario WHERE usuario.nombre=nombre AND usuario.contraseña=contraseña$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_listar`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_listar`()
SELECT codigo,nombre,descripcion,imagen,precio,cantidad FROM articulos$$

DELIMITER ;




USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_insertar_combo_carrito`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_insertar_combo_carrito`(IN id_carrito int,IN id_combo int)
BEGIN

insert into combo_carrito(Id_carrito,id_combo) values(id_carrito,id_combo);


END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_ingresar_permiso_rol`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_ingresar_permiso_rol`(in id_permiso int,in id_user int)
BEGIN
declare id_rol_ins int;
set id_rol_ins = (select ID_Rol from rol where rol.ID_User=id_user);
insert into tpermiso_x_trol(ID_Rol,ID_Permiso) values(id_rol_ins,id_permiso);
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_ingresar_articulos`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_ingresar_articulos`(IN `codigo` INT(4), IN `nombre` VARCHAR(50), IN `descripcion` VARCHAR(100), IN `imagen` VARCHAR(100), IN `precio` INT(10),in cantidad int)
    NO SQL
INSERT INTO articulos(articulos.codigo,articulos.nombre,articulos.descripcion,articulos.imagen,articulos.precio,articulos.cantidad)VALUES(codigo,nombre,descripcion, imagen,precio,cantidad)$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_get_prod_vals`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_get_prod_vals`(IN id int)
BEGIN
select codigo, nombre,descripcion,precio from articulos where id=codigo;
END$$

DELIMITER ;




USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_eliminar_prod`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_eliminar_prod`( in id int)
BEGIN
delete from articulos where codigo=id;
END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_delete_prod_carrito`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_delete_prod_carrito`(in id int)
BEGIN
delete from art_carrito where id=ID_Articulo;
END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_delete_combo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE PROCEDURE `sp_delete_combo`(in id int)
BEGIN
delete from combo where id_combo=id;
END$$

DELIMITER ;




USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_crear_combo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE PROCEDURE `sp_crear_combo`(IN nombre_combo varchar(50))
BEGIN
insert into combo(combo.nombre_combo,combo.precio) values(nombre_combo,'0');

END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_crear_cliente`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_crear_cliente`(IN nombre VARCHAR(100), IN id int(9), in correo varchar(50),in contraseña int)
    NO SQL
begin
    start transaction;	
INSERT INTO usuario(nombre,identificador,correo,contraseña,tipo_usuario) values(nombre,id,correo,contraseña,'1');
insert INTO carrito(ID_Usuario) values(id);
end$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_comprar_combo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_comprar_combo`(in id int,in precio_ int)
BEGIN

declare nombreCliente_ varchar(50);
set nombreCliente_=(select nombre from usuario where id=identificador);
insert into ventashistorial (idCliente,fecha,precio) values(id,now(),precio_);
insert into informesventas (nombreCliente,idCliente,precio,fecha) values(nombreCliente_,id,precio_,now());
END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_comprar_articulo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_comprar_articulo`(IN `codigo` INT(4))
    NO SQL
SELECT articulos.codigo,articulos.nombre,articulos.precio
FROM articulos
WHERE articulos.codigo=codigo$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_añadir_prod_combo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_añadir_prod_combo`(IN id_combo int,IN id_art int)
BEGIN
insert into combo_articulos(combo_articulos.id_combo,combo_articulos.id_art) values(id_combo,id_art);

END$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_articulos_price_asc`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_articulos_price_asc`()
    NO SQL
SELECT * FROM `articulos`
GROUP BY `codigo`
ORDER BY `precio` ASC
LIMIT 3$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_agregar_a_carrito`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_agregar_a_carrito`(in id_carrito int, in id_art int)
BEGIN
insert into art_carrito(ID_Carrito,ID_Articulo) values(id_carrito, id_art);
END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_add_prod_combo`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_add_prod_combo`(IN id_combo int,IN id_art int)
BEGIN
declare precio_in int;
insert into combo_articulos(combo_articulos.id_combo,combo_articulos.id_art) values(id_combo,id_art);
set precio_in=(select precio from articulos where codigo=id_art);
update combo set combo.precio=combo.precio+precio_in where combo.id_combo=id_combo;

END$$

DELIMITER ;

USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `sp_actualizar_articulos`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `sp_actualizar_articulos`(IN `codigo` INT(4), IN `nombre` VARCHAR(50), IN `descripcion` VARCHAR(100), IN `precio` INT(10))
    NO SQL
UPDATE articulos 
SET articulos.nombre = nombre,
articulos.descripcion=descripcion,
articulos.precio= precio
WHERE codigo=articulos.codigo$$

DELIMITER ;


USE `b54994_lenguajes_proy2`;
DROP procedure IF EXISTS `crear_cliente`;

DELIMITER $$
USE `b54994_lenguajes_proy2`$$
CREATE  PROCEDURE `crear_cliente`(IN `nombre` VARCHAR(100), IN `contraseña` VARCHAR(25), IN `edad` INT(2), IN `genero` CHAR(1), IN `email` VARCHAR(50))
    NO SQL
INSERT INTO cliente (cliente.nombre,cliente.contraseña,cliente.edad,cliente.genero,cliente.email)VALUES(nombre,contraseña,edad,genero,email)$$

DELIMITER ;


call sp_crear_cliente('dabrin','305020244','dabrinltecr@gmail.com','2','12345');

insert into usuario(nombre,identificador,correo,tipo_usuario,contraseña)
values('dabrin','305020244','dabrinltecr@gmail.com','2','12345');

insert into usuario(nombre,identificador,correo,tipo_usuario,contraseña)
values('asdrubal','302890119','aruba@gmail.com','0','12345');


insert into rol(ID_User,Descripcion) values('302890119','Crear_Usuarios');

select*from rol;
select*from usuario;
call sp_ingresar_permiso_rol('3','302890119');
select ID_Rol from rol where rol.ID_User='302890119';

CREATE DEFINER=`laboratorios`@`%` PROCEDURE `sp_ver_compras`(in id int)
BEGIN
select nombreCliente,idCliente,precio,fecha from informesventas where id=idCliente;
END;

select*from usuario

call sp_crear_cliente('dab12','301230223','dabrrr_nb@gmail.com','12345');
insert into permiso(Descripcion) values('Gestion usuario');
insert into permiso(Descripcion) values('Gestion Producto');
insert into permiso(Descripcion) values('Gestion Informes');
insert into permiso(Descripcion) values('Gestión Combos');
insert into permiso(Descripcion) values('Gestión lista deseos');

call sp_ver_compras

create table informesventas (
nombreCliente varchar(100) not null,
idCliente int(7) not null,
precio int(10) not null,
fecha date not null)


























create table Fondo(
	c_localizacion int not null,
	Titulo varchar(40) not null,
	Editorial varchar(30) not null,
	F_Edicion datetime not null,
	Formato char(1) not null,
	N_Ejemplares int not null,
	Cod_Autor int not null
	)


	create table Ejemplar(
		c_localizacion int not null,
		numero int not null,
		Estado char(1)not null,
		Area int not null
	
	)

	create table Prestamo(
		N_socio int not null,
		c_localizacion varchar(5) not null,
		Numero int not null,
		F_Ini datetime not null,
		F_Dev datetime not null,
		Devuelto char(1)
	
	)

