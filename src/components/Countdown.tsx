import { DateTime } from "luxon";
import {
  default as RCountdown,
  type CountdownRendererFn,
} from "react-countdown";

const wedding_date = DateTime.fromObject(
  {
    year: 2025,
    month: 5,
    day: 10,
    hour: 16,
  },
  {
    zone: "America/Chicago",
  }
);

function Section({ timer, title }: { timer: number; title: string }) {
  return (
    <div className="px-2 lg:px-4">
      <div className="text-5xl md:text-6xl lg:text-7xl font-italiana">{timer}</div>
      <div className="text-sm md:text-base lg:text-xl font-montserrat font-medium text-orchid py-2 lg:py-4">
        {title}
      </div>
    </div>
  );
}

const renderer: CountdownRendererFn = ({
  completed,
  days,
  hours,
  minutes,
  seconds,
}) => {
  if (completed) {
    return <div>Donezo</div>;
  } else {
    return (
      <div className="flex text-center items-center justify-center pt-4">
        <Section timer={days} title="DAYS" />
        <Section timer={hours} title="HOURS" />
        <Section timer={minutes} title="MINUTES" />
        <Section timer={seconds} title="SECONDS" />
      </div>
    );
  }
};

export default function Countdown() {
  return <RCountdown date={wedding_date.toJSDate()} renderer={renderer} />;
}
