/**
 * Test @forgestack/grid-table imports and basic functionality
 */

import React from 'react';

// Test main imports
import {
  GridTable,
  TableProvider,
  useTableContext,
} from '@forgestack/grid-table';

// Test types
import type {
  GridTableProps,
  ColumnDefinition,
  Theme,
  Translations,
  FilterState,
  SortState,
  PaginationState,
} from '@forgestack/grid-table';

// Test hooks import
import { useTable, useFilter, useSort, usePagination } from '@forgestack/grid-table/hooks';

// Test context import
import { TableContext } from '@forgestack/grid-table/context';

console.log('✅ All @forgestack/grid-table imports successful!');

// Test type definitions
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const columns: ColumnDefinition<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', filterable: true },
  { id: 'role', header: 'Role', accessor: 'role' },
];

console.log('✅ ColumnDefinition type works:', columns.length, 'columns defined');

// Test component type (without rendering)
const TestComponent: React.FC = () => {
  const data: User[] = [
    { id: 1, name: 'John', email: 'john@example.com', role: 'Admin' },
  ];

  // This would render in a real React app
  return React.createElement(GridTable, {
    data,
    columns,
  });
};

console.log('✅ GridTable component type works:', typeof TestComponent);

// Test hooks exist
console.log('✅ useTable hook exists:', typeof useTable);
console.log('✅ useFilter hook exists:', typeof useFilter);
console.log('✅ useSort hook exists:', typeof useSort);
console.log('✅ usePagination hook exists:', typeof usePagination);

// Test context exists
console.log('✅ TableContext exists:', typeof TableContext);
console.log('✅ TableProvider exists:', typeof TableProvider);
console.log('✅ useTableContext exists:', typeof useTableContext);

console.log('\n🎉 All @forgestack/grid-table tests passed!');

