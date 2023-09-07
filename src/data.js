// images
import Logo from "../src/assets/img/header/icon-circle.png";
import DigitalTVImg from "../src/assets/img/product/tv-digital.jpg";
import SmartTVImg from "../src/assets/img/product/smart-tv.jpg";
import LaptopImg from "../src/assets/img/product/laptop.jpg";
import SmartphoneImg from "../src/assets/img/product/smartphone.webp";
import FeaturePhoneImg from "../src/assets/img/product/feature-phone.webp";
import PowerbankImg from "../src/assets/img/product/powerbank.jpg";
import LEDStripImg from "../src/assets/img/product/led-strip.jpg";
import ReviewBgImg from "../src/assets/img/review/review-bg.jpg";
import User1 from "../src/assets/img/review/user1.jpg";
import User2 from "../src/assets/img/review/user2.jpg";
import User3 from "../src/assets/img/review/user3.jpg";
import User4 from "../src/assets/img/review/user4.jpg";
import User5 from "../src/assets/img/review/user5.jpg";
import User6 from "../src/assets/img/review/user6.jpg";
import User7 from "../src/assets/img/review/user7.jpg";
import User8 from "../src/assets/img/review/user8.jpg";
import shop1 from "../src/assets/img/shop/insta.png";
import shop2 from "../src/assets/img/shop/shopee.png";
import shop3 from "../src/assets/img/shop/tokped.png";
import ContactImg from "../src/assets/img/contact/phone.jpg";
// icons
import UsersIcn from "../src/assets/img/about/icons/users.svg";
import CalendarIcn from "../src/assets/img/product/icons/bag.svg";
import PriceIcn from "../src/assets/img/shop/icons/price.svg";
import ReviewIcn from "../src/assets/img/review/icons/comment.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo,
  btnHeaderText: "Kontak",
};

export const nav = [
  { name: "Beranda", href: "#" },
  { name: "Tentang", href: "#about" },
  { name: "Produk", href: "#product" },
  { name: "Toko", href: "#shop" },
  { name: "Ulasan", href: "#review" },
  { name: "FAQ", href: "#faq" },
];

export const banner = {
  titlePart1: "Elektronik Mewah",
  titlePart2: "Harga Murah.",
  subtitle:
    "Selamat datang di toko elektronik yang menawarkan produk dengan harga lebih murah pastinya.",
  textBtn: "Kunjungi Toko",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Tentang Kami",
  subtitle1:
    "Kami menyediakan berbagai perangkat elektronik original dan bergaransi resmi dengan harga yang murah dan kompetitif.",
  subtitle2:
    "Kami menyediakan berbagai macam perangkat elektronik dari berbagai brand ternama.",
  link: "Kunjungi Toko",
};

export const product = {
  icon: CalendarIcn,
  title: "Tipe Produk",
  types: [
    {
      image: DigitalTVImg,
      name: "TV Digital",
    },
    {
      image: SmartTVImg,
      name: "Smart TV",
    },
    {
      image: LaptopImg,
      name: "Laptop",
    },
    {
      image: SmartphoneImg,
      name: "Smartphone",
    },
    {
      image: FeaturePhoneImg,
      name: "Feature Phone",
    },
    {
      image: PowerbankImg,
      name: "Powerbank",
    },
    {
      image: LEDStripImg,
      name: "LED Strip",
    },
  ],
};

export const shop = {
  icon: PriceIcn,
  title: "Toko Resmi",
  shops: [
    {
      name: "Instagram",
      image: shop1,
      href: "https://www.instagram.com/grosir.electronik_magelang/",
      delay: 600,
    },
    {
      name: "Shopee",
      image: shop2,
      href: "https://shopee.co.id/borobudurg4dget",
      delay: 800,
    },
    {
      name: "Tokopedia",
      image: shop3,
      href: "https://www.tokopedia.com/borobudurgadget",
      delay: 1000,
    },
  ],
};

export const review = {
  icon: ReviewIcn,
  title: "Ulasan",
  testimonials: [
    {
      background: ReviewBgImg,
      image: User1,
      name: "Syaifani",
      message:
        "“Barangnya original 👍. Ada garansi resmi. Kemasan disegel.  seller ramah n responsif”",
    },
    {
      background: ReviewBgImg,
      image: User2,
      name: "Dicky",
      message: "“Memuaskan!!! Sudah berkali-kali beli di sini!”",
    },
    {
      background: ReviewBgImg,
      image: User3,
      name: "Munasabil",
      message: "“harga bersaing, produk bagus dan pengiriman cepat”",
    },
    {
      background: ReviewBgImg,
      image: User4,
      name: "Jalalludin",
      message:
        "“Barangnya original 👍. Kemasan disegel. Berfungsi dengan baik. Barangnya mulus. Kelengkapan sesuai. Ada garansi resmi.”",
    },
    {
      background: ReviewBgImg,
      image: User5,
      name: "Ihsan",
      message:
        "“terimakasih, packing aman dan rapi, barang sesuai pesanan, recomended seller”",
    },
    {
      background: ReviewBgImg,
      image: User6,
      name: "Indra",
      message:
        "“Beli minggu malem selasa dah sampe lg, barang ori harga termurah, packing rapi dan aman..”",
    },
    {
      background: ReviewBgImg,
      image: User7,
      name: "nadiasuryani",
      message: "“terimakasih kak packing aman no repack segel ORI”",
    },
    {
      background: ReviewBgImg,
      image: User8,
      name: "Joni",
      message: "“Brg bgs sesuai pesanan.. respon baik.. rekomended seller”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "Tokonya ada di mana min?",
      answer:
        "Toko kami berada di Dusun Sodongan, Desa Bumiharjo, Kec. Borobudur, Kab. Magelang, Jawa Tengah, 56553. Atau bisa klik link google maps ",
      link: "https://goo.gl/maps/YdouzFyyTEgUkcCPA",
    },
    {
      question: "Buka jam berapa min?",
      answer: "Kami buka setiap hari 24 jam non-stop.",
    },
    {
      question: "Bisa COD min?",
      answer: "Kami melayani COD di daerah Magelang dan sekitarnya.",
    },
    {
      question: "Bagaimana cara klaim garansi min?",
      answer:
        "Untuk garansi bisa diklaim melalui service center masing-masing produk.",
    },
    {
      question: "Jadwal pengiriman bagaimana min?",
      answer:
        "Kami melakukan pengiriman setiap hari untuk ekspedisi tertentu. Jadwal lengkap bisa cek melalui link ",
      link: "https://images.tokopedia.net/img/cache/1200/BgtCLw/2021/11/13/faaddb01-faa0-404c-88ff-97f625ebf326.jpg.webp?ect=4g",
    },
  ],
};

export const contact = {
  image: ContactImg,
  title: "Ingin tahu informasi lebih lanjut?",
  subtitle: "Hubungi kami melalui kontak di bawah ini:",
  btn: [
    {
      text: "Facebook",
      href: "https://www.facebook.com/goesthcwg.thcwg",
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/grosir.electronik_magelang/",
    },
    {
      text: "Whatsapp",
      href: "https://api.whatsapp.com/send/?phone=6282138351343",
    },
  ],
};

export const footer = {
  brand: "Borobudur Gadget",
  copyrightTextStart: "Copyright © 2023 - ",
  copyrightTextEnd: "All rights reserved.",
};
