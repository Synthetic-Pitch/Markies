import { useContext, useEffect, useRef, useState } from 'react';
import './Filtered.css';
import PropTypes from 'prop-types';
import { MyContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Filtered = ({ items }) => {
  const { Order, setOrder } = useContext(MyContext);
  const [Modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const ModalRef = useRef();
  const [shownItems, setShownItems] = useState(new Set());
  const navigate = useNavigate()
  
  const handleOrder = (item) => {
    const newItem = {
      name: item.name,
      source: item.source,
      price: item.price,
      quantity:1,
    };
    const itemExists = Order.some(orderItem => 
      orderItem.name === newItem.name && 
      orderItem.price === newItem.price && 
      orderItem.source === newItem.source
    );

    if (!itemExists) {
      setOrder([...Order, newItem]);
      navigate('/cart')
    } else if (!shownItems.has(newItem.name)) {
      setModalMessage('Already in the cart');
      setModal(true);
      setShownItems(new Set(shownItems).add(newItem.name));
      navigate('/cart')
    }
  };
  
  useEffect(() => {
    if (Modal) {
      ModalRef.current.showModal();
      const timer = setTimeout(() => {
        ModalRef.current.close();
        setModal(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [Modal]);

  return (
    <div className='filtered-container'>
      <div className="filter-phase">
        <div className='filter-price'>
          {items[0]?.price}
        </div>
        <div className='filter-img-container'>
          <img src={items[0]?.source} alt="image" />
        </div>
        <div className='filter-name'>{items[0]?.name}</div>
        <button onClick={() => handleOrder(items[0])}>order now</button>
      </div>
      
      {items[1]?.name && (
        <div className="filter-phase">
          <div className='filter-price'>
            {items[1]?.price}
          </div>
          <div className='filter-img-container'>
            <img src={items[1]?.source} alt="image" />
          </div>
          <div className='filter-name'>{items[1]?.name}</div>
          <button onClick={() => handleOrder(items[1])}>order now</button>
        </div>
      )}

      <dialog ref={ModalRef}>
        <p>{modalMessage}</p>
      </dialog>
    </div>
  );
};

Filtered.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      source: PropTypes.string,
    })
  ).isRequired,
};

export default Filtered;
