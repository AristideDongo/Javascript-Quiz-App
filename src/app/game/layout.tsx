import NavLinks from "@/components/header/navlinks";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <NavLinks/>
      <div>{children}</div>
    </div>
  );
}