import {Routes,Route} from 'react-router-dom';
import Meal from './components/Meal';
import Recipeinfo from './components/Recipeinfo';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Meal />} />
          <Route path='/:MealId' element={<Recipeinfo />} />
      </Routes>
    </>
  );
}

export default App;
