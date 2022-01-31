import { Fragment, useContext } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Notification from "../UI/Notification";
import NotificationContext from "../../store/notification-context";

const Header = (props) => {
  const notificatioCtx = useContext(NotificationContext);
  const activeNotification = notificatioCtx.notification;
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Hwang Jr Chinese</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </header>
      <div className={classes["main-image"]}>
        <img src="/background.jpg" alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
