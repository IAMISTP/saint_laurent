import styles from "./Navber.module.css";
function Navber() {
  return (
    <div className={styles.nav_warp}>
      <ul className={styles.nav_main}>
        <li>패션</li>
        <li>주얼리</li>
        <li>fine jewelry</li>
        <li>아이웨어</li>
        <li>향수</li>
        <li>메이크업</li>
        <li>스킨케어</li>
      </ul>
      <ul className={styles.nav_sub}>
        <li>생로랑 소개</li>
      </ul>
    </div>
  );
}

export default Navber;
