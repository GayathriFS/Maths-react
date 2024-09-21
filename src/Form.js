import { useState } from "react"

function Component() 
{

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
  
    const handleNum1Change = (event) => {
      setNum1(event.target.value);
    };
  
    const handleNum2Change = (event) => {
      setNum2(event.target.value);
    };
  
    const handleAddSubmit = (event) => {
      event.preventDefault();
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`The Sum is: ${sum}`);
    };
  
    const handlesubSubmit = (event) => {
        event.preventDefault();
        const sub = parseFloat(num1) - parseFloat(num2);
        setResult(`The Subtraction is: ${sub}`);
      };
      const handledivSubmit = (event) => {
        event.preventDefault();
        const div = parseFloat(num1) / parseFloat(num2);
        setResult(`The Divided value is: ${div}`);
      };
    
    return (
        <div className="add-numbers-container">
        <form>
          <label>Number 1:</label>
          <input 
            type="number" 
            value={num1} 
            onChange={handleNum1Change}
          />
          <br />
          <label>Number 2:</label>
          <input 
            type="number" 
            value={num2} 
            onChange={handleNum2Change}
          />
          <br />
          <button type="submit"  onClick={handleAddSubmit}>ADD</button>
          <button type="submit" onClick={handlesubSubmit}>SUB</button>
          <button type="submit" onClick={handledivSubmit}>DIVIDE</button>
        </form>
        <h1>{result}</h1>
      </div>
    );
  
}

export default Component