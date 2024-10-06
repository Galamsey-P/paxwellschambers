import { CLIENTS } from "@/lib/data";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { stringify } from "@/helpers/string";
import { RelativeImage } from "../image";

type Props = {
    item: typeof CLIENTS[0]
};

export default function ClientCard({ item}: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <RelativeImage width={151} height={55} src={item?.image} containerStyles="w-[151px]" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{stringify(item?.name)}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}