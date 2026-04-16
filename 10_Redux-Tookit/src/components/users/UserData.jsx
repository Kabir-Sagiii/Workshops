import { useRef } from "react";
import { username } from "../../slice/userSlice.js";
import { useDispatch } from "react-redux";
function UserData() {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const storeDatainReduxStore = () => {
    //access the data from textbox
    var textBoxData = inputRef.current.value;

    //giving the textbox to action creator called username
    var userActionObj = username(textBoxData);

    //calling dispatch and passing actionObj which received from actionCreator
    dispatch(userActionObj);
  };
  return (
    <div className="user-data">
      <h1>Users Data</h1>
      <input ref={inputRef} type="text" placeholder="username" />
      <button
        onClick={() => {
          storeDatainReduxStore();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default UserData;
