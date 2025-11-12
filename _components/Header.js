import { CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";

export const Header = (props) => {
  const { setTasks, tasks, input, setInput } = props;

  const handleAdd = () => {
    if (input === "") {
      alert("Please write something");
      return;
    }
    setTasks([...tasks, { id: nanoid(), isDone: false, text: input }]);
    setInput("");
  };

  return (
    <CardHeader className="gap-5 w-[329px]">
      {" "}
      <h1 className="flex justify-center font-sans text-[20px] font-semibold w-[329px]">
        To-Do list
      </h1>
      <div className="flex max-w-sm items-center gap-2 w-[329px]">
        <Input
          type="email"
          placeholder="Add a new task..."
          className="h-10 focus-visible:border-blue-600 focus-visible:border-2 focus-visible:ring-0"
          value={props.input}
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        />
        <Button
          type="submit"
          variant="outline"
          className="bg-[#3C82F6] text-white w-[59px] h-10 font-sans font-normal text-[14px]"
          onClick={handleAdd}
        >
          add
        </Button>
      </div>
    </CardHeader>
  );
};
