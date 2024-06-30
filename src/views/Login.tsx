import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOnLogin = () => {
    console.log("Login");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleOnLogin}
            loading={isLoading}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default React.memo(LoginForm);
