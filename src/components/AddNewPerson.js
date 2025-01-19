import React, { useEffect, useRef, useState } from 'react'

const AddNewPerson = () => {
  const [userData, setUserData] = useState(null);
  const [newRow, setNewRow] = useState([]);

  const nameRef = useRef();
  const birthRef = useRef();
  const aadharRef = useRef();
  const mobileRef = useRef();
  const ageRef = useRef();
  
  useEffect( ()=> {
    const localData = JSON.parse(localStorage.getItem("user"));
    setUserData(localData);
  },[])

  // Delete all Information
  const handleDelete = (aadhar) => {
    const allData = JSON.parse(localStorage.getItem("user"));
    const searchedResult = allData.filter(
       (item) => item.Aadhar_Number !== aadhar
      );
    localStorage.setItem("user", JSON.stringify(searchedResult));
    setUserData(searchedResult);
  }

  // Save all the Information
  const saveData = (e)=> {
    e.preventDefault();
    let newData = {
      Name: nameRef.current.value,
      Date_of_birth: birthRef.current.value,
      Aadhar_Number: aadharRef.current.value,
      Mobile_Number: mobileRef.current.value,
      Age: ageRef.current.value
    }
    const sessionData = JSON.parse(localStorage.getItem("user"));
    if(sessionData === null){
      localStorage.setItem("user", JSON.stringify([newData]))
    }
    else{
      const updateSessionData = [...sessionData, newData];
      localStorage.setItem("user", JSON.stringify(updateSessionData));
      setUserData(updateSessionData);
      setNewRow([]);
    }
  }

  // Calculate Age
  const calculateAge = (e)=> {
    const dateArr = e.target.value.split("-");
    ageRef.current.value = new Date().getFullYear() - dateArr[0];
  }

  // Add Row Button 
  const AddRow = ()=> {
    const emptyRow = [
      {Name: "", Data_of_birth: "", Aadhar_Number: "", Mobile_Number: ""}
    ];
    setNewRow(emptyRow);
  }
  
  return (
    <div className='addNewPerson'>
      <div>
        <h4 className='page-title'>Add New Person</h4>
      </div>

      <table rules='all' frame="box">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {userData === null ? (
          <tr>
            <th colSpan="6">No data</th>
          </tr>
        ) :
            (
              userData.map( (item)=> {
                return (
                <tr key={item.Aadhar_Number}>
                  <td>{item.Name}</td>
                  <td>{item.Date_of_birth}</td>
                  <td>{item.Aadhar_Number}</td>
                  <td>{item.Mobile_Number}</td>
                  <td>{item.Age}</td>
                  <td>
                    <button className='row-btn' onClick={()=> handleDelete(item.Aadhar_Number)}>Delete</button>
                  </td>
                </tr>
                );
              })
            )

          }
        </tbody>
      </table>

      {
      newRow.length === 0 ? "" : 
       newRow.map( (item, idx)=> {
        return (
          // New Form is created
          <div key={idx} className='form-container'>
            <h3 style={{textAlign: 'center'}}>Fill below form for New Entry</h3>
           
            <form onSubmit={ (e)=> saveData(e)}>
              <input
              ref={nameRef}
              type='text'
              placeholder='Name'
              defaultValue={item.Name}
              required
              />
              <input
              onChange={ (e)=> calculateAge(e)}
              defaultValue={item.Date_of_birth}
              type='date'
              ref={birthRef}
              required
              />
              <input
              defaultValue={item.Aadhar_Number}
              type='number'
              placeholder='Aadhar number'
              min="100000000000"
              max="999999999999"
              ref={aadharRef}
              required
              />
              <input
              defaultValue={item.Mobile_Number}
              type='number'
              placeholder='Mobile number'
              min="1000000000"
              max="9999999999"
              ref={mobileRef}
              required
              />
              <input
              defaultValue={item.Age}
              placeholder='Age'
              ref={ageRef}
              disabled={true}
              />
              <input type='submit' className='row-btn' value="Save"/>
            </form>

          </div>
        )
       })

      }

      <button className='add-btn' onClick={ ()=> AddRow()}>Add</button>

    </div>
  )
}

export default AddNewPerson