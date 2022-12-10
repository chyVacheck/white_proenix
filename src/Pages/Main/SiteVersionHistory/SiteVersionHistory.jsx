
//? стили
import './SiteVersionHistory.css';

function SiteVersionHistory() {

  window.scroll(0, 0);

  // const listChanges = [
  //   {
  //     v: 0.3,
  //     date: '29.12.2002',
  //     changes: [
  //       'Connect the new font',
  //       'Update styles',
  //       'Update style: footer',
  //       'Update style: index',
  //       'Create child component for component Policies + Create Policies component + Add new Router Policies',
  //       'Create new component: Title',
  //       'Create universal hook',
  //       'Create new component: BigButton ',
  //       'Create new component: Field',
  //       'Make shadow for titles',
  //       'fix some problems with shadow',
  //     ],
  //   },
  //   {
  //     v: 0.2,
  //     date: '28.11.2002',
  //     changes: [
  //       'Create a normalize file',
  //       'Connect the Poppins font',
  //       'Initial App + Feat: App',
  //       'Initial components',
  //       'Create component for Footer',
  //       'Create component Footer',
  //       'Create component App',
  //       'Enable App',
  //       'create independent style`s',
  //       'enable style`s',
  //       'add icons',
  //       'initial component Support',
  //       'initial cpmponent Register',
  //       'initial cpmponent Login',
  //       'initial component Home',
  //       'initial component HowItWorks',
  //       'initial cpmponent ExchangeBuy',
  //       'create header',
  //       'Delete Main',
  //       'add info'
  //     ],
  //   },
  //   
  // ]

  const listChanges = [
    [
      {
        v: 0.11,
        date: '09.12.2022'
      },
      [
        { name: 'Refactor', list: ['change the file format', 'move files by folders'] },
        { name: 'Create', list: ['Site Version History', '']}
      ]
    ],
    [
      {
        v: '0.10',
        date: '08.12.2022'
      },
      [
        { name: 'Feat', list: ['forwarding to other pages', 'page protection', 'split Page in Development or Not found the page into two', 'make a transfer to the "exchange purchase"', 'add to each page "in development"', 'add validation to the sign in/up page', 'add movement when clicking on currency',] },
        { name: 'Fix', list: ['components for transactions', 'fix "blank pages"', 'remove browser errors', 'replace Wphoenix'] },
        { name: 'Add', list: ['add styles for valid input', 'components for transactions', 'add validation'] },
        { name: 'Refactor', list: ['style code', 'changing email to id', 'switch to a lighter photo format', 'move photo + use from constants'] },
        { name: 'Update', list: ['ExchangeBuy.js', 'Reviews.js'] },
        { name: 'Delete', list: ['delete old page, page was moved to another folder', 'Union.svg'] },
        { name: 'Create', list: ['make a support page', 'pop-up for minor bugs'] },

      ]
    ],
    [
      {
        v: 0.9,
        date: '07.12.2022'
      },
      [
        { name: 'Add', list: ['components for transactions'] },
      ]
    ],
    [
      {
        v: 0.8,
        date: '05.12.2022'
      },
      [
        { name: 'Fix', list: ['connect files correctly'] },
        { name: 'Refactor', list: ['rearrange files by folders'] },
        { name: 'Create', list: ['ProtectedRouter.js', 'page Profile', 'page for admin'] },
      ]
    ],
    [
      {
        v: 0.7,
        date: '04.12.2022'
      },
      [
        { name: 'Add', list: ['style', 'new information', 'ExchangeBuy to app', 'component current Resetve', 'image for ExchangeBuy'] },
        { name: 'Refactor', list: ['Edit style'] },
        { name: 'Update', list: ['BigButton.js'] },
        { name: 'Create', list: ['component MailVerification', 'current Reserve'] },
      ]
    ],
    [
      {
        v: 0.6,
        date: '03.12.2022'
      },
      [
        { name: 'Add', list: ['style', 'page How it Works', 'Page not found or in development', 'page Home', 'images', 'images for component Home', 'component Popup', 'modificators', 'icon open for crypto-popup '] },
        { name: 'Update', list: ['BigButton.js', 'BigTitle.css'] },
        { name: 'Refactor', list: ['Make pop-up info using univwrsal component'] },
        { name: 'Create', list: ['Pop-up crypto', 'component Reviews for page Home', 'component InfoCards for page Home', 'component for pop-up Crypto', 'component for pop-up Reviews'] },
        { name: 'Delete', list: ['Delete unnecessary links'] },
      ]
    ],
    [
      {
        v: 0.5,
        date: '01.12.2022'
      },
      [
        { name: 'Update', list: ['link.css', 'constants.js', 'Footer__info-column.js', 'index.html'] },
        { name: 'Add', list: ['style "schadow" for title policies', 'icons for PopupInfo', 'PopupInfo to a page', 'popupInfoContent in constants'] },
        { name: 'Feat', list: ['Make universal page, for pages in Footer', 'Make components for pages in Footer'] },
        { name: 'Create', list: ['Make all pages from Policies'] },
      ]
    ],
    [
      {
        v: 0.4,
        date: '30.11.2022'
      },
      [
        { name: 'Update', list: ['style Policies'] },
        { name: 'Add', list: ['style "schadow" for title policies', 'icons for PopupInfo', 'PopupInfo to a page', 'popupInfoContent in constants'] },
        { name: 'Create', list: ['utils Constants and enable icons', 'Component PopupInfo', 'Register configs'] },
      ]
    ],
    [
      {
        v: 0.3,
        date: '29.11.2022'
      },
      [
        {
          name: 'Update', list: ['styles', 'style Header', 'style Footer', 'style index', 'style Policies']
        },
        {
          name: 'Create', list: ['child component for component Policies', 'Policies component', 'hook', 'component Field', 'component Login', 'component Register']
        },
        {
          name: 'Add', list: ['new Router Policies', 'icon for Field']
        },
        {
          name: 'Fix', list: ['Problem with links', 'Problem with pages higher than the screen', 'Pproblem with the illumination of the router home']
        },
        {
          name: 'Add', list: ['news font',]
        },
      ]
    ],
    [
      {
        v: 0.2,
        date: '28.11.2022'
      },
      [
        {
          name: 'Create',
          list: ['normalize', 'component for Footer', 'component Footer', 'component App', 'independent style`s']
        },
        {
          name: 'Initial ',
          list: [
            'app', 'components',
            'component Support', 'component Register',
            'component Home', 'component HowItWorks',
            'component ExchangeBuy', 'component Login'
          ]
        },
        { name: 'Enable', list: ['font "Poppins"', 'style`s'] },
        { name: 'Delete', list: ['one column', 'main'] },
        { name: 'Style', list: ['code', 'up 2'] },
        { name: 'Update', list: ['Logo.svg'] },
        { name: 'feat', list: ['App', 'header'] },
      ]
    ],
    [
      {
        v: 0.1,
        date: '27.11.2022'
      },
      [
        { name: 'Another', list: ['Initial site', 'Сreate a structure', 'Register configs'] },
      ]
    ],
  ]

  return (
    <article className='siteVersionHistory'>
      {
        // карточки с изменениями
        listChanges.map((item, index) => {

          return (
            <div key={index} className='siteVersionHistory__changes'>
              {/* дата, версия */}
              <div className='siteVersionHistory__info-changes'>
                {/* версия */}
                <p className='siteVersionHistory__message'>
                  V: <span className='siteVersionHistory__message_info'>{item[0].v}</span>
                </p>
                {/* дата */}
                <p className='siteVersionHistory__message'>
                  Date: <span className='siteVersionHistory__message_info'>{item[0].date}</span>
                </p>
              </div>
              {/* список изменений */}
              <ul className='siteVersionHistory__text-changes-upper'>
                <div className='siteVersionHistory__column-list'>
                  {item[1].map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <ul key={index} className='siteVersionHistory__text-changes'>
                          <p className='siteVersionHistory__element-info siteVersionHistory__element-info_name'>{item.name}</p>
                          {
                            item.list.map((item, index) => {
                              return (
                                <li key={index} className='siteVersionHistory__element'>
                                  <p className='siteVersionHistory__element-info'>{index + 1}</p>
                                  <p className='siteVersionHistory__element-text'>{item}</p>
                                </li>
                              )
                            })
                          }
                        </ul>)
                    }
                  })}
                </div>

                <div className='siteVersionHistory__column-list'>
                  {item[1].map((item, index) => {
                    if (index % 2 === 1) {
                      return (
                        <ul key={index} className='siteVersionHistory__text-changes'>
                          <p className='siteVersionHistory__element-info siteVersionHistory__element-info_name'>{item.name}</p>
                          {
                            item.list.map((item, index) => {
                              return (
                                <li key={index} className='siteVersionHistory__element'>
                                  <p className='siteVersionHistory__element-info'>{index + 1}</p>
                                  <p className='siteVersionHistory__element-text'>{item}</p>
                                </li>
                              )
                            })
                          }
                        </ul>)
                    }
                  })}
                </div>

              </ul>
            </div>
          )
        })

      }


    </article >
  )
}

export default SiteVersionHistory;