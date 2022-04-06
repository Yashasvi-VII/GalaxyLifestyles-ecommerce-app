import "./widgetLg.css";
import React from "react";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Justin</span>
          </td>
          <td className="widgetLgDate">09/Feb/2022</td>
          <td className="widgetLgAmount">$260</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Ridhi</span>
          </td>
          <td className="widgetLgDate">10/March/2022</td>
          <td className="widgetLgAmount">$190</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Rahul</span>
          </td>
          <td className="widgetLgDate">10/Feb/2022</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">ALex</span>
          </td>
          <td className="widgetLgDate">24/Jan/2022</td>
          <td className="widgetLgAmount">$180</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Alexender</span>
          </td>
          <td className="widgetLgDate">09/Feb/2022</td>
          <td className="widgetLgAmount">$260</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
