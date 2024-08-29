// app/[locale]/contact/page.tsx
"use client";

import { useState } from "react";
import {
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaCheck,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
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
import { Alert } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type StatusType = {
  variant: "success" | "destructive";
  message: string;
} | null;

const Contact = () => {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<StatusType>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus({
          variant: "success",
          message: t("messageSentSuccess"),
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setStatus({
          variant: "destructive",
          message: data.message || t("messageSentError"),
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        variant: "destructive",
        message: t("generalError"),
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {t("getInTouch")}
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-2/3"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{t("sendMessage")}</CardTitle>
              <CardDescription>{t("formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("name")}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("email")}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("message")}
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full group">
                  <FaPaperPlane className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {t("sendButton")}
                </Button>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert variant={status.variant} className="mt-4">
                      <div className="flex items-center">
                        {status.variant === "success" ? (
                          <FaCheck className="mr-2 h-4 w-4" />
                        ) : (
                          <FaTimes className="mr-2 h-4 w-4" />
                        )}
                        <span>{status.message}</span>
                      </div>
                    </Alert>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:w-1/3"
        >
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-2xl">{t("connectWithMe")}</CardTitle>
              <CardDescription>{t("socialDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <FaEnvelope className="text-gray-600 dark:text-gray-400 text-xl" />
                <a
                  href="mailto:sebastianflorin603@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  sebastianflorin603@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <FaTwitter className="text-blue-400 text-xl" />
                <a
                  href="https://twitter.com/florin12er"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @florin12er
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
                <a
                  href="https://github.com/Florin12er"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/Florin12er
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
