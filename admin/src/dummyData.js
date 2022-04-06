export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 5000,
  },
  {
    name: "Apr",
    "Active User": 4000,
  },
  {
    name: "May",
    "Active User": 3000,
  },
  {
    name: "Jun",
    "Active User": 2000,
  },
  {
    name: "Jul",
    "Active User": 4000,
  },
  {
    name: "Agu",
    "Active User": 3000,
  },
  {
    name: "Sep",
    "Active User": 4000,
  },
  {
    name: "Oct",
    "Active User": 1000,
  },
  {
    name: "Nov",
    "Active User": 4000,
  },
  {
    name: "Dec",
    "Active User": 3000,
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Products",
    headerName: "Products",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "Stock",
    headerName: "Stock",
    width: 230,
  },

  {
    field: "Status",
    headerName: "Status",
    width: 100,
  },
  {
    field: "Price",
    headerName: "Price",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 5000,
  },
];

export const userRows = [
  {
    id: 1,
    username: "David Miller",
    avatar: "https://i.ibb.co/BVCsSfV/photo1.jpg",
    email: "Milledavid89@gmail.com",
    status: "Active",
    transaction: "$1200.00",
  },
  {
    id: 2,
    username: "Milye Jenner",
    avatar: "https://i.ibb.co/x1JhHN3/photo4.jpg",
    email: "MilyeJenner7@gmail.com",
    status: "Active",
    transaction: "$890.30",
  },
  {
    id: 3,
    username: "Anderson Thomas",
    avatar: "https://i.ibb.co/nrCgMDk/photo3.jpg",
    email: "Anthomas@gmail.com",
    status: "Active",
    transaction: "$879.45",
  },
  {
    id: 4,
    username: "Jackson Lee",
    avatar: "https://i.ibb.co/z4p5vFm/photo2.jpg",
    email: "jacksonlee82@gmail.com",
    status: "Active",
    transaction: "$563.80",
  },
  {
    id: 5,
    username: "Ana Hadams",
    avatar: "https://i.ibb.co/QM7B2MC/photo5.jpg",
    email: "Anahadms@gmail.com",
    status: "Active",
    transaction: "$728.56",
  },
  {
    id: 6,
    username: "Lewis clark",
    avatar: "https://i.ibb.co/ctYMFyd/photo6.jpg",
    email: "clarklewis@gmail.com",
    status: "Active",
    transaction: "$3902.24",
  },
  {
    id: 7,
    username: "Levo john",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "johnlevo@gmail.com",
    status: "Active",
    transaction: "$2556.57",
  },
  {
    id: 8,
    username: "Rahul Sharma ",
    avatar: "https://i.ibb.co/QC8QX0q/photo8.jpg",
    email: "Sharmarahul@gmail.com",
    status: "Active",
    transaction: "$3405.90",
  },
  {
    id: 9,
    username: "olivia sap",
    avatar: "https://i.ibb.co/RptLrZK/photo7.jpg",
    email: "oliviasap@gmail.com",
    status: "Active",
    transaction: "$1023.35",
  },
  {
    id: 10,
    username: "Chloe",
    avatar: "https://i.ibb.co/pX4tQLX/photo9.jpg",
    email: "Chloe@gmail.com",
    status: "Active",
    transaction: "8475.28",
  },
];

export const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];
