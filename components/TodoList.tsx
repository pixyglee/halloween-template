"use client"
import { Card } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "./ui/button"
import { format, set } from "date-fns"
import { Calendar } from "./ui/calendar"
const TodoList = () => {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>"Pick a date"</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        className="rounded-lg border"
                    />
                </PopoverContent>
            </Popover>

            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="items1" checked />
                            <label htmlFor="items1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList