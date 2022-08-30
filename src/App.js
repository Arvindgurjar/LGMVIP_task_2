import './index.css';
import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [alldata, setdata] = useState([])
  const [load, setload] = useState(false)
  const getdata = async () => {
    try {
      const responce = await fetch("https://reqres.in/api/users?page=1")
      const data1 = await responce.json();
      /* console.log(data1.data); */
      setdata(data1.data);
      setload(false);
    }
    catch (err) {
      console.log(err);
    }
  }
  const fun = () => {
    setload(true)

    setTimeout(getdata, 2000);
    clearTimeout(2000);
  }



  return (
    <>
      <div className='nav'>
        <h3 style={{ marginLeft:"6%",marginRight:"auto" }}>Navber Brand</h3>
        <button className="btn btn-primary px-sm-5" onClick={fun} style={{ marginRight:"7%",marginLeft:"auto",fontWeight:"bold" }}>Get Data</button>
      </div>
      {
        load ? (<div className='Loading'><button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span className="visually-hidden">Loading...</span>
        </button>
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button></div>) :
          (<div className="container mt-5">
            <div className="row justify-content-center">
              {alldata.map((val) => {
                return (<div key={val.id} className="showdata my-sm-4 col-sm-4 col-md-3 col-xl-3">
                  <h5>{val.first_name}  {val.last_name}</h5>
                  <p>{val.email}</p>
                  <img src={val.avatar} alt="Error" />
                </div>)
              })}
            </div>
          </div>)
      }





    </>


  );
}

export default App;
