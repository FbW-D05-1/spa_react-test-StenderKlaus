import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="book-table">
      <h1>Game of Thrones Books</h1>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Number of Pages</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.url}>
              <td>{book.name}</td>
              <td>{book.authors.join(", ")}</td>
              <td>{book.numberOfPages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
