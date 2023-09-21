import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type ResourceCardParams = {
  key: number;
  title: string;
  id: number;
  image: string;
  resourceLink: string;
};

const ResourceCard: FC<ResourceCardParams> = ({
  title,
  id,
  image,
  resourceLink,
}) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={resourceLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <Link
          href={resourceLink}
          target="_blank"
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Check out
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
