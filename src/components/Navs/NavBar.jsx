import { Box, Link } from "@mui/material";
import { useRouter } from "next/router";

export default function NavBar({ navItems, color, width }) {
  const router = useRouter();
  const nav = () => {
    var iteration = 0;

    return navItems.map((item) => {
      return (
        <div key={iteration++}>
          <span>
            <Link
              href={`/${item.path}`}
              underline="none"
              className={router.pathname == "/" + item.path ? "active" : ""}
              sx={{
                color: `rgba(${color},0.75)`,
                fontWeight: `400`,
                "&:hover, &.active": {
                  fontWeight: `600`,
                  color: `rgba(${color},1)`,
                },
              }}
            >
              {item.label}
            </Link>
          </span>
        </div>
      );
    });
  };

  return (
    <>
      <Box
        sx={{
          width: `${width}`,
          border: `0px solid #c1c1c1`,
          padding: `2.2% 0% 4.5% 0%`,
          display: `flex`,
          justifyContent: `space-evenly`,
          alignItems: `center`,
        }}
      >
        {nav()}
      </Box>
    </>
  );
}
