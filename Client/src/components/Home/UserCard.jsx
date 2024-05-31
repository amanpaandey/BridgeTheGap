/* eslint-disable react/prop-types */

import {
    Card,
    CardContent,
   
  } from "@/components/ui/card"
  import { Link } from "react-router-dom";
function UserCard(props) {

    
    props = props?.user
  return (
    <Link to={`/userprofile/${props?._id}`}>
    <Card>
    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
      <img
        alt="Donor Logo"
        className="rounded-full"
        height={80}
        src={props?.avatar}
        style={{
          aspectRatio: "80/80",
          objectFit: "cover",
        }}
        width={80}
      />
      <div className="space-y-1 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{props?.username}</h3>
        <p className="text-gray-600 dark:text-gray-400">{props?.fullname}</p>
      </div>
    </CardContent>
  </Card>
  </Link>
  )
}

export default UserCard