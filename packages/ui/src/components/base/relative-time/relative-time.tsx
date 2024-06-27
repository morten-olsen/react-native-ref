import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

interface RelativeTimeProps {
  date: Date;
}

const format = (date: Date) => formatDistanceToNow(date, { addSuffix: true });

const RelativeTime: React.FC<RelativeTimeProps> = ({ date }) => {
  const [displayDate, setDisplayDate] = useState(format(date));
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayDate(format(date));
    }, 1000 * 30);

    setDisplayDate(format(date));

    return () => {
      clearInterval(interval);
    };
  }, [date]);
  return <>{displayDate}</>;
};

export { RelativeTime };
