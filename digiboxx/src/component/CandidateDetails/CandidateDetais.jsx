import React from 'react'
import './CandidateDetails.css'

const CandidateDetais = () => {
  return (
    <>
      <nav id="nav">
        <h5>Md Faisal Raza Khan</h5>
      </nav>
      <div className='con'>
        <div class="card">
          <div class="img">
            <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div class="infos">
            <div class="name">
              <h2>Bradley Steve</h2>
              <h4>@bradsteve</h4>
            </div>
            <ul class="stats">
              <li>
                <form action="/">
                  <label for="img">Upload Resume:</label>
                  <input type="file" id="pdf" name="pdf" accept="pdf/*" />
                  <input type="submit" id='btnSub' />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CandidateDetais