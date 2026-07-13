type PackageLinkInput = { id: string; docsPath: string; status: string };

const HUB_DOC_PACKAGE_IDS = new Set(['cli', 'rail', 'relay', 'lingo', 'aerocraft', 'torch']);

export function packageDocsHref(pkg: PackageLinkInput): string {
  if (pkg.status !== 'ready') return '#';
  if (HUB_DOC_PACKAGE_IDS.has(pkg.id)) return pkg.docsPath;
  return `${pkg.docsPath}/docs/quick-start`;
}
