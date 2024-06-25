CREATE DATABASE loja_Doces;

USE loja_doces;

CREATE TABLE categorias(
id_cat INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_categoria VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS `loja_doces`.`doces` (
  `id_doce` INT NOT NULL AUTO_INCREMENT,
  `nome_doce` VARCHAR(45) NOT NULL,
  `id_cat` INT(11) NOT NULL,
  PRIMARY KEY (`id_doce`, `id_cat`),
  INDEX `fk_doces_categorias_idx` (`id_cat` ASC),
  CONSTRAINT `fk_doces_categorias`
    FOREIGN KEY (`id_cat`)
    REFERENCES `loja_doces`.`categorias` (`id_cat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO categorias VALUES(
NULL,
"Bolos"
);

INSERT INTO categorias VALUES(
NULL,
"Tortas"
);

INSERT INTO categorias VALUES(
NULL,
"Doces Finos"
);

INSERT INTO categorias VALUES(
NULL,
"Doces Tradicionais"
);

SELECT * FROM categorias;

SELECT * FROM doces;

CREATE TABLE doces(
id_doce INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_doce VARCHAR(45) NOT NULL,
id_cat INT NOT NULL,
INDEX `fk_doces_categorias_idx` (`id_cat` ASC),
  CONSTRAINT `fk_doces_categorias`
    FOREIGN KEY (`id_cat`)
    REFERENCES `loja_doces`.`categorias` (`id_cat`)
);