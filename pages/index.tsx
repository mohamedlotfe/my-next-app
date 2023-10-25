import { useState } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [result, setResult] = useState("");

  const executeScript = async () => {
    try {
      const response = await fetch("/api/executeScript");
      const data = await response.json();
      setResult(
        data.success
          ? "Script executed successfully"
          : "Script execution failed"
      );
    } catch (error) {
      setResult("An error occurred while executing the script");
    }
  };

  return (
    <>
      <button className={styles.button} onClick={executeScript}>
        Execute Script
      </button>
      <textarea
        className={styles.textarea}
        value={result}
        disabled
        placeholder="result"
      />
    </>
  );
}
