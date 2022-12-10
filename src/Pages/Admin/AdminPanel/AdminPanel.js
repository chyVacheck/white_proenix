
//? стили
import './AdminPanel.css';
//? компоненты
// личные
import AllUsers from './AllUsers/AllUsers.jsx';
import AllTransactionHistory from './AllTransactionHistory/AllTransactionHistory.jsx';
import CurrentTransaction from './CurrentTransaction/CurrentTransaction.jsx';

function AdminPanel({ popupValid }) {

  return (
    <section className='adminPanel'>
      {/*//? история транзакций */}
      <AllTransactionHistory class='adminPanel__container' />

      {/*//? активные транзакции */}
      <CurrentTransaction class='adminPanel__container' />

      {/*//? все пользователи */}
      <AllUsers popupValid={popupValid} class='adminPanel__container' />

    </section>
  )
}

export default AdminPanel;