import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Props {
  trigger: string
  content: string
}

export const CustomTooltip = ({ trigger, content }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="border-[2px] border-dashed border-purple-500 border-opacity-25">{trigger}</TooltipTrigger>
        <TooltipContent className="max-w-[200px]">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
