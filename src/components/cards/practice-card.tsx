import { Card, CardContent } from "../ui/card";
import { Gavel } from "lucide-react";

type Props = {
    label: string
};

export default function PracticeCard({ label}: Props) {
    return (
        <Card className="w-full max-w-full overflow-hidden bg-[#1e1e1e] hover:bg-deep-sb text-whyte rounded-none h-max pb-0 my-auto cursor-default">
            <CardContent className=" flex flex-wra items-center gap-2 md:gap-4 pb-0 md:p-5  p-2 my-auto  ">
                <Gavel className="flex-shrink-0 max-sm:size-4" />
                <p className="flex-wrap text-xs lg:text-base">
                    {label}
                </p>
            </CardContent>
        </Card>
    )
}