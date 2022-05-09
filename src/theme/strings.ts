import images from "./images";

const moreInfo = "More Info";
const strings = {
  navbar: {
    furniture: "Furniture",
    chairs: "Chairs",
    sofas: "Sofas",
    lamps: "Lamps",
    beds: "Beds",
    shop: "Shop",
    about: "About Us",
    contact: "Contact",
  },
  auth: {
    name: "name",
    email: "email",
    password: "password",
    passwordConfirm: "password-confirm",
    signIn: "Sign In",
    signUp: "Sign Up",
  },
  logoTitle: "Panto",
  bestSellingProduct: "Best Selling Product",
  firstSection: {
    title: "Make Your Interior More Minimalistic & Modern",
    subtitle:
      "Turn your room with panto into a lot more minimalist and modern with ease and speed",
  },
  whySection: {
    title: "Why Choosing Us",
    text: [
      {
        id: 1,
        title: "Luxury facilities",
        content:
          "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
        moreInfo,
      },
      {
        id: 2,
        title: "Affordable Price",
        content:
          "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
        moreInfo,
      },
      {
        id: 3,
        title: "Many Choices",
        content:
          "We provide many unique work space choices so that you can choose the workspace to your liking.",
        moreInfo,
      },
    ],
  },
  footer: [
    {
      id: 1,
      title: "Services",
      listItems: [
        {
          id: 1,
          icon: "",
          title: "Email Marketing",
          link: "",
        },
        {
          id: 2,
          icon: "",
          title: "Campaigns",
          link: "",
        },
        {
          id: 3,
          icon: "",
          title: "Branding",
          link: "",
        },
      ],
    },
    {
      id: 2,
      title: "Furniture",
      listItems: [
        {
          id: 1,
          icon: "",
          title: "Beds",
          link: "",
        },
        {
          id: 2,
          icon: "",
          title: "Chair",
          link: "",
        },
        {
          id: 3,
          icon: "",
          title: "All",
          link: "",
        },
      ],
    },
    {
      id: 3,
      title: "Follow Us",
      listItems: [
        {
          id: 1,
          icon: images.facebookIcon,
          title: "Facebook",
          link: "https://www.facebook.com",
        },
        {
          id: 2,
          icon: images.twitterIcon,
          title: "Twitter",
          link: "https://twitter.com/",
        },
        {
          id: 3,
          icon: images.instagramIcon,
          title: "Instagram",
          link: "https://www.instagram.com/",
        },
      ],
    },
  ],
  footerExtraText: {
    subtitle:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    copyright: "Copyright © 2021",
    privacy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
  },

  experiences: {
    heading: "EXPERIENCES",
    title: "We Provide You The Best Experience",
    content:
      "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
    moreInfo,
  },

  materials: {
    heading: "MATERIALS",
    title: "Very serious materials for making furniture",
    content:
      "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
    moreInfo,
  },
  testimonials: {
    title: "TESTIMONIALS",
    subtitle: "Our Client Reviews",
    reviews: [
      {
        id: 1,
        bgImage: images.carouselImg1,
        icon: images.reviewClientIcon,
        name: "Bang Upin",
        otherName: "Pedagang Asongan",
        reviewText:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
        numberOfStars: 5,
      },
      {
        id: 2,
        bgImage: images.carouselImg2,
        icon: images.reviewClientIcon,
        name: "Bang Upin",
        otherName: "Pedagang Asongan",
        reviewText:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
        numberOfStars: 4,
      },
      {
        id: 3,
        bgImage: images.carouselImg3,
        icon: images.reviewClientIcon,
        name: "Bang Upin",
        otherName: "Pedagang Asongan",
        reviewText:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
        numberOfStars: 3,
      },
      {
        id: 4,
        bgImage: images.carouselImg1,
        icon: images.reviewClientIcon,
        name: "Bang Upin",
        otherName: "Pedagang Asongan",
        reviewText:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
        numberOfStars: 5,
      },
      {
        id: 5,
        bgImage: images.carouselImg1,
        icon: images.reviewClientIcon,
        name: "Bang Upin",
        otherName: "Pedagang Asongan",
        reviewText:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
        numberOfStars: 5,
      },
    ],
  },
};

export default strings;
