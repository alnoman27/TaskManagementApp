export default function Task({ task, idx, deletedTask, completedTodoTask }) {
  const { name, description, isCompleted, _id } = task;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {idx + 1}
      </th>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>
        {name}
      </td>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">
        {isCompleted ? "Completed ✅" : "Pending ❌"}
      </td>
      <td className="px-6 py-4 flex gap-2">
        <button
          onClick={() => deletedTask(_id)}
          className="py-2 px-4 bg-red-500 hover:bg-red-400 text-white rounded"
        >
          Delete
        </button>
        {isCompleted ? (
          ""
        ) : (
          <button
            onClick={() => completedTodoTask(_id)}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white p-2 rounded"
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
}
