import { useEffect } from "react";
import UserCard from "./components/UserCard";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
function App() {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("code-devendra");
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);
  return (
    <>
      <SearchBox
        setName={(username) => {
          setUserName(username);
        }}
      />
      {user.login ? (
        <UserCard
          userId={user.login}
          imgUrl={user.avatar_url}
          url={user.html_url}
          name={user.name}
          bio={user.bio}
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />
      ) : (
        <h1 className=" text-3xl text-red-600 text-center font-semibold">
          No Result Found!
        </h1>
      )}
    </>
  );
}

export default App;
