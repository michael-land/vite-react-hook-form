import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const form = useForm();

  return (
    <div className="App">
      <form
        onSubmit={form.handleSubmit((values: any) => {
          console.log(values);
        })}
      >
        <input name="2" ref={form.register} />
      </form>
    </div>
  );
}

export default App;
