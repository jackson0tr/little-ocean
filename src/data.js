// import icons
import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.webp';
import ModelWhiteImg from '../src/assets/img/model-white.webp';
import ModelBlackImg from '../src/assets/img/model-black.webp';
import MenuImg1 from '../src/assets/img/menu/shrimpsoup.webp';
import MenuImg2 from '../src/assets/img/menu/orzoseafood.jpg';
import MenuImg3 from '../src/assets/img/menu/smokedsalmon.jpg';
import MenuImg4 from '../src/assets/img/menu/cheesecake.webp';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.webp';
import Avatar2 from '../src/assets/img/testimonial/avatar2.webp';
import Avatar3 from '../src/assets/img/testimonial/maha.jpg';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/#about', name: 'about' },
  { href: '/#menu', name: 'menu' },
  // { href: '/#team', name: 'team' },
  { href: '/#testimonials', name: 'testimonials' },
  { href: '/#book', name: 'book a table' },
  { href: '/#contact', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Little Ocean Restaurant',
  subtitle:
    "Experience the fresh, vibrant flavors of the sea at Little Ocean. A cozy spot where every dish is crafted with care, bringing the best of the ocean to your plate.",
  btnText: 'Find out more',
};

export const socialData = [
  { href: 'https://www.facebook.com/profile.php?id=100088425399369&mibextid=ZbWKwL', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/littleocean.restaurant?igsh=MWg5YXdzMTB6djFldg==', icon: <FaInstagram /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    "Welcome to Little Ocean, where the fresh flavors of the sea meet a cozy and inviting atmosphere! At Little Ocean, we specialize in serving mouthwatering seafood dishes made from the finest ingredients. Whether you're craving succulent grilled fish, savory shrimp, or a delightful seafood platter, we have something to satisfy every seafood lover's palate. Our menu is crafted with care, combining traditional recipes with a modern twist, and always emphasizing freshness and quality. Join us for a dining experience that's as relaxing as the ocean breeze, perfect for family dinners, casual gatherings, or special occasions. Dive into the taste of the sea at Little Ocean!",
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Roe & Shrimp Soup',
      price: '$7.99',
      description: 'Roe & Shrimp Soup is a seafood-based dish that combines shrimp and fish roe (the eggs of fish) in a savory broth.',
    },
    {
      image: MenuImg2,
      name: 'Orzo with Seafood Tagen ',
      price: '$9.49',
      description: 'Orzo with Seafood Tagen is a Mediterranean-inspired dish that combines orzo (a small, rice-shaped pasta) with a variety of seafood such as shrimp, calamari, mussels, or fish, baked together in a "tagen," which is an Egyptian term for a clay or ceramic pot used for slow cooking.',
    },
    {
      image: MenuImg3,
      name: 'Smoked Salmon Pasta',
      price: '$8.50',
      description: 'Smoked Salmon Pasta is a creamy and flavorful dish that combines smoked salmon with pasta, often enhanced with ingredients like cream, garlic, onions, lemon, and herbs.',
    },
    {
      image: MenuImg4,
      name: 'Little Ocean Cheesecake',
      price: '$9.99',
      description: 'It is a boutique bakery that specializes in a variety of cheesecake flavors, often with creative and unique twists.',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Little Ocean Restaurant exceeded my expectations! The seafood was incredibly fresh, and the flavors were just perfect.",
      image: Avatar1,
      name: 'Ahmed Amr',
      occupation: 'Client',
    },
    {
      message:
        "The food at Little Ocean Restaurant was fantastic – the lobster bisque and fish tacos were particularly memorable.",
      image: Avatar2,
      name: 'Noor Turk',
      occupation: 'Client',
    },
    {
      message:
        "I visited Little Ocean Restaurant for a casual dinner with friends, and we were all very impressed.",
      image: Avatar3,
      name: 'Maha Omar',
      occupation: 'Client',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call 01097777165 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: 'Open Air Mall, Madinaty, New Cairo 4771202',
    address2: '23 Omar Lotfy st. Al Hadikah Al dawliah, Abbas el akkad Abbas El Akkad, Nasr City',
    phone: '01097777165',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: 'https://www.facebook.com/profile.php?id=100088425399369&mibextid=ZbWKwL', icon: <FaFacebookF /> },
      { href: 'https://www.instagram.com/littleocean.restaurant?igsh=MWg5YXdzMTB6djFldg==', icon: <FaInstagram /> },
    ],
  },
};
