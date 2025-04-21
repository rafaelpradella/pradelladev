import { z } from "astro:content";

export const workResumeSchema = z.array(
	z.object({
		company: z.string(),
		companyUrl: z.string().url(),
		startDate: z.string(),
		endDate: z.string().optional(),
		roleTitle: z.string(),
		description: z.array(z.string()),
		techStack: z.array(z.string()),
	}),
);
