// app/settings/page.jsx  (SERVER)
import ClientShell from "../../components/ClientShell";
import SettingsForm from "./SettingsForm";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <SettingsForm />
        </div>
      </main>
    </ClientShell>
  );
}
