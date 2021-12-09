import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, ResetPassword, Registration, Home, NewBet, NotFound} from '@components/index';

import { Account } from '@pages/Account';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-bet" element={<NewBet />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
