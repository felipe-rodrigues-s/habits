import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyle = {
    width: `${props.progress}%`,
  };
  return (
    <Progress.Root
      className="h-3 rounded-xl bg-zinc-700 w-full m-4"
      value={100}>
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600 transition-colors"
        style={progressStyle}
      />
    </Progress.Root>
  );
}
