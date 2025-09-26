var products = [
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/024/656/689/small_2x/stock-foto-of-3d-modern-sofa-on-a-white-background-generative-ai-photo.jpg",
    name: "Sofa",
    category: "furniture",
    price: 499.99,
    description:
      "A modern and comfortable sofa designed to enhance your living room's elegance.",
    rating: 4.6,
  },

  {
    image: "https://m.media-amazon.com/images/I/711DxvZTb7L._SL1500_.jpg",
    name: "Dining Table",
    category: "furniture",
    price: 799.0,
    description:
      "Spacious dining table with a solid wooden finish, ideal for family gatherings.",
    rating: 4.7,
  },
  {
    image:
      "https://tse1.mm.bing.net/th/id/OIP.kWKhP-xIf4jLxNLo3RETOwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Bed Frame",
    category: "furniture",
    price: 650.0,
    description: "A sturdy and stylish bed frame designed for modern bedrooms.",
    rating: 4.5,
  },
  {
    image: "https://thumbs.dreamstime.com/z/coffee-table-14607233.jpg?w=450",
    name: "Coffee Table",
    category: "furniture",
    price: 129.99,
    description:
      "Compact and elegant coffee table to complement your living room.",
    rating: 4.3,
  },
  {
    image:
      "https://i0.wp.com/magzhouse.com/wp-content/uploads/2020/03/Fabulous-Bookshelf-Design-Ideas-For-Your-Interior-Decor-06.jpg?ssl=1",
    name: "Book Shelf",
    category: "furniture",
    price: 199.0,
    description:
      "Stylish bookshelf with multiple compartments for books and décor.",
    rating: 4.4,
  },
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Ft-b3JpbVU1Bop-SdSGQpgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Office Chair",
    category: "furniture",
    price: 179.0,
    description:
      "Ergonomic office chair with lumbar support for all-day comfort.",
    rating: 4.6,
  },
  {
    image:
      "https://homefactree.com/wp-content/uploads/2021/07/CADIZ-WARDROBE-HF.jpg",
    name: "Wardrobe",
    category: "furniture",
    price: 899.0,
    description:
      "Spacious wardrobe with multiple compartments for organized storage.",
    rating: 4.7,
  },
  {
    image: "https://m.media-amazon.com/images/I/71hp4bOpzgL._AC_SL1500_.jpg",
    name: "TV Stand",
    category: "furniture",
    price: 220.0,
    description: "Modern TV stand with storage shelves and a sleek design.",
    rating: 4.5,
  },
  {
    image:
      "https://tse1.explicit.bing.net/th/id/OIP.LIt21nJ_NUnipQwV41F2ZgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Recliner",
    category: "furniture",
    price: 549.99,
    description:
      "Comfortable recliner chair with adjustable back and footrest.",
    rating: 4.8,
  },
  {
    image:
      "https://staranddaisy.in/wp-content/uploads/2022/07/tshirtshorts_14722.jpg",
    name: "TShirts",
    category: "kids",
    price: 19.99,
    description:
      "Comfortable cotton t-shirt set perfect for daily wear and playtime.",
    rating: 4.5,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/24/ca/17271763295e21aeb07a9824db16ce97657d9c0ba1_thumbnail_900x.webp",
    name: "Party Dresses",
    category: "kids",
    price: 35.0,
    description:
      "Stylish party dress designed for special occasions and celebrations.",
    rating: 4.7,
  },
  {
    image:
      "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/22520264_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1",
    name: "Hoodies",
    category: "kids",
    price: 29.99,
    description:
      "Warm and cozy hoodie perfect for chilly days and casual wear.",
    rating: 4.6,
  },
  {
    image:
      "https://imagescdn.simons.ca/images/8543-8531516-45-A1_2/vintage-blue-denim-overalls.jpg?__=6",
    name: "Denim Overalls",
    category: "kids",
    price: 32.5,
    description: "Classic denim overalls suitable for play and outdoor fun.",
    rating: 4.4,
  },
  {
    image:
      "https://ae01.alicdn.com/kf/Ha7f9cbff91064c99bd4748b8aed1a423O/Swimsuit-Girl-One-Piece-Boys-Swimwear-UPF50-Sports-Swimming-Suit-for-Kids-Toddler-Teenager-Big-Boy.jpg_Q90.jpg_.webp",
    name: "Swimmers",
    category: "kids",
    price: 24.0,
    description:
      "UPF50+ swimwear offering sun protection for kids during water fun.",
    rating: 4.8,
  },
  {
    image: "https://pngimg.com/uploads/lipstick/lipstick_PNG76274.png",
    name: "Lipstick",
    category: "cosmetic",
    price: 15.99,
    description: "Long-lasting matte lipstick available in multiple shades.",
    rating: 4.7,
  },
  {
    image:
      "https://tse3.mm.bing.net/th/id/OIP.75G4vPjPF3-6KX5uB-fu0QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Foundation",
    category: "cosmetic",
    price: 29.99,
    description: "Smooth liquid foundation providing medium to full coverage.",
    rating: 4.5,
  },
  {
    image:
      "https://tse1.explicit.bing.net/th/id/OIP.s7OXcZkM062C8INWtyIHigAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Eyeliner",
    category: "cosmetic",
    price: 12.0,
    description: "Precision liquid eyeliner for sharp, long-lasting lines.",
    rating: 4.6,
  },
  {
    image:
      "https://i2-prod.dailyrecord.co.uk/incoming/article21486268.ece/ALTERNATES/s615/0_JS84611112.jpg",
    name: "Mascara",
    category: "cosmetic",
    price: 18.5,
    description: "Volumizing mascara for bold, thick lashes.",
    rating: 4.8,
  },
  {
    image:
      "https://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1198747112??hei=64&wid=64&qlt=50",
    name: "Face Primer",
    category: "cosmetic",
    price: 20.0,
    description:
      "Lightweight face primer to smooth skin and extend makeup wear.",
    rating: 4.4,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/003/636/960/small_2x/blush-sets-on-white-background-photo.jpg",
    name: "Blush",
    category: "cosmetic",
    price: 14.99,
    description: "Soft, blendable blush for a natural flush of color.",
    rating: 4.5,
  },
  {
    image: "https://www.arcnord.com/ProductImages/65ccf2c420440.png",
    name: "Makeup Remover",
    category: "cosmetic",
    price: 10.0,
    description: "Gentle makeup remover effective on waterproof cosmetics.",
    rating: 4.7,
  },

  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: 3.9,
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: 4.1,
  },
  {
    name: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: 4.7,
  },
  {
    name: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: 2.1,
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: 4.6,
  },
  {
    name: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: 3.9,
  },
  {
    name: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: 3,
  },
  {
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: 1.9,
  },
  {
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: 3.3,
  },
  {
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: 2.9,
  },
  {
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: 4.8,
  },
  {
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: 4.8,
  },
  {
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: 2.9,
  },
  {
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: 2.2,
  },
  {
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: 2.6,
  },
  {
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: 2.9,
  },
  {
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: 3.8,
  },
  {
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: 4.7,
  },
  {
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: 4.5,
  },
  {
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: 3.6,
  },
];

localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("carts", JSON.stringify([]));

function addAnimationToMainSection() {
  var main = document.querySelector("main");
  var h1DomElement = document.getElementById("title");

  setInterval(function () {
    if (h1DomElement.innerText === "Electronic Products") {
      h1DomElement.innerText = "Mens Clothing Product";
      h1DomElement.style.color = "green";
      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://img.freepik.com/premium-photo/beautiful-men-fashion-wooden-background_756748-44760.jpg")`;
    } else if (h1DomElement.innerText === "Mens Clothing Product") {
      h1DomElement.innerText = "Kid's Wearing";
      h1DomElement.style.color = "coral";
      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://th.bing.com/th/id/R.2a37d4c2b8d76e0d848d5c78ca639557?rik=oWXF9EYIhGFlOQ&riu=http%3a%2f%2fwww.sugarkids.es%2fblog%2fwp-content%2fuploads%2f2017%2f08%2fupload-a266be10-68ae-11e7-b60b-a34c8b6e5d7a-480x332.jpg&ehk=C3Qa7uiQIEwWfJAoAn430bNYiAayiW%2fwl%2bKfbI09IAQ%3d&risl=&pid=ImgRaw&r=0")`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center";
      main.style.backgroundSize = "100% 100%";
    } else if (h1DomElement.innerText === "Kid's Wearing") {
      h1DomElement.innerText = "Women's Trending Products";
      h1DomElement.style.color = "pink";

      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://tse4.mm.bing.net/th/id/OIP.GLMEBDLz_dflWqsYBi04vAHaE7?pid=ImgDet&w=178&h=118&c=7&dpr=1.5&o=7&rm=3")`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center";
      main.style.backgroundSize = "100% 100%";
    } else {
      h1DomElement.innerText = "Electronic Products";
      h1DomElement.style.color = "yellow";
      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://thumbs.dreamstime.com/z/flat-lay-photo-office-table-laptop-computer-notebook-digital-tablet-mobile-phone-modern-two-tone-background-pencil-103808696.jpg")`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center";
      main.style.backgroundSize = "100% 100%";
    }
  }, 3000);
}
