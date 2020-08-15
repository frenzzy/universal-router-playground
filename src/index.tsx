import * as React from "react";
import UniversalRouter, { Routes } from "universal-router";
import generateUrls from "universal-router/generateUrls";

function parseSearch(items: any) {
  return {};
}

interface Main {
}

export const Main: React.FunctionComponent<Main> = () => {
  return <h1>Hello and Welcome!</h1>;
}

const routes: Routes = [
  { path: "/", action: (context: any) => <Main  {...parseSearch(context.search)} /> },
  {
    name: "main",
    path: "/main",
    children: [
      { path: "", action: (context) => <Main {...parseSearch(context.search)} /> },
      { path: "/legacy", action: () => <Main /> },
    ]
  },
  {
    path: "/workunits",
    children: [
      { path: "", action: () => <Main /> },
      { path: "/legacy", action: () => <Main /> },
      { path: "/:Wuid", action: (ctx, params) => <Main /> }
    ]
  },
]

console.log(UniversalRouter)
const router = new UniversalRouter(routes)

const g_url = generateUrls(router);

router.resolve('/foo').then((result) => console.log(result))
