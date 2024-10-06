import { TESTIMONIALS } from "@/lib/data";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { getInitials, stringify } from "@/helpers/string";

type Props = {
    item: typeof TESTIMONIALS[0];
};

export default function TestimonialCard({ item }: Props) {
    return (
        <Card className="shadow-md p-4  min-w-[320px] lg:min-w-[370px] mr-4">
            <CardContent className="flex items-start gap-4 p-0">
                <Avatar className=" lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]">
                    <AvatarImage src={`/images/${item?.image}`} />
                    <AvatarFallback>
                        {getInitials(item?.name)}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h6 className="line-clamp-1 max-sm:text-base">
                            {stringify(item?.name)}
                        </h6>
                        <p className="text-sm line-clamp-1 text-neutral-500">
                            {stringify(item?.position)}
                        </p>
                    </div>
                    <div className="text-sm text-neutral-600">
                        &quot;  {stringify(item?.quote)} &quot;
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}