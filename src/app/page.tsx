'use client';

const Home = () => {
  return (
    <div className="mt-8 justify-center flex">
      <div className="justify-between">
        <input className="m-2 bg-slate-200 h-10 px-2 rounded" type="text" />
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Add Todo</button>
      </div>
    </div>
  );
};

export default Home;
