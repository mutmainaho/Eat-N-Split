const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormFriendList />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
function FriendList() {
  const friends = initialFriends;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}£
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}£
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormFriendList() {
  return (
    <form className="form-add-friend">
      <label>👫Friendname</label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍‍♀️ Your expense</label>
      <input type="text" />
      <label>👫 X's expense</label>
      <input type="text" />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option className="user">You</option>
        <option className="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
