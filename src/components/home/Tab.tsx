import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tab() {
  return (
    <>
      <Tabs defaultValue="today" className="px-4 flex flex-col mt-[8.5px]">
        <TabsList className="flex justify-between">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <TabsContent value="today">Today's data list down here</TabsContent>
        <TabsContent value="week">Week's data list down here</TabsContent>
        <TabsContent value="month">Month's data list down here</TabsContent>
        <TabsContent value="year">Year's data list down here</TabsContent>
      </Tabs>
    </>
  );
}
