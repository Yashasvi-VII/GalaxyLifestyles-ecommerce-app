// // import Chart from "../../components/Chart/Chart";
// // import FeaturedInfo from "../../components/Feature/Feature";
// // import "./Home.css";
// // import { userData } from "../../dummyData";
// // import WidgetSm from "../../components/Widgetsum/Widgetsum";
// // import WidgetLg from "../../components/Widget/Widget";
// // import { useEffect, useMemo, useState } from "react";
// // import { userRequest } from "../../requestMethods";

// // export default function Home() {
// //   const [userStats, setUserStats] = useState([]);

// //   const MONTHS = useMemo(
// //     () => [
// //       "Jan",
// //       "Feb",
// //       "Mar",
// //       "Apr",
// //       "May",
// //       "Jun",
// //       "Jul",
// //       "Agu",
// //       "Sep",
// //       "Oct",
// //       "Nov",
// //       "Dec",
// //     ],
// //     []
// //   );

// //   useEffect(() => {
// //     const getStats = async () => {
// //       try {
// //         const res = await userRequest.get("/users/stats");
// //         res.data.map((item) =>
// //           setUserStats((prev) => [
// //             ...prev,
// //             { name: MONTHS[item._id - 1], "Active User": item.total },
// //           ])
// //         );
// //       } catch {}
// //     };
// //     getStats();
// //   }, [MONTHS]);

// //   return (
// //     <div className="home">
// //       <FeaturedInfo />
// //       <Chart
// //         data={userStats}
// //         title="User Analytics"
// //         grid
// //         dataKey="Active User"
// //       />
// //       <div className="homeWidgets">
// //         <WidgetSm />
// //         <WidgetLg />
// //       </div>
// //     </div>
// //   );
// // }
// import Chart from "../../components/Chart/Chart";
// import Feature from "../../components/Feature/Feature";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Featuredchart from "../../components/Featuredchart/Featured";
// import "./home.css";
// import Topbar from "../../components/topbar/Topbar";
// import { userData } from "../../dummyData";
// import WidgetLg from "../../components/WidgetLg/WidgetLg";
// import Widgetsm from "../../components/WidgetSm/Widgetsm";
// import Table from "../../components/Table/Table";
// function Home() {
//   return (
//     <div className="home">
//       <Sidebar />

//       <div className="homecontainer">
//         <Topbar />
//         <div className="widgets">
//           <Feature type="Users" />
//           <Feature type="Orders" />
//           <Feature type="Revnue" />
//           <Feature type="Balance" />
//         </div>
//         <div className="charts">
//           <Featuredchart />
//           <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
//         </div>
//         <div className="listContainer">
//           <div className="listTitle">Latest Transctions</div>
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/Featuredchart/Featured";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/Widgetsm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
