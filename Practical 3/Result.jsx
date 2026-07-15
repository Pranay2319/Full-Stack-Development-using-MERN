function Result() {
  const java = 90;
  const python = 95;
  const react = 93;

  return (
    <div>
      <h2>Result</h2>

      <p>Total Marks : {java + python + react}</p>

      <p>
        Percentage : {(((java + python + react) / 300) * 100).toFixed(2)}%
      </p>

      <p>Grade : A+</p>
    </div>
  );
}

export default Result;
