const clearItem = (props) => {
  const newTask = props.tasks.filter((ele) => {
    if (ele.isDone == true) return false;
    return true;
  });
  props.setTasks(newTask);
};

export const Clear = (props) => {
  return props.tasks.length == 0 ? (
    <div className="flex justify-center h-[37px] w-full items-end mt-3">
      <p className="font-sans text-[#6B7280] text-[14px]">
        No tasks yet. Add one above!
      </p>{" "}
    </div>
  ) : (
    <div className="flex justify-between h-[37px] w-full items-end border-t border-t-[#E4E4E7] mt-3">
      <p className="font-sans text-[#6B7280] text-[14px]">
        {props.tasks.filter((ele) => ele.isDone == true).length} of{" "}
        {props.tasks.length} tasks completed
      </p>{" "}
      <p
        onClick={() => {
          if (window.confirm("Are you sure?")) clearItem(props);
        }}
        className="font-sans text-red-500 text-[14px]"
      >
        Clear completed
      </p>
    </div>
  );
};
