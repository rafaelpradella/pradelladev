import { execSync } from "node:child_process";

const EXTENSIONS_TO_LINT = [".js", ".ts", ".vue", ".css", ".astro", ".html"];
const BIOME_FULL_COMMAND =
  "npx @biomejs/biome check --write --no-errors-on-unmatched --files-ignore-unknown=true --colors=off";

const filterPathsToLint = (path) =>
  path.startsWith("src/") &&
  EXTENSIONS_TO_LINT.some((ext) => path.endsWith(ext));

const filteredStagedFiles = execSync("git diff --cached --name-only", {
  encoding: "utf-8",
})
  .split("\n")
  .filter(filterPathsToLint);

if (filteredStagedFiles.length > 0) {
  try {
    execSync(`${BIOME_FULL_COMMAND} ${filteredStagedFiles.join(" ")}`, {
      stdio: "inherit",
    });
    console.log("Biome lint passed successfully.");
  } catch (error) {
    console.error("Biome lint failed.");
    process.exit(1);
  }
}
