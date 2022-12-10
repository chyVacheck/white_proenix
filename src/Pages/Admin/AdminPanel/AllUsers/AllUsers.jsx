
//? стили
import './AllUsers.css';
//* react
import { useState, useEffect } from 'react';
//? компоненты
import { ButtonCopied } from '../../../../components/Components';

function AllUsers(props) {

  const className = props.class + ' allUsers';

  const [currentNumberOfUsers, setСurrentNumberOfUsers] = useState(0);
  const [arrayOfID, setArrayOfID] = useState([]);

  useEffect(() => {
    // todo сделать запрос на сервак что бы получить колличество пользователей
    setСurrentNumberOfUsers(9999);
    setArrayOfID([
      12345678,
      47194742,
      27340607,
      42345678,
      32345678,
      13729551,
      96284123,
      56294811,
      12345678,
      12345678,
      12345678,
      90000008,
      73920018,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
      12345678,
    ]);
  }, []);

  useEffect(() => {
    setСurrentNumberOfUsers(arrayOfID.length);
  }, [arrayOfID]);

  return (
    <article className={className}>
      {/* header - info */}
      <div className='adminPanel__info'>
        <h3 className='adminPanel__title'>All users:</h3>
        <p className='adminPanel__number'>{currentNumberOfUsers}</p>
      </div>

      {/*//todo сделать поиск по ID */}
      <div className='allUsers__search'>
        <p className='allUsers__search-input'>soon</p>
      </div>

      {/* all ID`s */}
      <div>
        {arrayOfID.map((item, index) => {

          return (
            <div key={index} className='allUsers__id'>
              <ButtonCopied popupValid={props.popupValid} message={`Copied ${item}`} text={item} className={'allUsers__id-text'}>
                Id:
              </ButtonCopied>
              <ButtonCopied popupValid={props.popupValid} message={`Copied ${item}`} text={item} className={'allUsers__id-text'}>
                {item}
              </ButtonCopied>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default AllUsers;