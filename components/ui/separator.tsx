import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

const Separator: React.FC<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>> = ({
  className,
  decorative: isDecorative = true,
  orientation = 'horizontal',
  ...props
}) => (
  <SeparatorPrimitive.Root
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className,
    )}
    decorative={isDecorative}
    orientation={orientation}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
