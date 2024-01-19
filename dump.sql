CREATE TABLE funcoes (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    senha VARCHAR(150) NOT NULL,
    email text NOT NULL,
    funcao INTEGER REFERENCES funcoes(id)
);

INSERT INTO funcoes (descricao) VALUES ('Proprietário(a)'), ('Cozinheira'), ('Recepcionista'), ('Administrador(a)');

CREATE TABLE sistemaDeMedidas (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(20)
);

CREATE TABLE ingredientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco INT NOT NULL,
    quantidadeEmbalagem INT,
    sistemaDeMedida INT REFERENCES sistemaDeMedidas(id)
);

INSERT INTO sistemaDeMedidas (descricao) VALUES ('Kg'), ('g'), ('l'), ('ml');