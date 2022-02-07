import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<AddShoppingCartIcon />}
          size="large"
          onClick={() => alert("Hello! You just clicked.")}
          variant="contained"
          color="primary"
        >
          Testing MUI Button
        </Button>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

// #6200EE
