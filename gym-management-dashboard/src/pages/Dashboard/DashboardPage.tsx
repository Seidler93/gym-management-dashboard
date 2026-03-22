import DashboardTable from "./DashboardTable";
import { dashboardRows, dashboardWeeks } from "./TempData";

export default function DashboardPage() {
  return (
    <div>
      <DashboardTable
        title="Highland Park"
        rows={dashboardRows}
        initialWeeks={dashboardWeeks}
      />
    </div>
  );
}