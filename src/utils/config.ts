export function getAppAddress() {
  return process.env.NODE_ENV === "production"
    ? "https://jaideepghosh.github.io/lumina"
    : "";
}
