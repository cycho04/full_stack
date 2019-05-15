import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserActions from '../UserActions/UserActions';
import MainModal from '../MainModal/MainModal';

function App() {
  return (
    <div>
      <Header />
      <MainModal />
      <UserActions />
      <Footer />
    </div>
  );
}

export default App;
