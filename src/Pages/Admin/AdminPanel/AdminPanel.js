
//? стили
import './AdminPanel.css';
//? компоненты
// личные
import AllUsers from './AllUsers/AllUsers.jsx';
import AllTransactionHistory from './AllTransactionHistory/AllTransactionHistory.jsx';
import CurrentCryptocurrencyRate from './CurrentCryptocurrencyRate/CurrentCryptocurrencyRate';
import CurrentTransaction from './CurrentTransaction/CurrentTransaction.jsx';

function AdminPanel({ popupValid }) {

  return (
    <section className='adminPanel'>
      <div className='adminPanel__column'>
        {/*//? текущий курс на бинансе и на сайте */}
        <CurrentCryptocurrencyRate class='adminPanel__container' />

        {/*//? история транзакций */}
        <AllTransactionHistory class='adminPanel__container' />
      </div>

      {/*//? активные транзакции */}
      <CurrentTransaction popupValid={popupValid} class='adminPanel__container' />

      {/*//? все пользователи */}
      <AllUsers popupValid={popupValid} class='adminPanel__container' />

    </section>
  )
}

export default AdminPanel;