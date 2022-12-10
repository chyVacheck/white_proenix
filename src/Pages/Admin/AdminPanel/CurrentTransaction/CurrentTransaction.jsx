
//? стили
import './CurrentTransaction.css';

function CurrentTransaction(props) {

  const className = props.class + ' currentTransaction';


  return (
    <section className={className}>
      {/* header - info */}
      <div className='currentTransaction__columns-names'>
        <p className='currentTransaction__column-name'>Couple</p>
        <p className='currentTransaction__column-name'>Will come</p>
        <p className='currentTransaction__column-name'>Need to send</p>
        <p className='currentTransaction__column-name'>Timer</p>
      </div>
      {/* all current transaction */}
      <div className='currentTransaction__all-new-transactions'>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>
        <div className='currentTransaction__transaction'>
          <p className='currentTransaction__transaction-text'>MATIC / USDT</p>
          <p className='currentTransaction__transaction-text'>1500.20</p>
          <p className='currentTransaction__transaction-text'>400,20</p>
          <p className='currentTransaction__transaction-text'>2:15</p>
        </div>

      </div>

    </section >
  )
}

export default CurrentTransaction;