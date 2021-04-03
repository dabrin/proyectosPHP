CREATE DATABASE PROYECTO
USE PROYECTO


CREATE TABLE BECA(
	idBeca INT IDENTITY(1,1)NOT NULL,
	tipoBeca VARCHAR,
	ponderado float,
	dinero float,
	CONSTRAINT pk_idBeca PRIMARY KEY(idBeca)
)

CREATE TABLE CARRERA(
	idCarrera VARCHAR(9)NOT NULL,
	nombre VARCHAR(80),
	cantidadCursos int,
	CONSTRAINT pk_idCarrera PRIMARY KEY(idCarrera)

	) 
CREATE TABLE ESTUDIANTE(
	idEstudiante VARCHAR(10) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(30),
	edad TINYINT,
	correo VARCHAR(50),
	ponderado FLOAT,
	idBeca INT FOREIGN KEY REFERENCES BECA(idBeca),
	idCarrera VARCHAR(9) FOREIGN KEY REFERENCES CARRERA(idCarrera), 
	CONSTRAINT pk_idEstudiante PRIMARY KEY(idEstudiante)

)
CREATE TABLE CURSOS(
	siglaCurso VARCHAR(9) NOT NULL,
	nombre VARCHAR(30),
	cantidadEstudiantes INT,
	requisitos VARCHAR(9),
	idCarrera VARCHAR(9) FOREIGN KEY REFERENCES CARRERA(idCarrera),
	CONSTRAINT pk_siglaCurso PRIMARY KEY(siglaCurso)
)
CREATE TABLE CURSOS_APRO(
	idEstudiante VARCHAR(10) FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante), 
	siglaCurso VARCHAR(9) FOREIGN KEY REFERENCES CURSOS(siglaCurso), 
)
CREATE TABLE PROFESOR(
	idProfesor VARCHAR(9) NOT NULL,
	nombre VARCHAR(20),
	apellido VARCHAR(30),
	titulo VARCHAR(50),
	CONSTRAINT pk_idProfesor PRIMARY KEY(idProfesor)
)
CREATE TABLE GRUPO(
	idGrupo INT NOT NULL,
	cantidadEst INT,
	horario VARCHAR(100),
	siglaCurso VARCHAR(9) FOREIGN KEY REFERENCES CURSOS(siglaCurso), 
	idEstudiante VARCHAR(10) FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
	idProfesor VARCHAR(9) FOREIGN KEY REFERENCES PROFESOR(idProfesor),
	CONSTRAINT pk_idGrupo PRIMARY KEY(idGrupo)
)
CREATE TABLE PREMATRICULA(
	idPrematricula INT IDENTITY NOT NULL,
	cantidad INT,
	idEstudiante VARCHAR(10) FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
	siglaCurso VARCHAR(9) FOREIGN KEY REFERENCES CURSOS(siglaCurso),
	CONSTRAINT pk_idPrematricula PRIMARY KEY(idPrematricula)
)
CREATE TABLE MATRICULA(
	idMatricula INT IDENTITY,
	pagoUno float,
	pagoDos float,
	idEstudiante VARCHAR(10) FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
	siglaCurso VARCHAR(9) FOREIGN KEY REFERENCES CURSOS(siglaCurso),
	CONSTRAINT pk_idMatricula PRIMARY KEY(idMatricula)
)
CREATE TABLE REUBICACION(
	idReubicacion INT IDENTITY(1,1),
	lugarResidencia VARCHAR(80),
	lugarReubicacion VARCHAR(80),
	dinero float,
	CONSTRAINT pk_idReubicacion PRIMARY KEY(idReubicacion)
)
CREATE TABLE ALIMENTACION(
	idAlimentacion INT IDENTITY(1,1),
	dinero float,
	CONSTRAINT pk_idAlimentacion PRIMARY KEY(idAlimentacion)
)
CREATE TABLE TRANSPORTE(
	idTransporte INT IDENTITY(1,1),
	dinero float,
	CONSTRAINT pk_idTransporte PRIMARY KEY(idTransporte)
)
CREATE TABLE SALUD(
	idSalud INT IDENTITY(1,1),
	idEstudiante VARCHAR(10) FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
	fecha DATE,
	servicioMedico bit,
	servicioOdonto bit,
	factura float,
	CONSTRAINT pk_idSalud PRIMARY KEY(idSalud)
)
CREATE TABLE COMPLEMENTOS(
	idEstudiante VARCHAR(10) FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
	idReubicacion INT FOREIGN KEY REFERENCES REUBICACION(idReubicacion),
	idAlimentacion INT FOREIGN KEY REFERENCES ALIMENTACION(idAlimentacion),
	idTransporte INT FOREIGN KEY REFERENCES TRANSPORTE(idTransporte)
)