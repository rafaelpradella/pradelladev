import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { workResumeSchema } from "./model/resume.model";

const resume = defineCollection({
	schema: workResumeSchema,
	loader: glob({
		pattern: "**/*.json",
		base: "./src/content/resume",
		generateId: ({ entry }) => entry.replace(/\.json$/, ""),
	}),
});

export const collections = { resume };
