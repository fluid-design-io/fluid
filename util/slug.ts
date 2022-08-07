export default function slugConverter(str) {
  // console.log(str);
  if (typeof str !== "string") {
    return "";
  } else {
    return str.replace(/\s+/g, "-").toLowerCase();
  }
}
