import Link from "next/link";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return Link({ routeTree, defaultErrorComponent: AppErrorComponent });
}
