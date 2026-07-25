import { LoaderCircle } from "lucide-react";

type SizeProps = "sm" | "md" | "lg";

interface LoadingProps {
  message?: string;
  size?: SizeProps;
  withMessage?: boolean;
}

const sizeClasses = {
  sm: {
    icon: "size-5",
    text: "text-sm",
    container: "flex-row gap-2 p-0",
  },
  md: {
    icon: "size-10",
    text: "text-base",
    container: "flex-col gap-2 p-5",
  },
  lg: {
    icon: "size-14",
    text: "text-lg font-semibold",
    container: "flex-col gap-3 p-5",
  },
} as const;

export default function Loading({ message = "Carregando...", size = "md", withMessage = true }: LoadingProps) {
  return (
    <div className={`flex items-center justify-center text-muted-foreground ${sizeClasses[size].container}`}>
      <LoaderCircle className={`animate-spin text-muted-foreground ${sizeClasses[size].icon}`} />

      {withMessage && <span className={sizeClasses[size].text}>{message}</span>}
    </div>
  );
}
