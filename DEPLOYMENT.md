# ForgeStack Deployment Guide

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        FORGESTACK                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐  │
│   │   Portal    │────▶│  Harbor API │────▶│  MongoDB    │  │
│   │   (React)   │     │  (Node.js)  │     │  Atlas      │  │
│   │   Vercel    │     │  Railway    │     │  (Free)     │  │
│   └─────────────┘     └─────────────┘     └─────────────┘  │
│        FREE               FREE               FREE           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Total Cost: $0/month** (with optional $10/year for custom domain)

---

## Step 1: Database Setup (MongoDB Atlas)

### Why MongoDB?
- ✅ 512MB free forever
- ✅ JSON documents match your current const structure
- ✅ Works perfectly with Harbor
- ✅ Zero data transformation needed

### Setup

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create free account
3. Create Cluster:
   - **Provider**: AWS
   - **Region**: N. Virginia (us-east-1)
   - **Tier**: M0 Sandbox (FREE)
   - **Cluster Name**: `forgestack`

4. Create Database User:
   - Security → Database Access → Add New User
   - Username: `forgestack-admin`
   - Password: Generate secure password (SAVE IT!)
   - Role: Read and write to any database

5. Allow Network Access:
   - Security → Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (for Railway)
   - Or add `0.0.0.0/0` for development

6. Get Connection String:
   - Clusters → Connect → Connect your application
   - Copy string: `mongodb+srv://forgestack-admin:<password>@forgestack.xxxxx.mongodb.net/?retryWrites=true&w=majority`

---

## Step 2: Backend API (Railway)

### Why Railway?
- ✅ $5 free credits/month
- ✅ Auto-deploys from GitHub
- ✅ Easy environment variables
- ✅ Supports Node.js/Harbor

### Setup

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. New Project → Deploy from GitHub Repo

Or use CLI:

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Create project
cd api  # your Harbor API folder
railway init

# Add MongoDB connection
railway variables set MONGODB_URI="mongodb+srv://forgestack-admin:PASSWORD@forgestack.xxxxx.mongodb.net/forgestack?retryWrites=true&w=majority"
railway variables set NODE_ENV="production"
railway variables set PORT="3000"

# Deploy
railway up

# Your API: https://forgestack-api.up.railway.app
```

### Harbor API Structure

```
api/
├── src/
│   ├── index.ts
│   ├── routes/
│   │   ├── docs.routes.ts      # GET/PUT documentation
│   │   ├── packages.routes.ts  # Package metadata
│   │   └── changelog.routes.ts # Version history
│   ├── models/
│   │   ├── doc.model.ts        # Documentation schema
│   │   └── package.model.ts    # Package metadata schema
│   └── config/
│       └── database.ts         # MongoDB connection
├── package.json
└── tsconfig.json
```

---

## Step 3: Frontend (Vercel)

### Install Vercel CLI

```bash
npm i -g vercel
```

### Deploy Portal

```bash
cd portal
vercel
```

Follow prompts:
- Set up and deploy? → Y
- Which scope? → Your account
- Link to existing project? → N
- Project name? → forgestack
- Directory? → .
- Override settings? → N

### Production Deploy

```bash
vercel --prod
```

Your site: `https://forgestack.vercel.app`

---

## Step 4: Connect Frontend to Backend

### Environment Variables (Vercel Dashboard)

Go to Vercel → Project Settings → Environment Variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_API_URL` | `https://forgestack-api.up.railway.app` | Harbor API URL |
| `VITE_GA_ID` | `G-XXXXXXXXXX` | Google Analytics (optional) |

### Update API Calls

```tsx
// portal/src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const fetchDocs = async (package: string, page: string) => {
  const res = await fetch(`${API_URL}/docs/${package}/${page}`);
  return res.json();
};
```

---

## Custom Domain Setup

### Option 1: Cloudflare (Cheapest ~$10/year)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Registrar → Register Domain
3. Search `forgestack.dev`
4. Connect to Vercel:

```bash
vercel domains add forgestack.dev
```

### Option 2: Porkbun

1. Go to [porkbun.com](https://porkbun.com)
2. Search and buy domain
3. Add DNS records from Vercel

---

## GitHub Integration (Auto-Deploy)

```bash
# Push to GitHub
git remote add origin https://github.com/yaghobieh/forgestack.git
git push -u origin main
```

In Vercel Dashboard:
1. Import Git Repository
2. Select your repo
3. Auto-deploys on every push!

---

## Database Schemas (MongoDB)

### Documentation Schema

```typescript
// api/src/models/doc.model.ts
import { Schema, model } from 'mongoose';

const DocSectionSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  code: String,
  filename: String,
  language: String,
  examples: [{
    framework: { type: String, enum: ['react', 'vue', 'angular', 'vanilla', 'svelte', 'solid'] },
    label: String,
    filename: String,
    code: String,
  }],
});

const DocPageSchema = new Schema({
  package: { type: String, required: true, index: true }, // 'anvil', 'synapse', 'harbor', 'table'
  slug: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  sections: [DocSectionSchema],
  features: [{
    icon: String,
    title: String,
    desc: String,
  }],
  apiTable: {
    headers: [String],
    rows: [[String]],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

DocPageSchema.index({ package: 1, slug: 1 }, { unique: true });

export const DocPage = model('DocPage', DocPageSchema);
```

### Migration Script (Import Current Constants)

```typescript
// api/scripts/migrate-docs.ts
import { DocPage } from '../src/models/doc.model';
import { ANVIL_DOCS } from '../../portal/src/constants/anvil-docs.const';
import { SYNAPSE_DOCS } from '../../portal/src/constants/synapse-docs.const';
import { TABLE_DOCS } from '../../portal/src/constants/table-docs.const';

async function migrate() {
  // Migrate Anvil docs
  for (const [slug, doc] of Object.entries(ANVIL_DOCS)) {
    await DocPage.findOneAndUpdate(
      { package: 'anvil', slug },
      { ...doc, package: 'anvil' },
      { upsert: true }
    );
  }
  
  // Migrate Synapse docs
  for (const [slug, doc] of Object.entries(SYNAPSE_DOCS)) {
    await DocPage.findOneAndUpdate(
      { package: 'synapse', slug },
      { ...doc, package: 'synapse' },
      { upsert: true }
    );
  }
  
  // Migrate Table docs
  for (const [slug, doc] of Object.entries(TABLE_DOCS)) {
    await DocPage.findOneAndUpdate(
      { package: 'table', slug },
      { ...doc, package: 'table' },
      { upsert: true }
    );
  }
  
  console.log('Migration complete!');
}

migrate();
```

---

## Cost Summary

| Service | Cost | Notes |
|---------|------|-------|
| Vercel (Frontend) | **FREE** | 100GB bandwidth/mo |
| Railway (API) | **FREE** | $5 credits/mo |
| MongoDB Atlas | **FREE** | 512MB storage |
| Domain (.dev) | ~$10/year | Optional |
| SSL Certificate | **FREE** | Auto with Vercel |
| **Total** | **$0-10/year** | |

---

## Alternative: Supabase (PostgreSQL + Auth)

If you prefer SQL with built-in authentication:

```bash
# Install Supabase client
npm i @supabase/supabase-js
```

```typescript
// Supabase provides:
// - PostgreSQL database (500MB free)
// - Authentication (email, OAuth)
// - Real-time subscriptions
// - Row-level security
// - REST API auto-generated
```

---

## Monitoring

### Vercel Analytics (Free)

```bash
npm i @vercel/analytics @vercel/speed-insights
```

```tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Router />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
```

---

## Deploy Commands

```bash
# === LOCAL DEVELOPMENT ===
npm run dev                    # Start dev server

# === PORTAL (VERCEL) ===
cd portal
vercel                         # Deploy preview
vercel --prod                  # Deploy production
vercel ls                      # List deployments

# === API (RAILWAY) ===
cd api
railway login                  # Login to Railway
railway init                   # Initialize project
railway up                     # Deploy
railway logs                   # View logs
railway variables              # Manage env vars

# === DATABASE ===
# Use MongoDB Compass for GUI
# Connection string from Atlas dashboard
```

---

## Quick Start Checklist

- [ ] Create MongoDB Atlas account & cluster
- [ ] Create Railway account
- [ ] Create Vercel account
- [ ] Set up GitHub repo
- [ ] Deploy API to Railway
- [ ] Deploy Portal to Vercel
- [ ] Connect with environment variables
- [ ] (Optional) Add custom domain

