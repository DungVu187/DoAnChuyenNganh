import moment from "moment-timezone";

// format ngày hiển thị
export const formatDateVN = (date, format = "DD/MM/YYYY") => {
  if (!date) return "";
  return moment(date).tz("Asia/Ho_Chi_Minh").format(format);
};

// dùng cho calendar / so sánh
export const formatDateKeyVN = (date) => {
  if (!date) return "";
  return moment(date).tz("Asia/Ho_Chi_Minh").format("YYYY-MM-DD");
};

// tính số ngày đêm tour
export const getDurationVN = (start, end) => {
  if (!start || !end) return "";
  const s = moment(start).tz("Asia/Ho_Chi_Minh");
  const e = moment(end).tz("Asia/Ho_Chi_Minh");
  const days = e.diff(s, "days");
  return `${days + 1}N${days}Đ`;
};
