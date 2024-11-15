export default function DetailBill({
  name,
  billVl,
  onBillValue,
  yourBill,
  onYourBillValue,
  namesexpense,
  onWho,
  onSplit,
}) {
  return (
    <div className="details">
      <h1>split a bill with {name}</h1>
      <div>
        <label>💰 bill value:</label>
        <input type="number" value={billVl} onChange={onBillValue} />
      </div>
      <div>
        <label>🧍‍♂️ your expense:</label>
        <input type="number" value={yourBill} onChange={onYourBillValue} />
      </div>
      <div>
        <label>🧑‍🤝‍🧑 {name}'s expense:</label>
        <span>{namesexpense}</span>
      </div>
      <div>
        <label>🤑 who is playing the bill?</label>
        <select onChange={onWho}>
          <option value={"you"}>you</option>
          <option value={name}>{name}</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <button className="btn" onClick={onSplit}>
          split up
        </button>
      </div>
    </div>
  );
}
