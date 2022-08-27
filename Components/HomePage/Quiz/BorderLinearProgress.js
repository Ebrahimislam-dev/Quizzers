import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
function BorderLinearProgress({ value, height }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: height,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === "light" ? "#6A5AE0" : "#308fe8",
    },
  }));
  return (
    <div>
      <BorderLinearProgress variant="determinate" value={value * 0.02} />
    </div>
  );
}

export default BorderLinearProgress;
