import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const regionSalary = v.object({
  currency: v.string(),
  min: v.number(),
  max: v.number(),
});

const programSalaryRanges = v.object({
  ksa: regionSalary,
  gcc: regionSalary,
  uk: regionSalary,
  us: regionSalary,
});

export default defineSchema({
  classes: defineTable({
    title: v.string(),
    titleAr: v.string(),
    slug: v.string(),
    salaryRangeType: v.optional(v.string()),
    items: v.array(
      v.object({
        title: v.string(),
        titleAr: v.string(),
        salaryRanges: v.optional(programSalaryRanges),
      }),
    ),
  }).index("by_slug", ["slug"]),
  programClasses: defineTable({
    class: v.string(),
    /** Bilingual entries; legacy plain strings supported until seeds are re-run. */
    programs: v.array(
      v.union(
        v.string(),
        v.object({ title: v.string(), titleAr: v.string() }),
      ),
    ),
  }).index("by_class", ["class"]),
});
