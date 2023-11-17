import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { BsCheck } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#E5E6EA] data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center h-[22px] w-[22px] rounded-full bg-white shadow-lg ring-0 transition-transform",
          checked ? "translate-x-5 bg-light-blue" : "translate-x-0"
        )}
      >
        {checked ? (
          <BsCheck size={17} className="text-white" />
        ) : (
          <IoClose size={17} className="text-silver_text-foreground" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
