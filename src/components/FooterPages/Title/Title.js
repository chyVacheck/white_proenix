import './Title.css';

function Title({ children, subTitle }) {

  const className = subTitle ? 'title title_subtitle' : 'title';

  return (
    <h2 className={className}>{children}</h2>
  )
}

export default Title;