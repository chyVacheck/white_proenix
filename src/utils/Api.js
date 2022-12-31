
import { consoleMessage, ADRESS_CRYPTO } from "./constants.js";

class Api {
  constructor(setting) {
    this._adress = setting.baseUrl;
    this._adressUsers = setting.baseUrl + 'users/';
    this._adressExchangeHistory = setting.baseUrl + 'exchange/history/';
    this._admin = setting.currentAdmin;
  }

  _checkResponse(res, message = '', adress) {
    // тут проверка ответа
    if (res.ok) {
      console.log(`The request to the server in order${adress ? '[' + adress + ']' : ''}${message ? ' for the purpose of [' + message + ']' : ''}  was processed successfully`);
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status} `);
  }

  _request(url, options, message, adress) {
    return fetch(url, options)
      .then((res) => { return this._checkResponse(res, message, adress) })
  }

  //* Crypto
  // GET
  //? запрос курса валют 
  getCryptoPrice(send, reselt) {
    return this._request(`${ADRESS_CRYPTO}price?fsym=${send}&tsyms=${reselt}`, {
      method: "GET",
    },
      consoleMessage.GET + ' price',
      (this._admin.login) && `${ADRESS_CRYPTO}price?fsym=${send}&tsyms=${reselt}`,
    )
  }

  //* Users
  //! в след версиях
  //? запрос чтобы авторизоваться
  // authorizationUser(user) {
  //   return this._request(`${ this._adressUsers }${ 'url' } `, { //todo написать вместо url нормальную ссылку
  //     method: "POST",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       password: user.password,
  //       email: user.email
  //     }),
  //   },
  //     consoleMessage.POST + ' authorization User',
  //     this._admin.login && `${ this._adressUsers }${ 'url' } `,
  //   )
  // }


  // GET
  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить айди всех пользователей
  // getAllUsers(token) {
  //   return this._request(`${ this._adressUsers } id_list / `, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       token: token,
  //     })
  //   },
  //     consoleMessage.GET + ' all id of users',
  //     this._admin.login && `${ this._adressUsers } id_list / `,
  //   )
  // }

  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить информацию о пользователе используя токен
  // getUserInfoByToken(user, token) {
  //   return this._request(`${ this._adressUsers } id_list / `, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       id: user.id,
  //       token: token,
  //     })
  //   },
  //     consoleMessage.GET + ` info about user id: ${ user.id } `,
  //     this._admin && `${ this._adressUsers } id_list / `,
  //   )
  // }

  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить информацию о пользователе используя пароль пользователя
  // getUserInfoByPass(user) {
  //   return this._request(`${ this._adressUsers } id_list / `, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //     })
  //   },
  //     consoleMessage.GET + ` info about user id: ${ user.id } `,
  //     this._admin && `${ this._adressUsers } id_list / `,
  //   )
  // }

  // POST
  //! в след версиях
  //? запрос чтобы создать пользователя
  // createUser(user) {
  //   return this._request(`${ this._adressUsers } create / `, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: user.email,
  //       password: user.password,
  //     })
  //   },
  //     consoleMessage.POST + ' users',
  //     this._admin.login && `${ this._adressUsers } create / `
  //   )
  // }

  // PUT
  //! в след версиях
  //? запрос чтобы добавить адресс пользователя
  // addUserAdress(user) {
  //   return this._request(`${ this._adressUsers } add_address / id=<${user.id}>`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       fullname: user.fullname,
  //       country: user.country,
  //       city: user.city,
  //       street: user.street,
  //       house_number: user.houseNumer,
  //       postal: user.postal,
  //     })
  //   },
  //     consoleMessage.PUT + ' users adress',
  //     this._admin.login && `${this._adressUsers}add_address/id=<${user.id}>`
  //   )
  // }

  //! в след версиях
  //? запрос чтобы добавить паспорт пользователя
  // addUserPassport(user) {
  //   return this._request(`${this._adressUsers}add_address/id=<${user.id}>`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       passport_number: user.passportNumber,
  //       passport_series: user.passportSeries,
  //     })
  //   },
  //     consoleMessage.PUT + ' users passport',
  //     this._admin.login && `${this._adressUsers}add_address/id=<${user.id}>`,
  //   )
  // }

  //! в след версиях
  //? запрос чтобы установить инициалы подтвержденными
  // addUserСorrectnessOfFullname(user) {
  //   return this._request(`${this._adressUsers}fullname_is_correct/id=<${user.id}>`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       fullname_is_correct: user.fullnameIsCorrect,
  //     })
  //   },
  //     consoleMessage.PUT + ' users fullname is correct',
  //     this._admin.login && `${this._adressUsers}fullname_is_correct/id=<${user.id}>`
  //   )
  // }

  //! в след версиях
  //? запрос чтобы установить паспорт подтвержденным
  // addUserСorrectnessOfPassport(user) {
  //   return this._request(`${this._adressUsers}passport_is_correct/id=<${user.id}>`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       passport_is_correct: user.passportIsCorrect,
  //     })
  //   },
  //     consoleMessage.PUT + ' users fullname is correct',
  //     this._admin.login && `${this._adressUsers}passport_is_correct/id=<${user.id}>`
  //   )
  // }

  //! в след версиях
  //? запрос чтобы установить новый уровень пользователя
  // setUserLevel(user) {
  //   return this._request(`${this._adressUsers}change_level/id=<${user.id}>`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       level: user.level,
  //     })
  //   },
  //     consoleMessage.PUT + ` users level is ${user.level}`,
  //     this._admin.login && `${this._adressUsers}change_level/id=<${user.id}>`
  //   )
  // }

  //! в след версиях
  //? запрос чтобы обновить время последнего визита пользователя
  // setUserLastVisit(user) {
  //   return this._request(`${this._adressUsers}online/id=<${user.id}>`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //     })
  //   },
  //     consoleMessage.PUT + ` users level is ${user.level}`,
  //     this._admin.login && `${this._adressUsers}online/id=<${user.id}>`,
  //   )
  // }

  //! в след версиях
  //? запрос чтобы установить новое имя пользователя
  // setUserFullname(user) {
  //   return this._request(`${this._adressUsers}id_list/`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       fullname: user.fullname,
  //     })
  //   },
  //     consoleMessage.PUT + ` users fullname  is ${user.fullname}`,
  //     this._admin.login && `${this._adressUsers}id_list/`
  //   )
  // }

  // DELETE
  //! в след версиях
  //? запрос чтобы удалить пользователя
  // deleteUser(user, token) {
  //   return this._request(`${this._adressUsers}`, {
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       id: user.id,
  //       token: token,
  //     })
  //   },
  //     consoleMessage.DELETE + ` user id: ${user.id}`,
  //     this._admin.login && `${this._adressUsers}`,
  //   )
  // }

  //* Exchange History
  // GET
  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить всю истоирю транзакций
  // getAllHistory(token) {
  //   return this._request(this._adressExchangeHistory, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       token: token,
  //     })
  //   },
  //     consoleMessage.GET + ' All History of everyone',
  //     this._admin.login && this._adressExchangeHistory,
  //   )
  // }

  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить всю истоирю транзакций одного пользователя
  // getAllHistoryByUser(user) {
  //   return this._request(`${this._adressExchangeHistory}id=<${user.id}>/`, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       password: user.password,
  //     })
  //   },
  //     consoleMessage.GET + ` All History of ${user.id}`,
  //     this._admin.login && `${this._adressExchangeHistory}id=<${user.id}>/`,
  //   )
  // }

  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить недавнюю истоирю транзакций одного пользователя
  // getRecentHistoryByUser(user) {
  //   return this._request(`${this._adressExchangeHistory}last=<${user.id}>`, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       password: user.password,
  //     })
  //   },
  //     consoleMessage.POST + ` Recent History of ${user.id}`,
  //     this._admin.login && `${this._adressExchangeHistory}last=<${user.id}>`
  //   )
  // }

  //! в след версиях
  //todo GET не может иметь тела
  //? запрос чтобы получить все текущие транзакций (ожидающих одобрения/отклонения)
  // getAllRecentHistoryWaiting(token) {
  //   return this._request(`${this._adressExchangeHistory}waiting/`, {
  //     method: "GET",
  //     body: JSON.stringify({
  //       token: token,
  //     })
  //   },
  //     consoleMessage.GET + ` All History of waiting transactions`,
  //     this._admin.login && `${this._adressExchangeHistory}waiting/`
  //   )
  // }

  // POST
  //! в след версиях
  //? запрос чтобы получить все текущие транзакций (ожидающих одобрения/отклонения)
  // createHistoryTransaction(user, transaction) {
  //   return this._request(this._adressExchangeHistory, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: user.id,
  //       password: user.password,
  //       given_currency: transaction.sendType,
  //       amount_of_given: transaction.sendValue,
  //       receives_currency: transaction.resType,
  //       amount_of_received: transaction.resValue,
  //     })
  //   },
  //     consoleMessage.GET + ` All History of waiting transactions`,
  //     this._admin.login && this._adressExchangeHistory,
  //   )
  // }

}

export default Api;
