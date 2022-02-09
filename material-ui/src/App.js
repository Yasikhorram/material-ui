import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ButtonGroup from "@mui/material/ButtonGroup";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

function CheckboxTest() {
  return (
    <div>
      <Checkbox />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField variant="filled" color="secondary" type="date" />
        <TextField variant="filled" color="secondary" type="time" />

        <CheckboxTest />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<AddShoppingCartIcon />}
            onClick={() => alert("Added to shopping card.")}
          >
            Testing MUI Button
          </Button>
          <Button
            startIcon={<CancelPresentationOutlinedIcon />}
            onClick={() => alert("Removed from shopping card")}
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
