CREATE TABLE Books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INTEGER REFERENCES Authors(id) ON DELETE SET NULL,  -- Lien avec la table Authors
    category_id INTEGER REFERENCES Categories(id) ON DELETE SET NULL, -- Lien avec la table Categories
    publication_date DATE,
    isbn VARCHAR(20) UNIQUE,
    price NUMERIC(10, 2),
    stock_quantity INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    birthdate DATE,
    bio TEXT
);

INSERT INTO Categories (name) VALUES
('Science-fiction'),
('Fantasy'),
('Romance'),
('Mystery');

INSERT INTO Authors (name, birthdate, bio) VALUES
('Isaac Asimov', '1920-01-02', 'Isaac Asimov was an American author and professor of biochemistry, known for his works of science fiction.'),
('J.K. Rowling', '1965-07-31', 'J.K. Rowling is a British author best known for the Harry Potter series.');

INSERT INTO Books (title, author_id, category_id, publication_date, isbn, price, stock_quantity) VALUES
('Foundation', 1, 1, '1951-06-01', '978-0-553-80371-0', 15.99, 100),
('Harry Potter and the Sorcerer\'s Stone', 2, 2, '1997-06-26', '978-0-7475-3269-9', 12.99, 200);
