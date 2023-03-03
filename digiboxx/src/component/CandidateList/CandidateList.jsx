import React from 'react'
import './Candidate.css'
import { useNavigate } from "react-router-dom";
const CandidateList = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav id="nav">
                <h5>Candidate List</h5>
                <h5>Md Faisal Raza Khan</h5>
            </nav>
            <div className='con'>
                <div class="card" onClick={() => navigate(`/candidateDetails`)}>
                    <div class="img">
                        <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div class="infos" >
                        <div class="name">
                            <h2>Bradley Steve</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateList