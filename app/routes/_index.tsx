import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Home" }];
};

export default function IndexPage() {
  return <div>Home</div>;
}
