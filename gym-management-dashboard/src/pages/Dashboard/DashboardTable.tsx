import "../../styles/dashboard.css";
import { useState } from "react";

export type DashboardMetricKey =
  | "netActiveMembers"
  | "yellowHolds"
  | "greenHolds"
  | "weeklyNet"
  | "signUps"
  | "vipSignUps"
  | "referralSignUps"
  | "currentTrials"
  | "reactivationSignUps"
  | "newCancellations"
  | "instagramPosts";

type GoalType = ">=" | "<=" | "<" | ">";

interface DashboardRowConfig {
  key: DashboardMetricKey;
  label: string;
  goalType: GoalType;
  goalValue: number;
}

interface DashboardWeek {
  id: string;
  startDate: string;
  endDate: string;
  values: Record<DashboardMetricKey, number | null>;
}

interface DashboardTableProps {
  title: string;
  rows: DashboardRowConfig[];
  initialWeeks: DashboardWeek[];
}

function formatGoal(goalType: GoalType, goalValue: number) {
  return `${goalType} ${goalValue}`;
}

function formatWeekRange(startDate: string, endDate: string) {
  const start = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");

  const startLabel = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const endLabel = end.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return `${startLabel} - ${endLabel}`;
}

function isGoalMet(value: number | null, goalType: GoalType, goalValue: number) {
  if (value === null) return false;

  switch (goalType) {
    case ">=":
      return value >= goalValue;
    case "<=":
      return value <= goalValue;
    case "<":
      return value < goalValue;
    case ">":
      return value > goalValue;
    default:
      return false;
  }
}

export default function DashboardTable({ title, rows, initialWeeks }: DashboardTableProps) {
  const [weeks, setWeeks] = useState<DashboardWeek[]>(initialWeeks);

  function handleCellChange(
    weekId: string,
    metricKey: DashboardMetricKey,
    nextValue: string
  ) {
    setWeeks((prevWeeks) =>
      prevWeeks.map((week) => {
        if (week.id !== weekId) return week;

        return {
          ...week,
          values: {
            ...week.values,
            [metricKey]: nextValue === "" ? null : Number(nextValue),
          },
        };
      })
    );
  }

  return (
    <div className="dashboard-table-card">
      <div className="dashboard-table-card__header">
        <h2>{title}</h2>
      </div>

      <div className="dashboard-table-scroll">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th className="dashboard-table__metric-col top">Title</th>
              <th className="dashboard-table__goal-col top">Goal</th>

              {weeks.map((week) => (
                <th key={week.id} className="dashboard-table__week-col">
                  {formatWeekRange(week.startDate, week.endDate)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td className="dashboard-table__metric-cell">{row.label}</td>
                <td className="dashboard-table__goal-cell">
                  {formatGoal(row.goalType, row.goalValue)}
                </td>

                {weeks.map((week) => {
                  const value = week.values[row.key];
                  const metGoal = isGoalMet(value, row.goalType, row.goalValue);

                  return (
                    <td
                      key={`${row.key}-${week.id}`}
                      className={
                        metGoal
                          ? "dashboard-table__value-cell dashboard-table__value-cell--good"
                          : "dashboard-table__value-cell dashboard-table__value-cell--bad"
                      }
                    >
                      <input
                        className="dashboard-table__input"
                        type="number"
                        value={value ?? ""}
                        onChange={(event) =>
                          handleCellChange(week.id, row.key, event.target.value)
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}