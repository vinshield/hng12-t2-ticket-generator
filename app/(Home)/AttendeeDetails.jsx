"use client";
import { Divider } from "@/components/ui/divider";
import React, { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUploadThing } from "@/lib/uploadthing";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "@/components/shared/FileUploader";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  about: z
    .string()
    .min(10, { message: "About must be at least 10 characters." }),
  imageUrl: z.string().url(),
});

const AttendeeDetails = ({ infoCollected, goBack }) => {
  const { startUpload } = useUploadThing("imageUploader");

  const [files, setFiles] = useState([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      about: "",
      imageUrl: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    let savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      savedFormData = JSON.parse(savedFormData);
      Object.entries(savedFormData).forEach(([key, value]) => {
        form.setValue(key, value);
      });
    }
  }, []);

  async function onSubmit(values) {
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      values.imageUrl = uploadedImages[0].ufsUrl;
    }
    localStorage.setItem("formData", JSON.stringify(values));
    infoCollected();
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-white">Attendee Details</h1>
          <p className="font-serif"> Step 2/3</p>
        </div>
        <Divider stage={2} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="relative">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Divider stage={0} />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Enter your name
                </FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel className="text-base font-normal">
                  Enter your email *
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <span className="pointer-events-none absolute left-3 select-none">
                      <Mail size={20} />
                    </span>

                    <Input
                      className="pl-9"
                      placeholder="hello@avioflagos.io"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  About the project
                </FormLabel>
                <FormControl>
                  <Textarea rows="4" {...field} placeholder="Textarea" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full flex-col gap-3 md:flex-row-reverse">
            <Button disabled={isSubmitting} className="w-full" type="submit">
              {isSubmitting ? "Generating Ticket..." : "Get My Free Ticket"}
            </Button>
            <Button
              onClick={goBack}
              className="w-full"
              type="button"
              variant="outline"
            >
              Back
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AttendeeDetails;
