"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import schema from "./schema";
import { useEffect } from "react";

export default function ContactForm() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // Reset form when component mounts
    useEffect(() => {
        form.reset();
    }, [form]);

    function onSubmit(values: z.infer<typeof schema>) {
        console.log(values);
        toast.success("Your request has been sent!");
        // Reset form after successful submission
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name <span className="text-yellow-700">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} className="bg-transparent border-b border-gray-300 focus:border-transparent placeholder:text-white/80" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email <span className="text-yellow-700">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="Your email" {...field} className="bg-transparent border-b border-gray-300 focus:border-transparent placeholder:text-white/80" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message <span className="text-yellow-700">*</span></FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message" {...field} className="bg-transparent border-none resize-none border-gray-300 focus:border-transparent placeholder:text-white/80" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant={"primary"}>Submit</Button>
            </form>
        </Form>
    );
}