function UserCard(props) {
  return (
    <div className="w-11/12 max-w-md bg-slate-50 px-3 py-5 mt-8 mx-auto rounded-lg shadow-lg sm:flex sm:items-center sm:justify-between">
      <img
        className=" w-2/5 sm:w-1/4 mx-auto sm:mx-2 rounded-full"
        src={props.imgUrl}
        alt="user-avtar"
      />
      <div className="flex flex-col mt-4">
        <h3 className=" text-slate-900 text-3xl font-bold">{props.name}</h3>
        <h5 className=" text-indigo-500 font-semibold text-lg italic mb-3 hover:text-indigo-700">
          <a href={props.url} rel="noreferrer" target="_blank">
            @{props.userId}
          </a>
        </h5>
        <p className=" text-slate-500 text-base font-semibold mb-3">
          {props.bio}
        </p>
        <p className=" text-slate-700 font-bold mb-1">
          Total Repos. -{" "}
          <span className=" text-indigo-500 text-lg">{props.repos}</span>
        </p>
        <h4 className=" text-slate-700 font-bold">
          <span className=" inline-block mr-3">
            Followers: {props.followers}
          </span>
          <span>Following: {props.following}</span>
        </h4>
      </div>
    </div>
  );
}
export default UserCard;
