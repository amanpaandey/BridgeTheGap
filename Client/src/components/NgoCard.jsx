/* eslint-disable react/prop-types */

import { Card, CardContent } from "@/components/ui/card";



// eslint-disable-next-line no-unused-vars
function NgoCard(props) {
   // console.log(props);

  return (
    
    
      <Card >
        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
          <img
            alt="NGO Logo"
            className="rounded-full"
            height={80}
            src={props?.ngo?.ngoAvatar}
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={80}
          />
          <div className="space-y-1 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {props?.ngo?.ngoName}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {props?.ngo?.ngoDescription}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {props?.ngo?.ngoAddress}
            </p>
          </div>
        </CardContent>
      </Card>
    
 
  )
}

export default NgoCard


