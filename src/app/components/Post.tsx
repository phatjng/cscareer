import { ArrowUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { Submission } from "snoowrap";

type Props = {
  data: Submission;
};

export default function Post(props: Props) {
  const data = props.data;

  return (
    <Link href={data.url}>
      <div className="grid grid-flow-col grid-cols-5 border text-base ease-in-out duration-200 p-2 mx-4 my-2 hover:bg-orange-50 hover:border-orange-300">
        <div className="flex items-center gap-1">
          <ArrowUpIcon />
          <span className="font-mono">{formatCount(data.ups)}</span>
        </div>

        <div className="col-span-4">
          <p>{data.title}</p>

          <div className="flex text-sm mt-4">
            <span className="text-orange-500">{data.author.name}</span>
            <span className="text-stone-500 ml-1">
              • {getPostedTime(data.created_utc)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function getPostedTime(time: number) {
  const createdDate = new Date(time * 1000); // Convert UNIX timestamp to milliseconds
  const currentTime = new Date();
  const timeDifference = Math.floor(
    (currentTime.getTime() - createdDate.getTime()) / 1000 // Calculate time difference in seconds
  );

  if (timeDifference < 1) {
    return "Less than a second ago";
  } else if (timeDifference < 3600) {
    // Less than 1 hour
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes}m`;
  } else if (timeDifference < 86400) {
    // Less than 24 hours
    const hours = Math.floor(timeDifference / 3600);
    return `${hours}h`;
  } else {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[createdDate.getMonth()];
    const day = createdDate.getDate();
    return `${month} ${day}`;
  }
}

function formatCount(count: number) {
  if (count < 1000) return count.toString(); // No formatting needed for counts less than 1000
  if (count >= 1000 && count < 1000000) return (count / 1000).toFixed(1) + "k"; // Format count in thousands with one decimal place
  return (count / 1000000).toFixed(1) + "M"; // Format count in millions with one decimal place
}
