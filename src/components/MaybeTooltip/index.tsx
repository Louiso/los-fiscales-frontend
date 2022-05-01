import React, { cloneElement, FC, useEffect, useRef, useState } from "react";
import { Tooltip } from "@mui/material";

interface MaybeTooltipProps {
  children: React.ReactElement;
  title?: string;
  TooltipProps?: React.ComponentProps<typeof Tooltip>;
}

const MaybeTooltip: FC<MaybeTooltipProps> = ({
  children,
  TooltipProps,
  title
}) => {
  const [needTooltip, setNeedTooltip] = useState<boolean | undefined>();
  const titleRef = useRef<{
    offsetWidth: number;
    scrollWidth: number;
  }>();

  useEffect(() => {
    if (titleRef.current)
      setNeedTooltip(
        titleRef.current.offsetWidth < titleRef.current.scrollWidth
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (needTooltip)
    return (
      <Tooltip {...TooltipProps} title={title ?? TooltipProps?.title ?? ""}>
        {cloneElement(children, { ref: titleRef })}
      </Tooltip>
    );

  return cloneElement(children, { ref: titleRef });
};

export default MaybeTooltip;
