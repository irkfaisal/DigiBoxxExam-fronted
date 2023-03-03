
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import CandidateList from './component/CandidateList/CandidateList';
import CandidateDetais from './component/CandidateDetails/CandidateDetais';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            {/* Protected Routing start */}
            <Route path='/signin' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/candidateList' element={<CandidateList />} />
            <Route path='/candidateDetails' element={<CandidateDetais />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
