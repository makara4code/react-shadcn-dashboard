import { Bell, Home, Package2, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, NavLink } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const getNavLinkClass = (isActive: boolean) => {
    return `flex items-center gap-3 px-3 py-2 transition-all rounded-lg ${
      isActive
        ? "bg-muted text-primary"
        : "text-muted-foreground hover:text-primary"
    }`;
  };

  return (
    <div className="hidden bg-red-200 border-r bg-muted/40 md:block">
      <div className="flex flex-col h-full max-h-screen gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Package2 className="w-6 h-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="w-8 h-8 ml-auto">
            <Bell className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <Home className="w-4 h-4" />
              Dashboard
            </NavLink>

            <NavLink
              to="/order"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <ShoppingCart className="w-4 h-4" />
              Orders
              <Badge className="flex items-center justify-center w-6 h-6 ml-auto rounded-full shrink-0">
                6
              </Badge>
            </NavLink>
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
