"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import { Loader2, X, Eye, EyeOff } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const t = useTranslations("SignUp");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="z-50 rounded-md rounded-t-none max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{t("register")}</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          {t("enterInformation")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">{t("firstName")}</Label>
              <Input
                id="first-name"
                placeholder="Max"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">{t("lastName")}</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
              />
            </div>
          </div>
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
            <Label htmlFor="password">{t("password")}</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                placeholder={t("password")}
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
          <div className="grid gap-2">
            <Label htmlFor="password_confirmation">
              {t("confirmPassword")}
            </Label>
            <div className="relative">
              <Input
                id="password_confirmation"
                type={showPasswordConfirmation ? "text" : "password"}
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="new-password"
                placeholder={t("confirmPassword")}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswordConfirmation(!showPasswordConfirmation)
                }
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPasswordConfirmation ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">{t("image")}</Label>
            <div className="flex items-end gap-4">
              {imagePreview && (
                <div className="relative w-16 h-16 rounded-sm overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Profile preview"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 w-full">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
                {imagePreview && (
                  <X
                    className="cursor-pointer"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            onClick={async () => {
              await signUp.email({
                email,
                password,
                name: `${firstName} ${lastName}`,
                image: image ? await convertImageToBase64(image) : "",
                callbackURL: "/sign-in",
                fetchOptions: {
                  onResponse: () => {
                    setLoading(false);
                  },
                  onRequest: () => {
                    setLoading(true);
                  },
                  onError: (ctx) => {
                    toast.error(ctx.error.message);
                  },
                  onSuccess: async () => {
                    router.push("/sign-in");
                  },
                },
              });
            }}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              t("createAccount")
            )}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center w-full border-t py-4">
          <p className="text-center text-xs text-neutral-500">
            {t("alreadyHaveAccount")}
            <Link href="/sign-in" className="underline" target="_blank">
              <br />
              <span className="dark:text-orange-200/90">{t("signIn")}</span>
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
