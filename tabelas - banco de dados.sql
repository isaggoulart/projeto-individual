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

select * from tentativa;


select usuario.nome,
tentativa.pontos as Pontuação
from tentativa join usuario on fkUsuario = id
order by pontos desc
limit 10;

truncate table tentativa;

select tipoComida as TipoComida,  count(tipoComida) as Contagem
from usuario
group by tipoComida;

SELECT 
    COUNT(CASE WHEN pontos <= 15 THEN 1 END) AS MenosMetade,
    COUNT(CASE WHEN pontos > 15 THEN 1 END) AS MaisMetade
FROM tentativa;


