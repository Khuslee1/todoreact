import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const deleteItem = (props) => {
  const newTask = props.tasks.filter((item) => {
    if (item.id !== props.id) return true;
    return false;
  });
  props.setTasks(newTask);
};

export const List = (props) => {
  return (
    <div className="flex h-[62px] w-full bg-[#F9FAFB] items-center rounded-md p-4 justify-between">
      <div className="flex gap-2.5">
        <Checkbox
          checked={props.isDone}
          id="done"
          onClick={() => {
            const newTasks = props.tasks.map((ele) => {
              if (ele.id !== props.id) return ele;
              return {
                id: props.id,
                isDone: !props.isDone,
                text: props.text,
              };
            });
            props.setTasks(newTasks);
          }}
          className={`data-[state=checked]:bg-blue-500 data-[state=checked]:border-none`}
        />
        <Label htmlFor="done">{props.text}</Label>
      </div>
      <Button
        onClick={() => deleteItem(props)}
        className="bg-[#FEF2F2] text-[#EF4444] self-end h-7 hover:bg-[#F9FAFB]"
      >
        Delete
      </Button>
    </div>
  );
};
