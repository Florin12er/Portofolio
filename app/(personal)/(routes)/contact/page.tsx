"use client";

import { useState } from "react";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <Card className="md:w-2/3">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below to get in touch with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Feel free to reach out to me through the form or via my social
              media profiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-600 dark:text-gray-400" />
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:underline"
              >
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaTwitter className="text-blue-400" />
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @yourusername
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-gray-800 dark:text-gray-200" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/yourusername
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
