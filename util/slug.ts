export default function slugConverter(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}
