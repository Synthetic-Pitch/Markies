import "./Beverages.css";
import BeveragesData from "../../assets/product-images/Beverages";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/GlobalContext";
import Filtered from "../Filtered/Filtered";
import MainMenuFooter from "../Footer/Main-Menu-Footer";

const chunkArray = (arr, chunkSize) => {
  const chunkedData = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedData.push(arr.slice(i, i + chunkSize));
  }
  return chunkedData;
};

const BeveragesCom = () => {
  const { UserInput } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState(BeveragesData);
  const chunkSize = 2;

  useEffect(() => {
    const filtered = BeveragesData.filter((item) =>
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

export default BeveragesCom;
