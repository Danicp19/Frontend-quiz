import ClientHome from "@components/home/page";
import AppLayout from "./ui/AppLayout";


export default function Home() {
  return (
    <main>
      <div>
        <AppLayout>
          <ClientHome />
        </AppLayout>
      </div>
    </main>
  );
}