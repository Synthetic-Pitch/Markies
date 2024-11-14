import "./Desert.css";
import DesertData from "../../assets/product-images/Desert.js";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/GlobalContext.jsx";
import Filtered from "../Filtered/Filtered.jsx";
import MainMenuFooter from "../Footer/Main-Menu-Footer.jsx";

// Function to chunk an array into subarrays of specified size
const chunkArray = (arr, chunkSize) => {
  const chunkedData = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedData.push(arr.slice(i, i + chunkSize));
  }
  return chunkedData;
};

const DesertCom = () => {
  const { UserInput } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState(DesertData);
  const chunkSize = 2;

  useEffect(() => {
    const filtered = DesertData.filter((item) =>
      item.name.toLowerCase().startsWith(UserInput.toLowerCase())
    );
    setFilteredData(filtered);
  }, [UserInput]);

  const chunkedData = chunkArray(filteredData, chunkSize);

  return (
    <div className="main-menu-com">
      <div className="main-menu-container">
        {chunkedData.length > 0 ? (
          chunkedData.map((chunk, i) => <Filtered key={i} items={chunk} />)
        ) : (
          <p className="no-items-found">No items found</p>
        )}
      </div>
      <MainMenuFooter />
    </div>
  );
};

export default DesertCom;
