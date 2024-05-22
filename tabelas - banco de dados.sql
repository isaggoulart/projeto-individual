drop database de_barriga_cheia;
create database de_barriga_cheia;
use de_barriga_cheia;

create table usuario (
idUsuario int primary key auto_increment,
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
foreign key (fkUsuario) references usuario (idUsuario),
inicio datetime,
fim datetime,
pontos int
);

create table mensagem (
idMensagem int auto_increment,
fkUsuario int,
primary key (idMensagem, fkUsuario),
foreign key (fkUsuario) references usuario (idUsuario),
titulo varchar(45),
descricao varchar(250)
);


select * from usuario;

select tipoComida
from usuario group by tipoComida
order by count(*) desc 
limit 1;
