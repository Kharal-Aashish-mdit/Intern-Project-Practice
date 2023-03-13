import { useContext } from 'react';

import Counter from '../../components/complexComp/counter';
import { ThemeContext } from '../../store/ThemeContext';
import MainWrapper from '../../Layout/MainWrapper';

const HomePage = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <MainWrapper>
      <h2 className='text-2xl'>This is Home Page</h2>
      <Counter />
      <button onClick={() => themeContext?.themeToggler()}>Toggle Theme</button>
    </MainWrapper>
  );
};
export default HomePage;
