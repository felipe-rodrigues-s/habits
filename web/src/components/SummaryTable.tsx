import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-yaer-beginnig";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();

export function SummaryTable() {
  console.log(summaryDates);
  return (
    <div
      className={`
			w-full
			flex
		`}>
      <div
        className={`
				grid grid-rows-7 grid-flow-row gap-3
			`}>
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className={`
							text-zinc-400 text-xl font-bold
							h-10 w-10
							flex items-center justify-center
						`}>
              {weekDay}
            </div>
          );
        })}
      </div>

      <div
        className={`
    		grid grid-col-7 grid-flow-col gap-3
  			`}>
        <HabitDay />
        <HabitDay />
      </div>
    </div>
  );
}
