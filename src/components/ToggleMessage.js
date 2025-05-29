import useToggle from "./useToggle";

export default function ToggleMessage() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div className="text-center space-y-4 p-6">
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && (
        <p className="text-lg font-medium text-gray-700">
          🎉 Hello! You toggled me!
        </p>
      )}
    </div>
  );
}
