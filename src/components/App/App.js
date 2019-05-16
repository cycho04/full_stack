import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserActions from '../UserActions/UserActions';
import MainModal from '../MainModal/MainModal';
import Cards from '../Cards/Cards';

function App() {
  return (
    <div>
      <Header />
      <MainModal />
      <Cards />
      <UserActions />
      <Footer />
    </div>
  );
}

export default App;
