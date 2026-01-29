# ForgeStack Packages

This directory is reserved for future ForgeStack packages that will be developed as part of the monorepo.

## Current Packages (Published Separately)

| Package | Location | npm |
|---------|----------|-----|
| Harbor | `/Users/johnyag/Desktop/Projects/harbor` | `@forgestack/harbor` |

## Publishing Strategy

### Option 1: Separate Repositories (Current)
Each package is developed in its own repository and published to npm under the `@forgestack` scope:

```bash
# Harbor is published from its own repo
cd /path/to/harbor
npm publish --access public
```

### Option 2: Monorepo (Future)
When we have multiple packages ready, we can use tools like:
- **Lerna** - Traditional monorepo tool
- **Turborepo** - Modern, fast build system
- **pnpm workspaces** - Built-in workspace support

### How to Publish @forgestack/harbor

1. **Create npm org** (one-time):
   ```bash
   npm login
   npm org create forgestack
   ```

2. **Publish package**:
   ```bash
   cd /path/to/harbor
   npm version patch  # or minor/major
   npm publish --access public
   ```

3. **Install in projects**:
   ```bash
   npm install @forgestack/harbor
   ```

## Future Packages

When developing new packages (Compass, Synapse, etc.), you can either:

1. **Develop separately** - Create new repos, then publish to `@forgestack/*`
2. **Move to monorepo** - Move all packages here and use workspace tooling

## Package Structure

Each package should follow this structure:

```
packages/
├── compass/           # React Router alternative
│   ├── src/
│   ├── package.json   # name: "@forgestack/compass"
│   └── README.md
├── synapse/           # State management
│   ├── src/
│   ├── package.json   # name: "@forgestack/synapse"
│   └── README.md
└── ...
```

