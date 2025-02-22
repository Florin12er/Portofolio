"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function SignIn() {
  const t = useTranslations("SignIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn.email({
        email,
        password,
        fetchOptions: {
          onResponse: () => {
            setLoading(false);
          },
          onRequest: () => {
            setLoading(true);
          },
          onError: (ctx) => {
            if (ctx.error.status === 401) {
              toast.error("Invalid email or password. Please try again.");
            } else {
              toast.error("An error occurred. Please try again later.");
            }
          },
          onSuccess: async () => {
            toast.success("Signed in successfully!");
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("Please enter a valid email and password.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: "google" | "github") => {
    try {
      await signIn.social({
        provider,
        fetchOptions: {
          onError: (ctx) => {
            toast.error(
              `Failed to sign in with ${provider}. Please try again.`
            );
          },
          onSuccess: async () => {
            toast.success(`Signed in with ${provider} successfully!`);
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error(`${provider} sign-in error:`, error);
      toast.error(
        `An unexpected error occurred with ${provider} sign-in. Please try again.`
      );
    }
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{t("login")}</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          {t("enterEmail")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">{t("password")}</Label>
            </div>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t("password")}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              onClick={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <Label htmlFor="remember"> {t("rememberMe")}</Label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            onClick={handleSignIn}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              t("login")
            )}
          </Button>

          <div
            className={cn(
              "w-full gap-2 flex items-center",
              "justify-between flex-col"
            )}
          >
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              onClick={() => handleSocialSignIn("google")}
            >
              <FcGoogle className="text-xl" />
              {t("signInGoogle")}
            </Button>
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              onClick={() => handleSocialSignIn("github")}
            >
              <FaGithub className="text-xl" />
              {t("signInGithub")}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center w-full border-t py-4">
          <p className="text-center text-xs text-neutral-500">
            {t("notAccount")}
            <Link href="/sign-up" className="underline" target="_blank">
              <br />
              <span className="dark:text-orange-200/90">{t("signUp")}</span>
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
