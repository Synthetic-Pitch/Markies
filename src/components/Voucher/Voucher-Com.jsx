import './Voucher.css'
import VoucherMap from './Voucher-Map'
import { useContext } from 'react'
import { MyContext } from '../../Context/GlobalContext'

const VoucherCom = () => {
  const { VoucherToUse, setVoucherToUse, setVoucherAvail } = useContext(MyContext)
 
  
  const handleNavigate = () => {
   console.log('hello')
  }
  

  return (
    <div className="voucher-com">
      <p>Vouchers to claim</p>
      {
        VoucherToUse.map((item, i) => (
          <VoucherMap 
            key={i} 
            index={i} 
            item={item} 
            setVoucherToUse={setVoucherToUse} 
            VoucherToUse={VoucherToUse} 
            setVoucherAvail={setVoucherAvail}
          />
        ))
      }
      {
        VoucherToUse.length === 0 && 
        <div onClick={handleNavigate} className='no-vouchers'>
          Come back next time for more vouchers!
        </div>
      }
    </div> 
  )
}

export default VoucherCom
