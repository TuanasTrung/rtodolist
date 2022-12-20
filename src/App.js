import './App.css';
import React, { useState, useEffect } from 'react';
import TickIcon from '../src/icon/TickIcon';

const App = () => {

  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [id, setId] = useState('0')
  const [jobs, setJobs] = useState([])

  const handleSubmit = () => {
    const array = jobs;
    array.push({id: id, title: title, descreption: des, isCheck: false });
    const id = id + 1;
    setJobs([...array]);

    setTitle('')
    setDes('')
    console.log(id)
  }

  const handleUpdate = (index) => {
    
  }

  const handleDelete = (index) => {
    const array = jobs;
    const newID = index.title;
    console.log(newID);
  }

  const handleChecked = (index) => {
    const array = jobs;
    array[index].isCheck = !jobs[index].isCheck;
    setJobs([...array])

    setTitle()
  }

  return (
    <div className="App">
      <div className="form">
        <div className="form-left">
          <input
            placeholder='Enter title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            placeholder='Enter descreption'
            value={des}
            onChange={e => setDes(e.target.value)} />
          <div className='btn'>
            <button onClick={handleSubmit}>Thêm</button>
            <button onClick={() => handleUpdate()}>Sửa</button>
            <button onClick={() => handleDelete()}>Xóa</button>
          </div>
        </div>
        <div className="form-right">
          <div className='title'>
            <h1>CSS3 To-Do List</h1>
          </div>
          <div className='list'>
            <ul>
              {jobs.map((item, index) => (
                <li key={index} onClick={() => handleChecked(index)} style={{ background: item.isCheck ? '#6F3C5E' : '#B36773' }}>
                  <div className='border'>
                    <div className='content'>
                      <h2 style={{ color: item.isCheck ? '#C68288' : 'white' }}>{item.title}</h2>
                      <span style={{ color: item.isCheck ? '#B77F74' : 'white' }}>{item.descreption}</span>
                    </div>
                    <div className='circle'>
                      <div className='stick' style={{ background: item.isCheck ? '#D7837C' : 'white' }}>
                        <TickIcon fill="#4F2C4F" style={{ width: '20px', display: item.isCheck ? 'block' : 'none' }} />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
