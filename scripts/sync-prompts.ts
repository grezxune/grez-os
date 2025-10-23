#!/usr/bin/env bun

import { mkdir, readdir, stat, copyFile, rm } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const repoRoot = path.resolve(path.join(import.meta.dir, ".."));
const sourceDir = path.join(repoRoot, "prompts", "commands");

async function ensureSourceExists() {
  try {
    const info = await stat(sourceDir);
    if (!info.isDirectory()) {
      throw new Error(`Expected ${sourceDir} to be a directory.`);
    }
  } catch (error) {
    throw new Error(
      `Cannot locate prompt source directory at ${sourceDir}. Did you run the script from the repo?`,
      { cause: error }
    );
  }
}

function resolveCodexHome(): string {
  const codexHome = process.env.CODEX_HOME ?? path.join(os.homedir(), ".codex");
  return path.resolve(codexHome);
}

async function syncPrompts() {
  await ensureSourceExists();

  const codexHome = resolveCodexHome();
  const targetDir = path.join(codexHome, "prompts");

  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });
  const copied: string[] = [];

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!entry.name.toLowerCase().endsWith(".md")) continue;

    const sourceFile = path.join(sourceDir, entry.name);
    const targetFile = path.join(targetDir, entry.name);

    await copyFile(sourceFile, targetFile);
    copied.push(entry.name);
  }

  const legacyFiles = [
    "01_goal_alignment_prompt.md",
    "02_daily_brief_prompt.md",
    "03_weekly_review_prompt.md",
    "04_habit_tracker_prompt.md",
    "05_content_curator_prompt.md",
    "06_daily_notes_prompt.md",
  ];

  for (const legacy of legacyFiles) {
    const legacyPath = path.join(targetDir, legacy);
    try {
      await rm(legacyPath);
      console.log(`Removed legacy prompt ${legacyPath}`);
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as { code: string }).code === "ENOENT"
      ) {
        // Legacy file already gone.
      } else {
        console.warn(`Unable to remove legacy prompt ${legacyPath}; clean up manually if needed.`);
      }
    }
  }

  const commandsJson = path.join(codexHome, "commands.json");
  try {
    await rm(commandsJson);
    console.log(`Removed legacy ${commandsJson}; prompts now drive slash commands.`);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "ENOENT"
    ) {
      // File not found — no action needed.
    } else {
      console.warn(
        `Legacy ${commandsJson} still exists (could not delete automatically). Remove it manually to avoid conflicts.`
      );
    }
  }

  console.log(`Synced ${copied.length} prompt(s) to ${targetDir}`);
  copied.forEach((name) => console.log(` - ${name}`));

  console.log("\nRestart Codex CLI (or start a new session) to pick up the updated prompts.");
}

syncPrompts().catch((error) => {
  console.error("Failed to sync prompts:", error);
  process.exitCode = 1;
});
