import { Icon } from "@iconify/react";
import { display } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./nav.module.css";

export default function NavOption() {
  const [activityState, setActivityState] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [connexionLabel, setConnexionLabel] = useState("SIGN IN");
  const router = useRouter();
  const userName = "Randy";
  return (
    <div className="option-container" style={{ width: `100%` }}>
      <div
        className={`${router.pathname == "/login" ? "active" : ""} loginButton`}
      >
        <Link href="#">
          <a
            onClick={() => {
              setSignedIn(!signedIn);
              signedIn === true
                ? setConnexionLabel("SIGN IN")
                : setConnexionLabel(userName.toUpperCase());
            }}
          >
            <Icon icon="heroicons-outline:user" className="option-icon" />
            <span>{connexionLabel}</span>
          </a>
        </Link>
      </div>
      <div
        className={`${styles.height} ${
          router.pathname == "/cars" ? "active" : ""
        }`}
      >
        <Link href="/cars">
          <a>
            <Icon
              icon="tabler:steering-wheel"
              className="option-icon"
              fontSize="33px"
            />
            <span className={styles.vertical}>CAR SELECT</span>
          </a>
        </Link>
      </div>
      {signedIn === true ? (
        <div
          className={`${styles.height} ${
            router.pathname == "/garage" ? "active" : ""
          }`}
        >
          <Link href="/garage">
            <a>
              <Icon
                icon="mdi:garage-variant"
                className="option-icon"
                fontSize="40px"
              />
              <span className={styles.vertical}>GARAGE</span>
            </a>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
