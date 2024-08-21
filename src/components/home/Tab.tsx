import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Graph from "./Graph";

export default function Tab() {
  return (
    <>
      <Tabs defaultValue="today" className="px-4 flex flex-col mt-[8.5px]">
        <TabsContent value="today">
          <Graph />
        </TabsContent>
        <TabsContent value="week">
          <Graph />
        </TabsContent>
        <TabsContent value="month">
          <Graph />
        </TabsContent>
        <TabsContent value="year">
          <Graph />
        </TabsContent>
        <TabsList className="flex justify-between">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}
