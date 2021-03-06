/* Стилизация элементов главной страницы */

export const styleHeder = {
  position: "sticky",
  top: "-25px",
  zIndex: "1000",
  background: "#3684E2",
  color: "#fff",
  padding: "0 12.5%",
  height: "88px",
  width: "100%",
};
export const styleLayout = {
  minHeight: "100vh",
  color: "#000",
  background: "#E5E5E5",
};
export const styleBtnOut = {
  color: "#fff",
};
export const styleFooter = {
  background: "#E5E5E5",
  textAlign: "center",
};

/* Стилизация элементов формы */

export const radioStyle = {
  display: "flex",
  alignItems: "center",
  width: "560px",
  height: "80px",
  lineHeight: "24px",
};

export const styleInput = {
  position: "relative",
  top: "-5px",
  left: "0",
  height: "48px",
  width: "100%",
};

export const styleCheck = {
  fontSize: "30px",
  color: "#fff",
};

/* Cтилизация кнопок */

export const styleBtn = {
  height: "48px",
  fontSize: "18px",
  textAline: "center",
};

export const styleMiddleBtn = {
  ...styleBtn,
  minWidth: "230px",
};

export const styleDisabledLargeBtn = {
  ...styleBtn,
  width: "100%",
};

export const styleLargeBtn = {
  ...styleDisabledLargeBtn,
  background: "#0061D9",
};

export const styleLargeShiftBtn = {
  ...styleLargeBtn,
  position: "relative",
  top: "-25px",
  left: "0",
};
