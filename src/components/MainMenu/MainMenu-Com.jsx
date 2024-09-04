import { useEffect, useState, useContext } from 'react';
import MainMenuData from '../../assets/product-images/MainMenu';
import './Main-Menu-Com.css';
import { MyContext } from '../../Context/GlobalContext';
import Filtered from '../Filtered/Filtered';
import MainMenuFooter from '../Footer/Main-Menu-Footer';

// Function to chunk an array into subarrays of specified size
const chunkArray = (arr, chunkSize) => {
  const chunkedData = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedData.push(arr.slice(i, i + chunkSize));
  }
  return chunkedData;
};

const MainMenuCom = () => {
  const { UserInput } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState(MainMenuData);
  const chunkSize = 2; // Adjust as needed
  
  useEffect(() => {
    const filtered = MainMenuData.filter(item =>
      item.name.toLowerCase().startsWith(UserInput.toLowerCase())
    );
    setFilteredData(filtered);
  }, [UserInput]);
  
  const chunkedData = chunkArray(filteredData, chunkSize);
  
  return (
    <div className='main-menu-com'>
      <div className='main-menu-container'>
        {chunkedData.length > 0 ? (
          chunkedData.map((chunk, i) => (
            <Filtered key={i} items={chunk}/>
          ))
        ):(
          <p className='no-items-found'>No items found</p>
        )}
      </div>
      <MainMenuFooter/>
    </div>
  );
};

export default MainMenuCom;