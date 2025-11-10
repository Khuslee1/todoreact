"use client";
import Image from "next/image";
import { useState } from "react";

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

  const handleAdd = () => {
    const updatedTasks = tasks.push({ text: input, checked: false });
    setTasks(updatedTasks);
  };

  return (
    <div className="w-screen h-screen flex justify-center p-10">
      <Card className="w-[377px] h-[290px] gap-4 relative">
        <CardHeader className="gap-5 w-[329px]">
          {" "}
          <h1 className="flex justify-center font-sans text-[20px] font-semibold w-[329px]">
            To-Do list
          </h1>
          <div className="flex max-w-sm items-center gap-2 w-[329px]">
            <Input
              type="email"
              placeholder="Add a new task..."
              className="h-10 focus-visible:border-blue-600 focus-visible:border-2"
              value={input}
              onChange={(e) => setInput(e.target.input)}
            />
            <Button
              type="submit"
              variant="outline"
              className="bg-[#3C82F6] text-white w-[59px] h-10 font-sans font-normal text-[14px]"
            >
              add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-[329px] gap-7">
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
            <TabsContent value="All">1</TabsContent>
            <TabsContent value="Active">2</TabsContent>
            <TabsContent value="Completed">3</TabsContent>
          </Tabs>
        </CardContent>
        <p className="flex absolute bottom-5 gap-1 self-center text-[12px] text-[#6B7280]">
          Powered by{" "}
          <span className="text-[12px] text-[#3B73ED]">Pinecone academy</span>
        </p>
      </Card>
    </div>
  );
}
