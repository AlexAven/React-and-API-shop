function Header() {
    return <nav className='deep-purple'>
    <div className='nav-wrapper'>
      <a href='/' className='brand-logo'>React Shop</a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><a href='https://github.com/AlexAven/React-and-API-shop' target='_blank' rel='noreferrer'> My Repository</a></li>
      </ul>
    </div>
  </nav>
};

export {Header};