import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        title="hello world"
        variant="primary"
        onClick={() => {
          console.log("primary hello world");
        }}
      />
      <Button
        title="hello world"
        variant="secondary"
        onClick={() => {
          console.log("secondary button");
        }}
      />
    </>
  );
}

export default App;
