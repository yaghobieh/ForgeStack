export interface CatalogDoc {
  heading: string;
  body: string;
  code?: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  group: string;
  title: string;
  description: string;
  color: string;
  status: 'ready' | 'soon';
  npm?: string;
  github?: string;
  vsix?: string;
  docsPath?: string;
  install?: string;
  features: string[];
  docs: CatalogDoc[];
}

export interface CatalogGroup {
  id: string;
  title: string;
  summary: string;
}

export interface Catalog {
  groups: CatalogGroup[];
  libraries: CatalogItem[];
  tools: CatalogItem[];
  extensions: CatalogItem[];
}

export const CATALOG_URL = '/catalog.json';
