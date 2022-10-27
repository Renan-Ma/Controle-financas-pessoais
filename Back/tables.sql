CREATE TABLE financas_users(
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
)

CREATE TABLE financas_gastos(
    id VARCHAR(255) PRIMARY KEY,
    date DATE NOT NULL,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    author_id VARCHAR(255),
    foreign key (author_id) references financas_users (id)
);