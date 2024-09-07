import React, { useMemo, useState } from 'react';
import styled from "styled-components";
import bg from '../src/img/bg.jpg';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Incomes/Incomes';
import Expenses from './Components/Expenses/Expenses';
// import Transaction from './Components/Transactions/Transactions';
import { useGlobalContext } from './context/GlobalContext';

function App() {
  const [active, setActive] = useState(1);
  const [navOpen, setNavOpen] = useState(false);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />

      // case 2:
      //   return <Transaction />

      case 3:
        return <Income />

      case 4:
        return <Expenses />

      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <MainLayoutStyled>
        <Navigation
          active={active}
          setActive={setActive}
          isOpen={navOpen}
          onToggle={handleNavToggle}
        />
        <MainContentStyled isOpen={navOpen}>
          {displayData()}
        </MainContentStyled>
      </MainLayoutStyled>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
`;

const MainLayoutStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const MainContentStyled = styled.main`
  flex: 1;
  background: rgba(229, 238, 251, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 0px;
  overflow-x: hidden;
  padding: 20px;
  margin-left: ${(props) => (props.isOpen ? '250px' : '60px')}; /* Adjust based on nav open state */
  transition: margin-left 0.3s ease; /* Smooth transition */

  /* Media Queries */
  @media (max-width: 1200px) {
    margin-left: ${(props) => (props.isOpen ? '200px' : '60px')};
  }

  @media (max-width: 992px) {
    margin-left: ${(props) => (props.isOpen ? '150px' : '60px')};
  }

  @media (max-width: 768px) {
    margin-left: ${(props) => (props.isOpen ? '200px' : '60px')};
    padding: 15px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    margin-left: ${(props) => (props.isOpen ? '80px' : '60px')};
    padding: 10px; /* Adjust padding for very small screens */
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default App;
