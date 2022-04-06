import "./List.css";
import Sidebar from "../../components/Sidebar/Sidebar";
//import Datatable from "../../components/datatable/Datatable";
import Topbar from "../../components/topbar/Topbar";
import Datatable from "../../components/Datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
