import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name:  v.string(),
    roleId: v.id("roles"),
    authProvider: v.string(),    // clerk|oauth|password
  }).index("by_email", ["email"]),

  roles: defineTable({
    name: v.string(),    // Admin, HR, Designer, Legal, Guest
    permissions: v.array(v.string()),   // ['brand.read', 'template.write']
  }),

  workspaces: defineTable({
    name: v.string(),
    ownerId: v.id("users"),
    plan: v.string(),    // free|pro|scale|enterprise
    seats: v.number(),
  }),

  workspaceMembers: defineTable({
    workspaceId: v.id("workspaces"),
    userId:    v.id("users"),
    roleId:    v.id("roles"),
  }).index("by_workspace", ["workspaceId"]),

  brandAssets: defineTable({
    workspaceId: v.id("workspaces"),
    type: v.string(),    // logo|color|font|image|video
    name: v.string(),
    url: v.string(),
    tags: v.optional(v.array(v.string())),
    metadata: v.optional(v.object({})), // dimensions, hex, mimeType, …
  }).index("by_workspace", ["workspaceId"]),

  templates: defineTable({
    workspaceId: v.id("workspaces"),
    name: v.string(),
    description: v.optional(v.string()),
    version: v.number(),    // increment on save
    rootDocId: v.string(),    // Adobe Express document id
    isPublished: v.boolean(),
    rulesetId: v.optional(v.id("rulesets")),
  }).index("by_workspace", ["workspaceId"]),

  rulesets: defineTable({
    workspaceId: v.id("workspaces"),
    name: v.string(),
    wcagVersion: v.string(),    // "2.2"
    neuroChecklist: v.boolean(),
    json: v.object({})    // compiled lint rules
  }).index("by_workspace", ["workspaceId"]),

  scans: defineTable({
    templateId: v.id("templates"),
    triggeredBy: v.id("users"),
    createdAt: v.number(),    // epoch ms
    status: v.string(),    // pending|passed|failed
    summary: v.object({errors: v.number(), warnings: v.number()}),
    findings: v.array(v.object({
      ruleId: v.string(),
      severity: v.string(),    // error|warning|info
      nodePath: v.string(),    // doc element path
      message: v.string()
    }))
  }).index("by_template", ["templateId"]),

  auditTrail: defineTable({
    workspaceId: v.id("workspaces"),
    actorId: v.id("users"),
    action:  v.string(),    // 'asset.upload' etc
    targetTable: v.string(),
    targetId: v.idAny(),
    ts: v.number()
  }).index("by_workspace", ["workspaceId"]),
});
