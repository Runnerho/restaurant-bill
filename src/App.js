import { useEffect, useState } from "react";
import "./App.css";
import img1 from "./images/1.jpg";
import img2 from "./images/download.jpg";
import AddNewFriends from "./components/AddFriend";
import DetailBill from "./components/DetailBill";

function App() {
  const [addNew, setaddNew] = useState(false);
  const [nameVl, setNameVl] = useState("");
  const [urlVl, setUrlVl] = useState(img1);
  const [showSelect, setShowSelect] = useState(false);
  const [nameOfFriend, SetNameOfFriend] = useState("");
  const [billValue, setBillValue] = useState(null);
  const [yourBillValue, setYourBillValue] = useState(null);
  const [selected, setSelected] = useState("you");
  const [selectId, setSelectId] = useState(null);
  const [balance, setBalance] = useState(0);

  const [myFriends, setMyFriends] = useState([
    { name: "Jeff", img: img2, id: 1, balances: 7 },
    { name: "Hamed", img: img2, id: 2, balances: -3 },
    { name: "ali", img: img2, id: 3, balances: 0 },
  ]);

  function handleAdd() {
    setaddNew(!addNew);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameVl != "") {
      setMyFriends([
        ...myFriends,
        { name: nameVl, img: urlVl, id: myFriends.length + 1, balances: 0 },
      ]);
      setaddNew(!addNew);
      setNameVl("");
      setUrlVl(urlVl === img1 ? img2 : img1);
    }
  }

  function handleShowSelect(name, id) {
    setShowSelect(true);
    SetNameOfFriend(name);
    setSelectId(selectId === id ? null : id);
  }

  function handleWho(e) {
    setSelected(e);
  }

  function handleSplitUp() {
    if (selected === "you") {
      if (billValue - yourBillValue != 0) {
        setBalance(billValue - yourBillValue);
      }
    } else {
      if (billValue - yourBillValue != 0) {
        setBalance(-yourBillValue);
      }
    }
  }
  useEffect(() => {
    setMyFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectId ? { ...friend, balances: balance } : friend
      )
    );
  }, [balance]);

  return (
    <>
      <section>
        <div className="box-prof">
          {myFriends.map((items) => (
            <div key={items.id} className="prof-item">
              <div className="photo">
                <img src={items.img} />
              </div>
              <div>
                <div>{items.name}</div>
                {items.balances < 0 && (
                  <div className="red">
                    you owe {items.name} {-items.balances}
                  </div>
                )}
                {items.balances > 0 && (
                  <div className="green">
                    {items.name} owes you {items.balances}
                  </div>
                )}
                {items.balances == 0 && (
                  <div>you and {items.name} are even</div>
                )}
              </div>
              <div>
                <button
                  className="btn"
                  onClick={() => handleShowSelect(items.name, items.id)}
                >
                  select
                </button>
              </div>
            </div>
          ))}
          {addNew === false ? (
            <div className="adds">
              <button className="btn" onClick={handleAdd}>
                Add Friends
              </button>
            </div>
          ) : (
            <AddNewFriends
              nameValue={nameVl}
              urlValue={urlVl}
              onChangeName={(e) => setNameVl(e.target.value)}
              onChangeUrl={(e) => setUrlVl(e.target.value)}
              onAddDetail={(e) => handleSubmit(e)}
              onCancel={() => setaddNew(false)}
            />
          )}
        </div>
        {showSelect && (
          <DetailBill
            name={nameOfFriend}
            billVl={+billValue}
            onBillValue={(e) => setBillValue(Number(e.target.value))}
            yourBill={+yourBillValue}
            onYourBillValue={(e) => setYourBillValue(Number(e.target.value))}
            namesexpense={
              billValue - yourBillValue >= 0
                ? billValue - yourBillValue
                : "correct bill plz!"
            }
            onWho={(e) => handleWho(e.target.value)}
            onSplit={handleSplitUp}
          />
        )}
      </section>
    </>
  );
}
export default App;
