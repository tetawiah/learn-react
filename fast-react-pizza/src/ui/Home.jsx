import CreateUser from '../features/user/CreateUser.jsx';

function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
