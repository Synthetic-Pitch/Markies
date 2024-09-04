/* eslint-disable react/prop-types */

const VoucherMap = ({ item, index, setVoucherToUse, VoucherToUse,setVoucherAvail }) => {
  
  const handleClaim = () => {
    const updatedVoucherToUse = VoucherToUse.filter((s, i) => i !== index);
    const addToVoucherAvail = {
      source: item.source,
      discount: item.discount,
      shipping: item.shipping
    }
    setVoucherAvail(prevArr => [...prevArr,addToVoucherAvail])
    setVoucherToUse(updatedVoucherToUse);
  };

  return (

    <div className="voucher-map">
      <div className="voucher-container">
        <div className="v-p-1">
          <img src={item.source} alt="voucher" />
        </div>
        <div className="v-p-2">
          <button onClick={handleClaim}>
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoucherMap;
