import AddEventBanner from "../components/AddEventBanner";
import EventsList from "../components/EventsList";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <AddEventBanner />
      <EventsList />
    </div>
  );
}

export default DashboardPage;
