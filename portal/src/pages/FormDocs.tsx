import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MobileDocsNav } from '../components/MobileDocsNav';
import { CodeBlock } from '../components/CodeBlock';

export const FORM_COLOR = '#10b981';

export const FORM_NAV_ITEMS = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'quick-start', label: 'Quick Start' },
  { path: 'fields', label: 'Fields' },
  { path: 'validation', label: 'Validation' },
  { path: 'submission', label: 'Submission' },
  { path: 'caching', label: 'Caching' },
  { path: 'devtools', label: 'DevTools' },
  { path: 'api', label: 'API Reference' },
];

export const FormIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="6" width="32" height="36" rx="4" fill={`${FORM_COLOR}20`} stroke={FORM_COLOR} strokeWidth="2"/>
    <line x1="14" y1="14" x2="34" y2="14" stroke={FORM_COLOR} strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="22" x2="28" y2="22" stroke={FORM_COLOR} strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="30" x2="32" y2="30" stroke={FORM_COLOR} strokeWidth="2" strokeLinecap="round"/>
    <rect x="14" y="36" width="10" height="4" rx="2" fill={FORM_COLOR}/>
  </svg>
);

export const FormDocsNav: FC = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 px-3 mb-4">
        <FormIcon size={28} />
        <span className="font-semibold" style={{ color: FORM_COLOR }}>Form</span>
        <span 
          className="text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: `${FORM_COLOR}20`, color: FORM_COLOR }}
        >
          v1.0.0
        </span>
      </div>

      <div className="space-y-1">
        {FORM_NAV_ITEMS.map((item) => {
          const path = `/form${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact 
            ? location.pathname === '/form' || location.pathname === '/form/'
            : location.pathname === path;
            
          return (
            <NavLink
              key={item.path || 'overview'}
              to={path}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive 
                  ? 'font-medium'
                  : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-hover'
              }`}
              style={isActive ? { backgroundColor: `${FORM_COLOR}20`, color: FORM_COLOR } : undefined}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export const FormDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      <MobileDocsNav
        items={FORM_NAV_ITEMS}
        basePath="/form"
        color={FORM_COLOR}
        title="Form"
        icon={<FormIcon size={20} />}
      />
      
      <FormDocsNav />
      
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

const INSTALL_CODE = `# npm
npm install @forgedevstack/forge-form

# yarn
yarn add @forgedevstack/forge-form

# pnpm
pnpm add @forgedevstack/forge-form`;

const QUICK_START_CODE = `import { FormProvider, useField, Validators } from '@forgedevstack/forge-form';

function ContactForm() {
  return (
    <FormProvider
      name="Contact"
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(values) => console.log('Submitted:', values)}
    >
      <FormFields />
    </FormProvider>
  );
}

function FormFields() {
  const nameField = useField('name', {
    validators: [Validators.required('Name is required')],
  });
  
  const emailField = useField('email', {
    validators: [
      Validators.required('Email is required'),
      Validators.email('Invalid email'),
    ],
  });

  return (
    <form>
      <input {...nameField.inputProps} placeholder="Name" />
      {nameField.field.errors[0] && <span>{nameField.field.errors[0].message}</span>}
      
      <input {...emailField.inputProps} placeholder="Email" />
      {emailField.field.errors[0] && <span>{emailField.field.errors[0].message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`;

const VALIDATION_CODE = `import { Validators } from '@forgedevstack/forge-form';

// Built-in validators
Validators.required('Required field')
Validators.email('Invalid email')
Validators.minLength(3, 'Too short')
Validators.maxLength(100, 'Too long')
Validators.min(0, 'Must be positive')
Validators.max(100, 'Max 100')
Validators.pattern(/^[A-Z]/, 'Must start with uppercase')
Validators.url('Invalid URL')
Validators.phone('Invalid phone')
Validators.match('password', 'Passwords must match')

// Custom validator
const customValidator = (value) => ({
  valid: value.includes('@company.com'),
  message: 'Must be a company email',
});

// Async validator
const uniqueEmail = async (value) => {
  const exists = await checkEmail(value);
  return { valid: !exists, message: 'Email already taken' };
};`;

const SUBMISSION_CODE = `// Basic submission
<FormProvider
  onSubmit={(values) => saveData(values)}
  onError={(errors) => console.error(errors)}
>

// With API submission
<FormProvider
  submitApi={{
    url: '/api/contact',
    method: 'POST',
    headers: { 'Authorization': 'Bearer ...' },
    transformPayload: (values) => ({ data: values }),
    onSuccess: (response) => toast.success('Saved!'),
    onApiError: (error) => toast.error(error.message),
    retries: 3,
    retryDelay: 1000,
  }}
>

// Dynamic API config
<FormProvider
  submitApi={(values) => ({
    url: values.id ? \`/api/users/\${values.id}\` : '/api/users',
    method: values.id ? 'PUT' : 'POST',
  })}
>`;

const CACHING_CODE = `// Enable form value persistence
<FormProvider
  persistValues
  persistKey="contact-form"
  clearCacheOnSubmit
>

// Manual cache management
import { clearFormCacheByKey, clearAllFormCache } from '@forgedevstack/forge-form';

// Clear specific form
clearFormCacheByKey('contact-form');

// Clear all forms
clearAllFormCache();`;

const DEVTOOLS_CODE = `import { ForgeFormDevTools } from '@forgedevstack/forge-form/devtools';

function App() {
  return (
    <>
      <FormProvider name="MyForm">
        <MyForm />
      </FormProvider>
      
      <ForgeFormDevTools 
        position="right"
        logLevel="all"
        showConsoleLog={false}
      />
    </>
  );
}`;

const API_CODE = `// FormProvider props
<FormProvider
  name="MyForm"                    // Form identifier
  initialValues={{}}               // Initial field values
  validateOnChange={true}          // Validate on input
  validateOnBlur={true}            // Validate on blur
  validateOnSubmit={true}          // Validate before submit
  persistValues={false}            // Cache form values
  persistKey="form-key"            // Cache key
  clearCacheOnSubmit={false}       // Clear cache on submit
  submitApi={config}               // API submission config
  onSubmit={(values) => {}}        // Submit callback
  onError={(errors) => {}}         // Error callback
  onReset={() => {}}               // Reset callback
>

// useField hook
const { field, actions, inputProps } = useField('fieldName', {
  validators: [],
  initialValue: '',
  validateOnChange: true,
  validateOnBlur: true,
});

// useForm hook
const { form, handleSubmit, handleReset } = useForm();`;

export const FormDocContent: FC<{ page: string }> = ({ page }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {page === 'overview' && (
        <section>
          <h1 className="text-4xl font-bold text-theme-primary mb-4 flex items-center gap-3">
            <FormIcon size={48} />
            Forge Form
          </h1>
          <p className="text-lg text-theme-secondary mb-6">
            Lightweight form management with built-in validation and DevTools.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Validators', value: '15+' },
              { label: 'Bundle Size', value: '< 4KB' },
              { label: 'React', value: '16.8+' },
              { label: 'TypeScript', value: 'First Class' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-lg bg-theme-card border border-theme">
                <div className="text-xl font-bold" style={{ color: FORM_COLOR }}>{stat.value}</div>
                <div className="text-sm text-theme-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold text-theme-primary mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Built-in Validators', desc: 'Required, email, min/max, pattern, and more' },
              { title: 'Async Validation', desc: 'Support for server-side validation' },
              { title: 'Form Persistence', desc: 'Cache form values in localStorage' },
              { title: 'API Submission', desc: 'Built-in fetch with retries and transforms' },
              { title: 'DevTools', desc: 'Real-time form state debugging panel' },
              { title: 'Zero Dependencies', desc: 'Tiny bundle, works with any UI library' },
            ].map((feature) => (
              <div key={feature.title} className="p-4 rounded-lg bg-theme-card border border-theme">
                <div className="font-semibold text-theme-primary">{feature.title}</div>
                <div className="text-sm text-theme-secondary">{feature.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === 'installation' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Installation</h1>
          <p className="text-theme-secondary mb-6">
            Install Forge Form using your preferred package manager.
          </p>
          <CodeBlock code={INSTALL_CODE} language="bash" />
        </section>
      )}

      {page === 'quick-start' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Quick Start</h1>
          <p className="text-theme-secondary mb-6">
            Create your first form with validation in minutes.
          </p>
          <CodeBlock code={QUICK_START_CODE} language="tsx" />
        </section>
      )}

      {page === 'fields' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Fields</h1>
          <p className="text-theme-secondary mb-6">
            Use the <code className="text-emerald-500">useField</code> hook to connect form fields.
          </p>
          <CodeBlock code={`const { field, actions, inputProps } = useField('email', {
  validators: [Validators.required(), Validators.email()],
  initialValue: '',
  validateOnChange: true,
  validateOnBlur: true,
});

// Spread inputProps on your input
<input {...inputProps} type="email" placeholder="Email" />

// Access field state
field.value       // Current value
field.touched     // Has been focused
field.dirty       // Value has changed
field.valid       // Passes validation
field.errors      // Array of errors

// Actions
actions.setValue('new@email.com')
actions.setTouched(true)
actions.validate()
actions.reset()`} language="tsx" />
        </section>
      )}

      {page === 'validation' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Validation</h1>
          <p className="text-theme-secondary mb-6">
            Built-in validators for common use cases, plus support for custom validators.
          </p>
          <CodeBlock code={VALIDATION_CODE} language="tsx" />
        </section>
      )}

      {page === 'submission' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Submission</h1>
          <p className="text-theme-secondary mb-6">
            Handle form submission with callbacks or built-in API integration.
          </p>
          <CodeBlock code={SUBMISSION_CODE} language="tsx" />
        </section>
      )}

      {page === 'caching' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Caching</h1>
          <p className="text-theme-secondary mb-6">
            Persist form values across page refreshes.
          </p>
          <CodeBlock code={CACHING_CODE} language="tsx" />
        </section>
      )}

      {page === 'devtools' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">DevTools</h1>
          <p className="text-theme-secondary mb-6">
            Debug form state in real-time with the DevTools panel.
          </p>
          <CodeBlock code={DEVTOOLS_CODE} language="tsx" />
          
          <h3 className="text-xl font-bold text-theme-primary mt-6 mb-3">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: FORM_COLOR }}>Fields</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• View all registered fields</li>
                <li>• Current values and errors</li>
                <li>• Touched/dirty state</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: FORM_COLOR }}>Logs</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• Real-time event log</li>
                <li>• Validation results</li>
                <li>• API submissions</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: FORM_COLOR }}>Cache</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• Cached form values</li>
                <li>• Memory usage</li>
                <li>• Clear cache actions</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {page === 'api' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">API Reference</h1>
          <p className="text-theme-secondary mb-6">
            Complete API reference for Forge Form.
          </p>
          <CodeBlock code={API_CODE} language="tsx" />
        </section>
      )}
    </div>
  );
};

export default FormDocContent;

