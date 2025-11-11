"use client";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { nanoid } from "nanoid";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  console.log(tasks);

  const handleAdd = () => {
    setTasks([...tasks, { id: nanoid(), isDone: false, text: input }]);
    setInput("");
  };

  const deleteItem = (comp) => {
    const newTask = tasks.filter((item) => {
      if (item.id !== comp.id) return true;
      return false;
    });
    setTasks(newTask);
  };

  const clearItem = () => {
    const newTask = tasks.filter((ele) => {
      if (ele.isDone == true) return false;
      return true;
    });
    setTasks(newTask);
  };

  return (
    <div className="w-screen h-screen flex justify-center p-10">
      <Card className="w-[377px] h-fit gap-4 relative pb-15">
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
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <Button
              type="submit"
              variant="outline"
              className="bg-[#3C82F6] text-white w-[59px] h-10 font-sans font-normal text-[14px]"
              onClick={
                input === ""
                  ? () => {
                      alert("Please write something");
                    }
                  : handleAdd
              }
            >
              add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="All" className="w-[329px] gap-7">
            <TabsList className="bg-white gap-1.5 h-8">
              <TabsTrigger
                value="All"
                className="h-8 bg-[#F3F4F6] text-[#363636] font-normal text-[12px] data-[state=active]:bg-blue-500 
    data-[state=active]:text-white "
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="Active"
                className="h-8 bg-[#F3F4F6] text-[#363636] font-normal text-[12px] data-[state=active]:bg-blue-500 
    data-[state=active]:text-white "
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="Completed"
                className="h-8 bg-[#F3F4F6] text-[#363636] font-normal text-[12px] data-[state=active]:bg-blue-500 
    data-[state=active]:text-white "
              >
                Completed
              </TabsTrigger>
            </TabsList>
            <TabsContent value="All">
              <div className="flex flex-col gap-5">
                {tasks.map((comp) => {
                  return (
                    <div
                      key={comp.id}
                      className="flex h-[62px] w-full bg-[#F9FAFB] items-center rounded-md p-4 justify-between"
                    >
                      <div className="flex gap-2.5">
                        <Checkbox
                          checked={comp.isDone}
                          id="done"
                          onClick={() => {
                            const newTasks = tasks.map((ele) => {
                              if (ele.id !== comp.id) return ele;
                              return {
                                id: comp.id,
                                isDone: !comp.isDone,
                                text: comp.text,
                              };
                            });
                            setTasks(newTasks);
                          }}
                          className={`data-[state=checked]:bg-blue-500 data-[state=checked]:border-none`}
                        />
                        <Label
                          htmlFor="done"
                          className={` ${comp.isDone ? "line-through" : ""}`}
                        >
                          {comp.text}
                        </Label>
                      </div>
                      <Button
                        onClick={() => deleteItem(comp)}
                        className="bg-[#FEF2F2] text-[#EF4444] self-end h-7 hover:bg-[#F9FAFB]"
                      >
                        Delete
                      </Button>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="Active">
              <div className="flex flex-col gap-5">
                {tasks
                  .filter((el) => {
                    return el.isDone === false;
                  })
                  .map((comp) => {
                    return (
                      <div
                        key={comp.id}
                        className="flex h-[62px] w-full bg-[#F9FAFB] items-center rounded-md p-4 justify-between"
                      >
                        <div className="flex gap-2.5">
                          <Checkbox
                            checked={comp.isDone}
                            id="done"
                            onClick={() => {
                              const newTasks = tasks.map((ele) => {
                                if (ele.id !== comp.id) return ele;
                                return {
                                  id: comp.id,
                                  isDone: !comp.isDone,
                                  text: comp.text,
                                };
                              });
                              setTasks(newTasks);
                            }}
                          />
                          <Label htmlFor="done">{comp.text}</Label>
                        </div>
                        <Button
                          onClick={() => deleteItem(comp)}
                          className="bg-[#FEF2F2] text-[#EF4444] self-end h-7 hover:bg-[#F9FAFB]"
                        >
                          Delete
                        </Button>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>
            <TabsContent value="Completed">
              <div className="flex flex-col gap-5">
                {tasks
                  .filter((el) => {
                    return el.isDone === true;
                  })
                  .map((comp) => {
                    return (
                      <div
                        key={comp.id}
                        className="flex h-[62px] w-full bg-[#F9FAFB] items-center rounded-md p-4 justify-between"
                      >
                        <div className="flex gap-2.5">
                          <Checkbox
                            checked={comp.isDone}
                            id="done"
                            onClick={() => {
                              const newTasks = tasks.map((ele) => {
                                if (ele.id !== comp.id) return ele;
                                return {
                                  id: comp.id,
                                  isDone: !comp.isDone,
                                  text: comp.text,
                                };
                              });
                              setTasks(newTasks);
                            }}
                            className={`data-[state=checked]:bg-blue-500 data-[state=checked]:border-none`}
                          />
                          <Label
                            htmlFor="done"
                            className={` ${comp.isDone ? "line-through" : ""}`}
                          >
                            {comp.text}
                          </Label>
                        </div>
                        <Button
                          onClick={() => deleteItem(comp)}
                          className="bg-[#FEF2F2] text-[#EF4444] self-end h-7 hover:bg-[#F9FAFB]"
                          variant="ghost"
                        >
                          Delete
                        </Button>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>
          </Tabs>
          {tasks.length == 0 ? (
            <div className="flex justify-center h-[37px] w-full items-end mt-3">
              <p className="font-sans text-[#6B7280] text-[14px]">
                No tasks yet. Add one above!
              </p>{" "}
            </div>
          ) : (
            <div className="flex justify-between h-[37px] w-full items-end border-t border-t-[#E4E4E7] mt-3">
              <p className="font-sans text-[#6B7280] text-[14px]">
                {tasks.filter((ele) => ele.isDone == true).length} of{" "}
                {tasks.length} tasks completed
              </p>{" "}
              <p
                onClick={() => {
                  if (window.confirm("Are you sure?")) clearItem();
                }}
                className="font-sans text-red-500 text-[14px]"
              >
                Clear completed
              </p>
            </div>
          )}
        </CardContent>
        <p className="flex absolute bottom-5 gap-1 self-center text-[12px] text-[#6B7280]">
          Powered by{" "}
          <span className="text-[12px] text-[#3B73ED]">Pinecone academy</span>
        </p>
      </Card>
    </div>
  );
}
