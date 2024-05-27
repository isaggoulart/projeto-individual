drop database de_barriga_cheia;
create database de_barriga_cheia;
use de_barriga_cheia;

create table usuario (
id int primary key auto_increment,
nome varchar(100),
tipoComida varchar (30),
dtNasc date, 
email varchar(45),
senha varchar(45)
);

create table tentativa (
idTentativa int auto_increment,
fkUsuario int,
primary key (idTentativa, fkUsuario),
foreign key (fkUsuario) references usuario (id),
inicio datetime default current_timestamp,
fim datetime default current_timestamp,
pontos int
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


select * from usuario;

select tipoComida
from usuario group by tipoComida
order by count(*) desc 
limit 1;
