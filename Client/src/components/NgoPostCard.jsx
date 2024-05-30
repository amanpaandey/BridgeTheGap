/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

function NgoPostCard(props) {


  function getTimeDifference(createdAt) {
    const createdAtDate = new Date(createdAt);
    const currentDate = new Date();

    const differenceInSeconds = Math.floor((currentDate - createdAtDate) / 1000);
    
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000; // Approximate value
    const secondsInYear = 31536000; // Approximate value

    if (differenceInSeconds < secondsInMinute) {
        return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < secondsInHour) {
        const minutes = Math.floor(differenceInSeconds / secondsInMinute);
        return `${minutes} minutes ago`;
    } else if (differenceInSeconds < secondsInDay) {
        const hours = Math.floor(differenceInSeconds / secondsInHour);
        return `${hours} hours ago`;
    } else if (differenceInSeconds < secondsInMonth) {
        const days = Math.floor(differenceInSeconds / secondsInDay);
        return `${days} days ago`;
    } else if (differenceInSeconds < secondsInYear) {
        const months = Math.floor(differenceInSeconds / secondsInMonth);
        return `${months} months ago`;
    } else {
        const years = Math.floor(differenceInSeconds / secondsInYear);
        return `${years} years ago`;
    }
}



  
  props = props?.data

  console.log(props);


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <img
            alt="NGO Logo"
            className="rounded-full"
            height={50}
            src={props?.owner?.ngoAvatar}
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width={50}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {
                props?.owner?.ngoName
              }
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Posted{
                " "
              }
              {
                getTimeDifference(props?.createdAt)
              }
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img
          alt="Post Image"
          className="rounded-lg object-cover"
          height={400}
          src={props?.coverImage} 
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={600}
        />
        <div className="mt-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200">
           {
            props?.title
           }
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <HeartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Like</span>
              </Button>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                65 likes
              </span>
            </div>
            <Link
              className="text-sm font-medium text-primary-500 hover:underline"
              to={`/post/${ props._id}`}
            >
              Read more
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default NgoPostCard;

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
