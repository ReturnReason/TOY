import SideMenu from "./components/SideMenu";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between h-[100vh] m-4">
      <div className="w-full h-full bg-slate-300">{children}</div>
      <SideMenu />
    </div>
  );
}
