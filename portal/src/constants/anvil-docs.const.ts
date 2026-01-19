// Anvil Documentation Content - Ready for backend/DB integration
// All content in structured format for easy maintenance and API serving

export interface AnvilDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
  filename?: string;
  framework?: 'react' | 'vue' | 'svelte' | 'solid' | 'angular' | 'vanilla';
}

export interface AnvilDocExamples {
  framework: 'react' | 'vue' | 'svelte' | 'solid' | 'angular' | 'vanilla';
  label: string;
  code: string;
  filename: string;
}

export interface AnvilDocPage {
  slug: string;
  title: string;
  description: string;
  sections: AnvilDocSection[];
  examples?: AnvilDocExamples[];
}

export interface AnvilNavItem {
  path: string;
  label: string;
  exact?: boolean;
}

// Navigation items
export const ANVIL_NAV: AnvilNavItem[] = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'style-forge', label: 'Style Forge' },
  { path: 'type-guards', label: 'Type Guards' },
  { path: 'array', label: 'Array Utils' },
  { path: 'object', label: 'Object Utils' },
  { path: 'string', label: 'String Utils' },
  { path: 'function', label: 'Function Utils' },
  { path: 'clone', label: 'Clone Utils' },
  { path: 'react-hooks', label: 'React Hooks' },
  { path: 'vue-composables', label: 'Vue Composables' },
  { path: 'types', label: 'Type Utilities' },
  { path: 'api', label: 'API Reference' },
];

// All documentation content
export const ANVIL_DOCS: Record<string, AnvilDocPage> = {
  'overview': {
    slug: 'overview',
    title: 'Anvil',
    description: 'Modern utility library with React hooks and Vue composables. The forge where code is shaped.',
    sections: [
      {
        id: 'intro',
        title: 'Why Anvil?',
        content: 'Anvil provides 100+ utilities for arrays, objects, strings, and functions. Plus 40+ React hooks and Vue composables. Full TypeScript support and works with any framework.',
      },
      {
        id: 'quick-example',
        title: 'Quick Example',
        content: 'Import and use utilities with full type safety:',
        code: `import {
  deepClone,
  isNullOrUndefined,
  debounce,
  unique,
  groupBy,
  camelCase,
} from '@forgedevstack/anvil';

// Type guards
if (isNullOrUndefined(value)) return;

// Deep clone with circular reference support
const cloned = deepClone({ nested: { data: [1, 2, 3] } });

// Debounce with options
const search = debounce((query) => fetchResults(query), 300);

// Array utilities
const items = unique([1, 2, 2, 3]); // [1, 2, 3]
const grouped = groupBy(users, 'role');

// String utilities  
const name = camelCase('hello-world'); // 'helloWorld'`,
        filename: 'example.ts',
      },
    ],
  },

  'installation': {
    slug: 'installation',
    title: 'Installation',
    description: 'Get started with Anvil in your project.',
    sections: [
      {
        id: 'package',
        title: 'Package Installation',
        content: 'Install Anvil using your preferred package manager:',
        code: `# npm
npm install @forgedevstack/anvil

# yarn
yarn add @forgedevstack/anvil

# pnpm
pnpm add @forgedevstack/anvil`,
        filename: 'terminal',
      },
      {
        id: 'usage',
        title: 'Usage',
        content: 'Import utilities from the main package or specific modules:',
        code: `// Import utilities
import { deepClone, isNullOrUndefined, unique } from '@forgedevstack/anvil';

// Import React hooks
import { useDebounce, useForm, useResponsive } from '@forgedevstack/anvil';

// Import Vue composables
import { useDebounce, useToggle } from '@forgedevstack/anvil/hooks/vue';

// Import specific modules
import { isArray, isObject } from '@forgedevstack/anvil/utils';
import { useForm } from '@forgedevstack/anvil/hooks';`,
        filename: 'imports.ts',
      },
    ],
  },

  'style-forge': {
    slug: 'style-forge',
    title: 'Style Forge',
    description: 'Conditionally compose and merge CSS class strings with precision. Forge your styles together like a blacksmith forges metal.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Use forge() to conditionally join class names:',
        code: `import { forge } from '@forgedevstack/anvil';

// String arguments
forge('btn', 'primary');
// => 'btn primary'

// Conditional objects
forge('btn', { primary: true, disabled: false });
// => 'btn primary'

// Arrays
forge('btn', ['rounded', 'shadow']);
// => 'btn rounded shadow'

// Falsy values are ignored
forge('btn', undefined, null, false, 'visible');
// => 'btn visible'

// All combined
forge(
  'btn',
  isLoading && 'loading',
  { 'btn-primary': variant === 'primary' },
  ['hover:scale-105', 'transition']
);`,
        filename: 'forge.ts',
      },
      {
        id: 'advanced',
        title: 'Advanced Utilities',
        content: 'Additional utilities for unique classes, Tailwind merging, and BEM-style prefixes:',
        code: `import { forge, forgeUnique, forgeMerge, forgePrefix } from '@forgedevstack/anvil';

// forgeUnique - Remove duplicate classes
forgeUnique('btn', 'btn', 'primary', 'primary');
// => 'btn primary'

// forgeMerge - Tailwind conflict resolution (later wins)
forgeMerge('p-4', 'p-2');
// => 'p-2'

forgeMerge('text-red-500', 'text-blue-500');
// => 'text-blue-500'

// forgePrefix - BEM-style prefixed classes
const bem = forgePrefix('btn');
bem('primary', 'large');
// => 'btn btn-primary btn-large'

const card = forgePrefix('card');
card('header', 'rounded', { 'shadow': hasShadow });
// => 'card card-header card-rounded card-shadow'`,
        filename: 'advanced.ts',
      },
      {
        id: 'types',
        title: 'Type Definitions',
        content: 'Full TypeScript support with StyleValue type:',
        code: `type StyleValue =
  | string              // 'btn primary'
  | number              // 42 (converted to string)
  | boolean             // false (ignored)
  | undefined           // ignored
  | null                // ignored
  | StyleValue[]        // ['btn', 'primary']
  | { [key: string]: boolean | undefined | null };

function forge(...args: StyleValue[]): string;
function forgeUnique(...args: StyleValue[]): string;
function forgeMerge(...args: StyleValue[]): string;
function forgePrefix(prefix: string): (...args: StyleValue[]) => string;`,
        filename: 'types.ts',
      },
    ],
    examples: [
      {
        framework: 'react',
        label: 'React',
        filename: 'Button.tsx',
        code: `import { forge } from '@forgedevstack/anvil';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', loading, disabled, children }: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={forge(
        'inline-flex items-center justify-center font-medium rounded-lg',
        'transition-all duration-200 focus:outline-none focus:ring-2',
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
          'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
        },
        (disabled || loading) && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </button>
  );
}`,
      },
      {
        framework: 'vue',
        label: 'Vue',
        filename: 'Button.vue',
        code: `<script setup lang="ts">
import { forge } from '@forgedevstack/anvil';
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), { variant: 'primary', size: 'md' });

const buttonStyles = computed(() => forge(
  'inline-flex items-center justify-center font-medium rounded-lg',
  'transition-all duration-200 focus:outline-none focus:ring-2',
  {
    'px-3 py-1.5 text-sm': props.size === 'sm',
    'px-4 py-2 text-base': props.size === 'md',
    'px-6 py-3 text-lg': props.size === 'lg',
  },
  {
    'bg-blue-600 text-white hover:bg-blue-700': props.variant === 'primary',
    'bg-gray-200 text-gray-800 hover:bg-gray-300': props.variant === 'secondary',
    'bg-red-600 text-white hover:bg-red-700': props.variant === 'danger',
  },
  (props.disabled || props.loading) && 'opacity-50 cursor-not-allowed'
));
</script>

<template>
  <button :class="buttonStyles" :disabled="disabled || loading">
    <slot />
  </button>
</template>`,
      },
      {
        framework: 'svelte',
        label: 'Svelte',
        filename: 'Button.svelte',
        code: `<script lang="ts">
  import { forge } from '@forgedevstack/anvil';
  
  export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let loading = false;
  export let disabled = false;
  
  $: buttonStyles = forge(
    'inline-flex items-center justify-center font-medium rounded-lg',
    'transition-all duration-200 focus:outline-none focus:ring-2',
    {
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    {
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
      'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
    },
    (disabled || loading) && 'opacity-50 cursor-not-allowed'
  );
</script>

<button class={buttonStyles} {disabled} on:click>
  <slot />
</button>`,
      },
      {
        framework: 'solid',
        label: 'Solid',
        filename: 'Button.tsx',
        code: `import { forge } from '@forgedevstack/anvil';
import { Component, JSX, splitProps } from 'solid-js';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: JSX.Element;
}

export const Button: Component<ButtonProps> = (props) => {
  const [local] = splitProps(props, ['variant', 'size', 'loading', 'disabled', 'children']);
  
  const buttonStyles = () => forge(
    'inline-flex items-center justify-center font-medium rounded-lg',
    {
      'px-3 py-1.5 text-sm': local.size === 'sm',
      'px-4 py-2 text-base': local.size === 'md' || !local.size,
      'px-6 py-3 text-lg': local.size === 'lg',
    },
    {
      'bg-blue-600 text-white hover:bg-blue-700': local.variant === 'primary' || !local.variant,
      'bg-gray-200 text-gray-800 hover:bg-gray-300': local.variant === 'secondary',
      'bg-red-600 text-white hover:bg-red-700': local.variant === 'danger',
    },
    (local.disabled || local.loading) && 'opacity-50 cursor-not-allowed'
  );
  
  return <button class={buttonStyles()} disabled={local.disabled || local.loading}>{local.children}</button>;
};`,
      },
      {
        framework: 'angular',
        label: 'Angular',
        filename: 'button.component.ts',
        code: `import { Component, Input } from '@angular/core';
import { forge } from '@forgedevstack/anvil';

@Component({
  selector: 'app-button',
  template: \`<button [class]="buttonStyles" [disabled]="disabled || loading"><ng-content /></button>\`,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() loading = false;
  @Input() disabled = false;

  get buttonStyles(): string {
    return forge(
      'inline-flex items-center justify-center font-medium rounded-lg',
      {
        'px-3 py-1.5 text-sm': this.size === 'sm',
        'px-4 py-2 text-base': this.size === 'md',
        'px-6 py-3 text-lg': this.size === 'lg',
      },
      {
        'bg-blue-600 text-white hover:bg-blue-700': this.variant === 'primary',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': this.variant === 'secondary',
        'bg-red-600 text-white hover:bg-red-700': this.variant === 'danger',
      },
      (this.disabled || this.loading) && 'opacity-50 cursor-not-allowed'
    );
  }
}`,
      },
      {
        framework: 'vanilla',
        label: 'Vanilla',
        filename: 'button.ts',
        code: `import { forge } from '@forgedevstack/anvil';

interface ButtonOptions {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  text?: string;
}

function createButton(options: ButtonOptions = {}): HTMLButtonElement {
  const { variant = 'primary', size = 'md', loading = false, disabled = false, text = 'Click' } = options;
  
  const button = document.createElement('button');
  button.className = forge(
    'inline-flex items-center justify-center font-medium rounded-lg',
    {
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    {
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
      'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
    },
    (disabled || loading) && 'opacity-50 cursor-not-allowed'
  );
  
  button.disabled = disabled || loading;
  button.textContent = loading ? 'Loading...' : text;
  return button;
}`,
      },
    ],
  },

  'type-guards': {
    slug: 'type-guards',
    title: 'Type Guards',
    description: 'Runtime type checking functions with TypeScript narrowing support.',
    sections: [
      {
        id: 'all',
        title: 'All Type Guards',
        content: 'Comprehensive type checking utilities:',
        code: `import {
  // Null/Undefined
  isNull, isUndefined, isNullOrUndefined, isDefined,
  
  // Primitives
  isString, isNumber, isBoolean, isSymbol, isBigInt,
  
  // Objects
  isObject, isPlainObject, isArray, isFunction, isDate, isRegExp, isError,
  isMap, isSet, isWeakMap, isWeakSet, isPromise,
  
  // Numbers
  isInteger, isFloat, isFiniteNumber, isNaN, isPositive, isNegative, isEven, isOdd,
  
  // Strings
  isEmpty, isBlank, isEmail, isUrl, isUuid,
  
  // Arrays
  isEmptyArray, isNonEmptyArray, isArrayOf,
  
  // Type narrowing
  assertType, assertDefined,
} from '@forgedevstack/anvil';

// Examples
isNull(null);                     // true
isUndefined(undefined);           // true
isNullOrUndefined(null);          // true
isDefined('hello');               // true

isString('hello');                // true
isNumber(42);                     // true
isBoolean(true);                  // true

isObject({});                     // true
isPlainObject({});                // true
isArray([]);                      // true
isFunction(() => {});             // true
isDate(new Date());               // true

isInteger(42);                    // true
isFloat(3.14);                    // true
isPositive(5);                    // true
isNegative(-5);                   // true
isEven(4);                        // true
isOdd(3);                         // true`,
        filename: 'type-guards.ts',
      },
    ],
  },

  'array': {
    slug: 'array',
    title: 'Array Utilities',
    description: 'Comprehensive array manipulation functions with full TypeScript support.',
    sections: [
      {
        id: 'quick',
        title: 'Quick Reference',
        content: 'Common array operations:',
        code: `import { first, last, unique, chunk, groupBy, shuffle } from '@forgedevstack/anvil';

first([1, 2, 3]);              // 1
last([1, 2, 3]);               // 3
unique([1, 2, 2, 3]);          // [1, 2, 3]
chunk([1, 2, 3, 4, 5], 2);     // [[1, 2], [3, 4], [5]]
groupBy(users, 'role');        // { admin: [...], user: [...] }
shuffle([1, 2, 3, 4, 5]);      // Random order`,
        filename: 'quick.ts',
      },
      {
        id: 'all',
        title: 'All Array Functions',
        content: 'Complete list of array utilities:',
        code: `import {
  // Access
  first, last, take, drop, nth,
  
  // Transform
  unique, chunk, groupBy, flatten, flattenDeep,
  compact, zip, unzip, reverse,
  
  // Set operations
  intersection, difference, union, xor,
  
  // Random
  shuffle, sample, sampleSize,
  
  // Partition & Sort
  partition, sortBy, orderBy,
  
  // Math
  sum, average, min, max, range, minBy, maxBy,
  
  // Search
  findIndex, findLastIndex, includes, indexOf,
} from '@forgedevstack/anvil';

// Access
first([1, 2, 3]);                  // 1
last([1, 2, 3]);                   // 3
take([1, 2, 3, 4], 2);             // [1, 2]
drop([1, 2, 3, 4], 2);             // [3, 4]

// Transform
unique([1, 2, 2, 3]);              // [1, 2, 3]
chunk([1, 2, 3, 4, 5], 2);         // [[1, 2], [3, 4], [5]]
flatten([[1, 2], [3, 4]]);         // [1, 2, 3, 4]

// Set operations
intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
difference([1, 2, 3], [2, 3, 4]);   // [1]
union([1, 2], [2, 3]);              // [1, 2, 3]

// Partition
partition([1, 2, 3, 4], n => n % 2 === 0);
// [[2, 4], [1, 3]]

// Math
sum([1, 2, 3, 4]);                  // 10
average([1, 2, 3, 4]);              // 2.5
range(1, 5);                        // [1, 2, 3, 4]`,
        filename: 'array-utils.ts',
      },
    ],
    examples: [
      {
        framework: 'react',
        label: 'React',
        filename: 'UserList.tsx',
        code: `import { groupBy, unique, sortBy } from '@forgedevstack/anvil';
import { useMemo } from 'react';

interface User { id: string; name: string; role: 'admin' | 'user' | 'guest'; }

export function UserList({ users }: { users: User[] }) {
  const usersByRole = useMemo(() => groupBy(users, 'role'), [users]);
  const roles = useMemo(() => unique(users.map(u => u.role)), [users]);
  
  return (
    <div className="space-y-4">
      {roles.map(role => (
        <section key={role}>
          <h3 className="font-bold capitalize">{role}s</h3>
          <ul>
            {usersByRole[role]?.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}`,
      },
      {
        framework: 'vue',
        label: 'Vue',
        filename: 'UserList.vue',
        code: `<script setup lang="ts">
import { groupBy, unique, sortBy } from '@forgedevstack/anvil';
import { computed } from 'vue';

interface User { id: string; name: string; role: 'admin' | 'user' | 'guest'; }
const props = defineProps<{ users: User[] }>();

const usersByRole = computed(() => groupBy(props.users, 'role'));
const roles = computed(() => unique(props.users.map(u => u.role)));
</script>

<template>
  <div class="space-y-4">
    <section v-for="role in roles" :key="role">
      <h3 class="font-bold capitalize">{{ role }}s</h3>
      <ul><li v-for="user in usersByRole[role]" :key="user.id">{{ user.name }}</li></ul>
    </section>
  </div>
</template>`,
      },
      {
        framework: 'svelte',
        label: 'Svelte',
        filename: 'UserList.svelte',
        code: `<script lang="ts">
  import { groupBy, unique } from '@forgedevstack/anvil';
  
  interface User { id: string; name: string; role: 'admin' | 'user' | 'guest'; }
  export let users: User[] = [];
  
  $: usersByRole = groupBy(users, 'role');
  $: roles = unique(users.map(u => u.role));
</script>

<div class="space-y-4">
  {#each roles as role}
    <section>
      <h3 class="font-bold capitalize">{role}s</h3>
      <ul>{#each usersByRole[role] || [] as user}<li>{user.name}</li>{/each}</ul>
    </section>
  {/each}
</div>`,
      },
      {
        framework: 'solid',
        label: 'Solid',
        filename: 'UserList.tsx',
        code: `import { groupBy, unique } from '@forgedevstack/anvil';
import { Component, For, createMemo } from 'solid-js';

interface User { id: string; name: string; role: 'admin' | 'user' | 'guest'; }

export const UserList: Component<{ users: User[] }> = (props) => {
  const usersByRole = createMemo(() => groupBy(props.users, 'role'));
  const roles = createMemo(() => unique(props.users.map(u => u.role)));
  
  return (
    <div class="space-y-4">
      <For each={roles()}>
        {(role) => (
          <section>
            <h3 class="font-bold capitalize">{role}s</h3>
            <ul><For each={usersByRole()[role] || []}>{(user) => <li>{user.name}</li>}</For></ul>
          </section>
        )}
      </For>
    </div>
  );
};`,
      },
      {
        framework: 'angular',
        label: 'Angular',
        filename: 'user-list.component.ts',
        code: `import { Component, Input } from '@angular/core';
import { groupBy, unique } from '@forgedevstack/anvil';

interface User { id: string; name: string; role: 'admin' | 'user' | 'guest'; }

@Component({
  selector: 'app-user-list',
  template: \`
    <div class="space-y-4">
      <section *ngFor="let role of roles">
        <h3 class="font-bold capitalize">{{ role }}s</h3>
        <ul><li *ngFor="let user of usersByRole[role]">{{ user.name }}</li></ul>
      </section>
    </div>
  \`,
})
export class UserListComponent {
  @Input() users: User[] = [];
  get usersByRole() { return groupBy(this.users, 'role'); }
  get roles() { return unique(this.users.map(u => u.role)); }
}`,
      },
      {
        framework: 'vanilla',
        label: 'Vanilla',
        filename: 'user-list.ts',
        code: `import { groupBy, unique } from '@forgedevstack/anvil';

interface User { id: string; name: string; role: 'admin' | 'user' | 'guest'; }

function renderUserList(users: User[]): HTMLElement {
  const container = document.createElement('div');
  const usersByRole = groupBy(users, 'role');
  const roles = unique(users.map(u => u.role));
  
  roles.forEach(role => {
    const section = document.createElement('section');
    section.innerHTML = \`<h3 class="font-bold capitalize">\${role}s</h3>\`;
    const ul = document.createElement('ul');
    usersByRole[role]?.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      ul.appendChild(li);
    });
    section.appendChild(ul);
    container.appendChild(section);
  });
  return container;
}`,
      },
    ],
  },

  'object': {
    slug: 'object',
    title: 'Object Utilities',
    description: 'Deep object manipulation with path notation support.',
    sections: [
      {
        id: 'quick',
        title: 'Quick Reference',
        content: 'Common object operations:',
        code: `import { get, set, pick, omit, merge, deepMerge } from '@forgedevstack/anvil';

const user = { profile: { name: 'John', age: 30 } };

get(user, 'profile.name');              // 'John'
set(user, 'profile.email', 'j@e.com');  // New object with email
pick(user, ['profile']);                // { profile: {...} }
omit(user, ['_id']);                    // Without _id
merge({ a: 1 }, { b: 2 });              // { a: 1, b: 2 }`,
        filename: 'quick.ts',
      },
      {
        id: 'all',
        title: 'All Object Functions',
        content: 'Complete list of object utilities:',
        code: `import {
  // Path operations
  get, set, has, unset,
  
  // Pick/Omit
  pick, omit, pickBy, omitBy,
  
  // Merge
  merge, deepMerge, defaults,
  
  // Transform
  mapValues, mapKeys, invert,
  
  // Flatten
  flattenObject, unflattenObject,
  
  // Compare
  isEqual, isMatch, isEmpty,
} from '@forgedevstack/anvil';

const user = { profile: { name: 'John', age: 30 } };

get(user, 'profile.name');              // 'John'
get(user, 'profile.email', 'N/A');      // 'N/A' (default)
set(user, 'profile.email', 'j@e.com');  // New object
has(user, 'profile.name');              // true

pick(user, ['profile']);                // { profile: {...} }
omit(user, ['_id']);                    // Without _id
pickBy(obj, v => v !== null);           // Without nulls

merge({ a: 1 }, { b: 2 });              // { a: 1, b: 2 }
deepMerge(
  { user: { name: 'John' } },
  { user: { age: 30 } }
);  // { user: { name: 'John', age: 30 } }

mapValues({ a: 1, b: 2 }, n => n * 2);  // { a: 2, b: 4 }
flattenObject({ user: { name: 'John' } }); // { 'user.name': 'John' }
isEqual({ a: 1 }, { a: 1 });            // true (deep)`,
        filename: 'object-utils.ts',
      },
    ],
    examples: [
      {
        framework: 'react',
        label: 'React',
        filename: 'SettingsForm.tsx',
        code: `import { get, set, deepMerge } from '@forgedevstack/anvil';
import { useState, useCallback } from 'react';

interface Settings {
  user: { name: string; email: string };
  preferences: { theme: 'light' | 'dark' };
}

export function SettingsForm({ initial }: { initial: Settings }) {
  const [settings, setSettings] = useState(initial);
  
  const updateSetting = useCallback((path: string, value: unknown) => {
    setSettings(prev => set(prev, path, value));
  }, []);
  
  const theme = get(settings, 'preferences.theme', 'light');
  
  return (
    <form className="space-y-4">
      <input
        value={get(settings, 'user.name', '')}
        onChange={e => updateSetting('user.name', e.target.value)}
      />
      <select value={theme} onChange={e => updateSetting('preferences.theme', e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </form>
  );
}`,
      },
      {
        framework: 'vue',
        label: 'Vue',
        filename: 'SettingsForm.vue',
        code: `<script setup lang="ts">
import { get, set } from '@forgedevstack/anvil';
import { ref, computed } from 'vue';

interface Settings { user: { name: string }; preferences: { theme: 'light' | 'dark' }; }
const props = defineProps<{ initial: Settings }>();
const settings = ref(props.initial);

const updateSetting = (path: string, value: unknown) => {
  settings.value = set(settings.value, path, value);
};

const theme = computed(() => get(settings.value, 'preferences.theme', 'light'));
</script>

<template>
  <form class="space-y-4">
    <input :value="get(settings, 'user.name')" @input="updateSetting('user.name', ($event.target as any).value)" />
    <select :value="theme" @change="updateSetting('preferences.theme', ($event.target as any).value)">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </form>
</template>`,
      },
      {
        framework: 'svelte',
        label: 'Svelte',
        filename: 'SettingsForm.svelte',
        code: `<script lang="ts">
  import { get, set } from '@forgedevstack/anvil';
  
  interface Settings { user: { name: string }; preferences: { theme: 'light' | 'dark' }; }
  export let initial: Settings;
  let settings = initial;
  
  function updateSetting(path: string, value: unknown) {
    settings = set(settings, path, value);
  }
  
  $: theme = get(settings, 'preferences.theme', 'light');
</script>

<form class="space-y-4">
  <input value={get(settings, 'user.name')} on:input={e => updateSetting('user.name', e.currentTarget.value)} />
  <select value={theme} on:change={e => updateSetting('preferences.theme', e.currentTarget.value)}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</form>`,
      },
      {
        framework: 'solid',
        label: 'Solid',
        filename: 'SettingsForm.tsx',
        code: `import { get, set } from '@forgedevstack/anvil';
import { createSignal } from 'solid-js';

interface Settings { user: { name: string }; preferences: { theme: 'light' | 'dark' }; }

export function SettingsForm(props: { initial: Settings }) {
  const [settings, setSettings] = createSignal(props.initial);
  
  const updateSetting = (path: string, value: unknown) => {
    setSettings(prev => set(prev, path, value));
  };
  
  return (
    <form class="space-y-4">
      <input value={get(settings(), 'user.name')} onInput={e => updateSetting('user.name', e.currentTarget.value)} />
      <select value={get(settings(), 'preferences.theme')} onChange={e => updateSetting('preferences.theme', e.currentTarget.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </form>
  );
}`,
      },
      {
        framework: 'angular',
        label: 'Angular',
        filename: 'settings.component.ts',
        code: `import { Component, Input } from '@angular/core';
import { get, set } from '@forgedevstack/anvil';

interface Settings { user: { name: string }; preferences: { theme: 'light' | 'dark' }; }

@Component({
  selector: 'app-settings',
  template: \`
    <form class="space-y-4">
      <input [value]="userName" (input)="updateSetting('user.name', $any($event.target).value)" />
      <select [value]="theme" (change)="updateSetting('preferences.theme', $any($event.target).value)">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </form>
  \`,
})
export class SettingsComponent {
  @Input() initial!: Settings;
  settings!: Settings;
  ngOnInit() { this.settings = this.initial; }
  updateSetting(path: string, value: unknown) { this.settings = set(this.settings, path, value); }
  get theme() { return get(this.settings, 'preferences.theme', 'light'); }
  get userName() { return get(this.settings, 'user.name', ''); }
}`,
      },
      {
        framework: 'vanilla',
        label: 'Vanilla',
        filename: 'settings.ts',
        code: `import { get, set, pick, omit } from '@forgedevstack/anvil';

interface Settings { user: { name: string }; preferences: { theme: 'light' | 'dark' }; }

class SettingsManager {
  private settings: Settings;
  
  constructor(initial: Settings) { this.settings = initial; }
  
  get<T>(path: string, defaultValue?: T): T {
    return get(this.settings, path, defaultValue) as T;
  }
  
  update(path: string, value: unknown): void {
    this.settings = set(this.settings, path, value);
  }
  
  getPublicSettings() {
    return omit(this.settings, ['user.email']);
  }
}

const manager = new SettingsManager({ user: { name: 'John' }, preferences: { theme: 'dark' } });
console.log(manager.get('user.name')); // 'John'
manager.update('preferences.theme', 'light');`,
      },
    ],
  },

  'string': {
    slug: 'string',
    title: 'String Utilities',
    description: 'Case conversion, validation, and text manipulation.',
    sections: [
      {
        id: 'all',
        title: 'All String Functions',
        content: 'Complete list of string utilities:',
        code: `import {
  // Case conversion
  capitalize, camelCase, pascalCase,
  snakeCase, kebabCase, titleCase,
  
  // Text manipulation
  slugify, truncate, escapeHtml, unescapeHtml,
  pad, padStart, padEnd, trim,
  
  // Validation
  isEmail, isUrl, isBlank, isNumeric, isAlpha,
  
  // Generation
  uuid, randomString, nanoid,
  
  // Analysis
  countOccurrences, similarity, levenshtein,
} from '@forgedevstack/anvil';

// Case conversion
capitalize('hello');           // 'Hello'
camelCase('hello-world');      // 'helloWorld'
pascalCase('hello-world');     // 'HelloWorld'
snakeCase('helloWorld');       // 'hello_world'
kebabCase('helloWorld');       // 'hello-world'
titleCase('hello_world');      // 'Hello World'

// Text manipulation
slugify('Hello World!');       // 'hello-world'
truncate('Long text...', 10);  // 'Long te...'
escapeHtml('<div>');           // '&lt;div&gt;'

// Validation
isEmail('test@example.com');   // true
isUrl('https://example.com');  // true

// Generation
uuid();                        // 'a1b2c3d4-...'
randomString(8);               // 'xK9mPq2n'`,
        filename: 'string-utils.ts',
      },
    ],
  },

  'function': {
    slug: 'function',
    title: 'Function Utilities',
    description: 'Function composition, rate limiting, and async helpers.',
    sections: [
      {
        id: 'all',
        title: 'All Function Utilities',
        content: 'Complete list of function utilities:',
        code: `import {
  // Rate limiting
  debounce, throttle,
  
  // Caching
  memoize, memoizeAsync,
  
  // Execution control
  once, before, after,
  
  // Async
  retry, timeout, sleep, defer,
  
  // Composition
  compose, pipe, flow,
  
  // Partial application
  curry, partial, partialRight,
  
  // Utilities
  noop, identity, constant,
} from '@forgedevstack/anvil';

// Debounce with options
const search = debounce(fn, 300, { leading: true, trailing: true });
search.cancel();  // Cancel pending
search.flush();   // Execute immediately

// Throttle
const scroll = throttle(fn, 100);

// Memoize with custom key
const expensive = memoize(fn, { maxSize: 100 });
expensive.clear();

// Once
const init = once(() => console.log('Init'));
init(); init(); // Only logs once

// Retry with exponential backoff
await retry(asyncFn, { retries: 3, delay: 1000, backoff: 2 });

// Pipe/Compose
const process = pipe(add1, multiply2, toString);

// Curry
const add = curry((a, b, c) => a + b + c);
add(1)(2)(3); // 6`,
        filename: 'function-utils.ts',
      },
    ],
  },

  'clone': {
    slug: 'clone',
    title: 'Clone Utilities',
    description: 'Deep cloning with support for circular references and complex types.',
    sections: [
      {
        id: 'all',
        title: 'All Clone Functions',
        content: 'Complete list of clone utilities:',
        code: `import {
  deepClone,      // Full recursive clone with circular ref support
  shallowClone,   // Top-level copy only
  deepFreeze,     // Make deeply immutable
  deepSeal,       // Prevent adding properties deeply
  cloneWith,      // Clone with custom transformers
} from '@forgedevstack/anvil';

const original = {
  primitives: { str: 'hello', num: 42 },
  collections: {
    array: [1, 2, 3],
    map: new Map([['key', 'value']]),
    set: new Set([1, 2, 3]),
  },
  special: {
    date: new Date(),
    regex: /pattern/gi,
  },
};

// Deep clone preserves all types
const cloned = deepClone(original);
cloned.collections.array.push(4);
console.log(original.collections.array); // [1, 2, 3] - unchanged

// Handles circular references
const circular: any = { name: 'test' };
circular.self = circular;
deepClone(circular); // Works!

// Deep freeze - make immutable
const frozen = deepFreeze({ count: 0 });
// frozen.count = 1; // Throws

// Clone with transformation
const masked = cloneWith(user, (key, value) => {
  if (key === 'password') return '****';
  return value;
});`,
        filename: 'clone-utils.ts',
      },
    ],
  },

  'react-hooks': {
    slug: 'react-hooks',
    title: 'React Hooks',
    description: '40+ React hooks for common UI patterns and state management.',
    sections: [
      {
        id: 'all',
        title: 'All React Hooks',
        content: 'Complete list of React hooks:',
        code: `import {
  // State
  useToggle, useCounter, useArray, useMap, useSet,
  usePrevious, useLatest, useDebounce, useThrottle,
  
  // Effects
  useMount, useUnmount, useUpdateEffect,
  useInterval, useTimeout, useAsync,
  
  // DOM
  useClickOutside, useHover, useFocus,
  useKeyPress, useScroll, useWindowSize,
  useMediaQuery, useIntersection,
  
  // Forms
  useForm, useInput, useValidation,
  
  // Storage
  useLocalStorage, useSessionStorage,
  
  // Misc
  useCopyToClipboard, useOnline, useGeolocation,
} from '@forgedevstack/anvil';

// Toggle
const [isOpen, toggle, setIsOpen] = useToggle(false);

// Counter
const { count, increment, decrement, reset, set } = useCounter(0);

// Debounce
const debouncedValue = useDebounce(searchTerm, 300);

// Click outside
const ref = useClickOutside(() => setIsOpen(false));

// Form
const { values, errors, handleChange, handleSubmit, isValid } = useForm({
  initialValues: { email: '', password: '' },
  validate: (values) => ({
    email: !values.email ? 'Required' : undefined,
  }),
  onSubmit: async (values) => { await api.login(values); },
});`,
        filename: 'react-hooks.ts',
      },
    ],
  },

  'vue-composables': {
    slug: 'vue-composables',
    title: 'Vue Composables',
    description: 'Vue 3 composables matching React hooks functionality.',
    sections: [
      {
        id: 'all',
        title: 'All Vue Composables',
        content: 'Complete list of Vue composables:',
        code: `import {
  // State
  useToggle, useCounter, useDebounce, useThrottle,
  
  // Effects
  useInterval, useTimeout, useAsync,
  
  // DOM
  useClickOutside, useHover, useWindowSize,
  useMediaQuery, useIntersection,
  
  // Storage
  useLocalStorage, useSessionStorage,
  
  // Misc
  useCopyToClipboard, useOnline,
} from '@forgedevstack/anvil/hooks/vue';

// Toggle
const { value: isOpen, toggle, setTrue, setFalse } = useToggle(false);

// Counter
const { count, increment, decrement, reset } = useCounter(0);

// Debounce
const debouncedSearch = useDebounce(searchTerm, 300);

// Click outside
const { target: modalRef } = useClickOutside(() => {
  isOpen.value = false;
});

// Interval
const { pause, resume, isActive } = useInterval(() => {
  console.log('Tick');
}, 1000);`,
        filename: 'vue-composables.ts',
      },
    ],
  },

  'types': {
    slug: 'types',
    title: 'Type Utilities',
    description: 'TypeScript utility types for advanced type manipulation.',
    sections: [
      {
        id: 'all',
        title: 'All Type Utilities',
        content: 'Complete list of TypeScript utility types:',
        code: `import type {
  // Basic
  Nullable, NonNullable, Optional, Required,
  
  // Object
  DeepPartial, DeepRequired, DeepReadonly,
  PickByValue, OmitByValue, Mutable,
  
  // Array
  ArrayElement, Head, Tail, Last, Flatten,
  
  // Function
  AsyncReturnType, Parameters, ReturnType,
  
  // Union/Intersection
  UnionToIntersection, Merge, Overwrite,
  
  // String
  CamelCase, SnakeCase, KebabCase, PascalCase,
  
  // Misc
  Primitive, Falsy, MaybePromise, MaybeArray,
} from '@forgedevstack/anvil';

// DeepPartial - all properties optional recursively
type PartialUser = DeepPartial<User>;

// DeepReadonly - all properties readonly recursively
type ImmutableConfig = DeepReadonly<Config>;

// PickByValue - pick properties by value type
type StringProps = PickByValue<User, string>;

// AsyncReturnType - get return type of async function
type Data = AsyncReturnType<typeof fetchData>;

// MaybeArray - T | T[]
type Items = MaybeArray<User>;
// User | User[]`,
        filename: 'types.ts',
      },
    ],
  },

  'api': {
    slug: 'api',
    title: 'API Reference',
    description: 'Complete API reference for all Anvil utilities.',
    sections: [
      {
        id: 'overview',
        title: 'Package Overview',
        content: 'Anvil exports all utilities from the main package. You can also import from subpaths for smaller bundles:',
        code: `// Main import (tree-shakeable)
import { deepClone, isNull, debounce } from '@forgedevstack/anvil';

// Subpath imports
import { deepClone } from '@forgedevstack/anvil/utils/clone';
import { isNull } from '@forgedevstack/anvil/utils/guards';
import { debounce } from '@forgedevstack/anvil/utils/function';

// React hooks
import { useToggle, useForm } from '@forgedevstack/anvil/hooks/react';

// Vue composables
import { useToggle, useDebounce } from '@forgedevstack/anvil/hooks/vue';`,
        filename: 'imports.ts',
      },
    ],
  },
};

