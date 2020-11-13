import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar></NavBar>
        <BookList></BookList>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
