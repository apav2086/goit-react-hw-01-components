import s from './style.module.css';
import PropTypes from "prop-types";
export default function TransactionHistory(props) {
    console.log(props.items);
    return (
        <div>
        <table className={s.transactionHistory}>
  <thead className={s.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

          <tbody>
            {props.items.map(item => (
            <tr key={item.id}>
                <td className={s.type}>{item.type}</td>
      <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
   ))} 
                
  </tbody>
</table>
        </div>
    );
}
TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}