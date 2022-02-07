import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ButtonGroup from "@mui/material/ButtonGroup";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button
            startIcon={<AddShoppingCartIcon />}
            size="large"
            onClick={() => alert("Added to shopping card.")}
            variant="contained"
            color="primary"
          >
            Testing MUI Button
          </Button>
          <Button
            startIcon={<CancelPresentationOutlinedIcon />}
            size="large"
            onClick={() => alert("Removed from shopping card")}
            variant="contained"
            color="secondary"
          >
            Testing MUI Button
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

// #6200EE
