import React, {useState} from 'react';
import {FrontCard, BackCard, Form, Success, Layout} from "./components";

function App() {
    const [success, setSuccess] = useState(false);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [month, setMonth] = useState("");
    const [yearName, setYear] = useState("");
    const [cvcName, setCvcName] = useState("");

  return (
      <>
          <FrontCard name={name}
                     number={number}
                     month={month}
                     year={yearName}
                     />

          <BackCard cvc={cvcName}/>

          <Layout>
              {success
                  ? <Success setSuccess={setSuccess}/>
                  : <Form setName={setName}
                          setNumber={setNumber}
                          setMonth={setMonth}
                          setYear={setYear}
                          setSuccess={setSuccess}
                          setCvcName={setCvcName}/>}

          </Layout>
      </>
  );
}

export default App;
