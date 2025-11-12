"use client";
import { List } from "@/_components/List";
import { Clear } from "@/_components/Clear";
import { Header } from "@/_components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  console.log(tasks);

  return (
    <div className="w-screen h-screen flex justify-center p-10">
      <Card className="w-[377px] h-fit gap-4 relative pb-15">
        <Header
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />
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
                    <List
                      key={comp.id}
                      tasks={tasks}
                      setTasks={setTasks}
                      text={comp.text}
                      id={comp.id}
                      isDone={comp.isDone}
                    />
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
                      <List
                        key={comp.id}
                        tasks={tasks}
                        setTasks={setTasks}
                        text={comp.text}
                        id={comp.id}
                        isDone={comp.isDone}
                      />
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
                      <List
                        key={comp.id}
                        tasks={tasks}
                        setTasks={setTasks}
                        text={comp.text}
                        id={comp.id}
                        isDone={comp.isDone}
                      />
                    );
                  })}
              </div>
            </TabsContent>
          </Tabs>
          <Clear tasks={tasks} setTasks={setTasks} />
        </CardContent>
        <p className="flex absolute bottom-5 gap-1 self-center text-[12px] text-[#6B7280]">
          Powered by{" "}
          <span className="text-[12px] text-[#3B73ED]">Pinecone academy</span>
        </p>
      </Card>
    </div>
  );
}
