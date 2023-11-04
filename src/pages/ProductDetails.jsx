import { useParams } from 'react-router-dom';
import ProductDetailsList from '../components/items/products/product-details/ProductDetailsList';
import img from '../assets/img/rocknwool.jpg';
import img1 from '../assets/img/pooja.jpg';
import img2 from '../assets/img/artems.jpg';
import img3 from '../assets/img/hassan.jpg';
import img4 from '../assets/img/ilya.jpg';
import img5 from '../assets/img/engin.jpg';
import img6 from '../assets/img/josh.jpg';
import img7 from '../assets/img/dollar.jpg';
import img8 from '../assets/img/hamed.jpg';
import img9 from '../assets/img/hameds.jpg';
import img10 from '../assets/img/ulises.jpg';
import img11 from '../assets/img/anomaly.jpg';

const DUMMY_ITEMS = [
  {
    id: 'p1',
    img: <img src={img} alt='img' />,
    title: 'hayley - maxwell',
    currPrice: 56.54,
    price: 86.54,
    category: 'Female Wear',
    description:
      'Some text about this shop entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultriciesmi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  },

  {
    id: 'p10',
    img: <img src={img9} alt='img' />,
    title: 'pooja-chaudhary',
    currPrice: 48.71,
    price: 58.58,
    category: 'Head Warmer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },

  {
    id: 'p11',
    img: <img src={img10} alt='img' />,
    title: 'yasmin-dangor',
    currPrice: 56.54,
    price: 86.54,
    category: 'Male Wear',
    description:
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 'p2',
    img: <img src={img1} alt='img' />,
    title: 'laura-chouette',
    currPrice: 48.71,
    price: 58.58,
    category: 'Female Wear',
    description:
      'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultriciesmi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  },

  {
    id: 'p3',
    img: <img src={img2} alt='img' />,
    title: 'tabitha-turner',
    currPrice: 48.71,
    price: 58.58,
    category: 'Sneaker',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },

  {
    id: 'p12',
    img: <img src={img11} alt='img' />,
    title: 'autumn-goodman',
    currPrice: 56.54,
    price: 86.54,
    category: 'Male Wear',
    description:
      'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultriciesmi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  },

  {
    id: 'p4',
    img: <img src={img3} alt='img' />,
    title: 'malik-skydsgaard',
    currPrice: 48.71,
    price: 58.58,
    category: 'Female Wear',
    description:
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 'p9',
    img: <img src={img8} alt='img' />,
    title: 'josh-marshall',
    currPrice: 48.71,
    price: 58.58,
    category: 'Head Warmer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },

  {
    id: 'p5',
    img: <img src={img4} alt='img' />,
    title: 'damian-barczak',
    currPrice: 56.54,
    price: 86.54,
    category: 'Male Wear',
    description:
      'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultriciesmi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  },

  {
    id: 'p6',
    img: <img src={img5} alt='img' />,
    title: 'artem-bondarchuk',
    currPrice: 48.71,
    price: 58.58,
    category: 'Female Wear',
    description:
      'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultriciesmi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  },

  {
    id: 'p7',
    img: <img src={img6} alt='img' />,
    title: 'alesia-kazantceva',
    currPrice: 48.71,
    price: 58.58,
    category: 'Sneaker',
    description:
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 'p8',
    img: <img src={img7} alt='img' />,
    title: 'hamed-darzi',
    currPrice: 48.71,
    price: 58.58,
    category: 'Male Wear',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
];

const ProductDetails = () => {
  const params = useParams();

  const details = DUMMY_ITEMS.find(
    (product) => product.title === params.productTitle
  );

  return (
    <section>
      <ProductDetailsList
        key={details.id}
        id={details.id}
        img={details.img}
        title={details.title}
        currPrice={details.currPrice}
        price={details.price}
        category={details.category}
        description={details.description}
      />
    </section>
  );
};

export default ProductDetails;
