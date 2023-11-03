import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea
          commodo consequat.
        </p>
        <ul>
          <li>
            <span className='material-symbols-outlined'>location_on</span> Lagos,
            Nigeria
          </li>
          <li>
            <span className='material-symbols-outlined'>call</span> 07088341232,
            09099126478
          </li>
          <li>
            <span className='material-symbols-outlined'>mail</span> fahion@gmail.com
          </li>
          <li>
            <span className='material-symbols-outlined'>schedule</span> Mon - Sat /
            10:00 AM - 4:00 PM
          </li>
        </ul>
      </div>
      <div className={classes.links}>
        <h4>INFORMATION</h4>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className={classes.links}>
        <h4>MY ACCOUNT</h4>
        <ul>
          <li>My Account</li>
          <li>My Shop</li>
          <li>My Cart</li>
          <li>Checkout</li>
        </ul>
      </div>
      <div className={classes.subscribe}>
        <h4>SUBSCRIBE</h4>
        <form>
          <input type='text' placeholder='example@mail.com' />
          <button>SIGN UP</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
