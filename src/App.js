import { useEffect, useState } from "react";

// Original NameList component
const NameList = ({ data }) => {
  return (
    <div className="p-4 m-4 flex flex-col justify-center">
      {data.map((d, index) => (
        <ul key={index}>
          <li>{d}</li>
        </ul>
      ))}
    </div>
  );
};

// HOC that wraps NameList
const withLoadingLabel = (WrappedComponent) => {
  return ({ loading, data }) => {
    if (loading) {
      return <p className="text-blue-600 font-semibold">Loading...</p>;
    }
    return <WrappedComponent data={data} />;
  };
};

// HOC-wrapped version of NameList
const NameListWithLoading = withLoadingLabel(NameList);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const users = ["John", "Jane", "Alice", "Bob", "Charlie"];
    setTimeout(() => {
      setData(users);
      setLoading(false);
    }, 2000); // simulate 2 seconds loading
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <NameListWithLoading loading={loading} data={data} />
    </div>
  );
}
