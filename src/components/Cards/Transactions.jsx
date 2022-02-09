import { Icon } from "@iconify/react";
import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import cardStyles from "./Card.module.css";

export default function Transactions({ icon, title, rows }) {
  return (
    <div className={cardStyles.transactionCard}>
      <span
        style={{
          position: `relative`,
          borderBottom: `2px solid #fff`,
          width: `90%`,
          padding: `2% 0%`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <Icon icon={icon} className={cardStyles.carCardDetailIcon} />
        <h2
          className={cardStyles.carCardDetailTitle}
          style={{
            border: `0px solid red`,
            position: `absolute`,
            top: `10px`,
            left: `55px`,
          }}
        >
          {title.toUpperCase()}
        </h2>
      </span>
      <div className={cardStyles.list}>
        <Table size="small">
          <TableBody>
            {rows === undefined ? (
              <></>
            ) : (
              rows.map((row) => (
                <TableRow className={cardStyles.table} key={row.id}>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="left">{row.car}</TableCell>
                  <TableCell align="right">
                    {title != "mechanics" ? (
                      <span>
                        $ <strong>{row.price}</strong>
                      </span>
                    ) : (
                      row.cause
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
