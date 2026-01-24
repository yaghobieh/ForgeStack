import { FC, useState } from 'react';
import { TABLE_DOCS, TABLE_COLOR } from '@/constants/table-docs.const';
import { CodeBlock } from '../CodeBlock';

interface TableDocContentProps {
  page: string;
}

// Mock Table Component for Live Preview
const MockTable: FC<{
  showFilter?: boolean;
  showPagination?: boolean;
  showSelection?: boolean;
  stickyName?: boolean;
  stickyActions?: boolean;
}> = ({
  showFilter = true,
  showPagination = true,
  showSelection = false,
  stickyName = false,
  stickyActions = false,
}) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  ];

  return (
    <div className="border border-theme-border rounded-lg overflow-hidden bg-theme-secondary">
      {showFilter && (
        <div className="flex items-center gap-4 px-4 py-3 border-b border-theme-border">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 text-sm rounded border border-theme-border bg-theme-primary text-theme-primary"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-theme-tertiary">
              {showSelection && (
                <th className="px-4 py-3 w-12">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
              )}
              <th className={`px-4 py-3 text-left text-sm font-medium text-theme-secondary ${stickyName ? 'sticky left-0 bg-theme-tertiary z-10 shadow-[2px_0_4px_-2px_rgba(0,0,0,0.2)]' : ''}`}>
                Name
                <svg className="inline w-3 h-3 ml-1 text-theme-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-theme-secondary">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-theme-secondary">Role</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-theme-secondary">Status</th>
              {stickyActions && (
                <th className="px-4 py-3 text-left text-sm font-medium text-theme-secondary sticky right-0 bg-theme-tertiary z-10 shadow-[-2px_0_4px_-2px_rgba(0,0,0,0.2)]">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t border-theme-border hover:bg-theme-hover transition-colors">
                {showSelection && (
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => {
                        const newSelected = new Set(selected);
                        if (newSelected.has(row.id)) {
                          newSelected.delete(row.id);
                        } else {
                          newSelected.add(row.id);
                        }
                        setSelected(newSelected);
                      }}
                      className="w-4 h-4"
                    />
                  </td>
                )}
                <td className={`px-4 py-3 text-sm ${stickyName ? 'sticky left-0 bg-theme-primary z-10 shadow-[2px_0_4px_-2px_rgba(0,0,0,0.2)]' : ''}`}>
                  {row.name}
                </td>
                <td className="px-4 py-3 text-sm text-theme-secondary">{row.email}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    row.role === 'Admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {row.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`flex items-center gap-2 text-sm ${
                    row.status === 'Active' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      row.status === 'Active' ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                    {row.status}
                  </span>
                </td>
                {stickyActions && (
                  <td className="px-4 py-3 sticky right-0 bg-theme-primary z-10 shadow-[-2px_0_4px_-2px_rgba(0,0,0,0.2)]">
                    <div className="flex gap-2">
                      <button className="p-1 rounded hover:bg-theme-tertiary text-blue-400">✏️</button>
                      <button className="p-1 rounded hover:bg-theme-tertiary text-red-400">🗑️</button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPagination && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-theme-border">
          <span className="text-sm text-theme-secondary">1-3 of 3</span>
          <div className="flex items-center gap-2">
            <button disabled className="px-3 py-1 text-sm rounded bg-theme-tertiary text-theme-muted">&lt;</button>
            <button className="px-3 py-1 text-sm rounded text-white" style={{ backgroundColor: TABLE_COLOR }}>1</button>
            <button disabled className="px-3 py-1 text-sm rounded bg-theme-tertiary text-theme-muted">&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Live Preview Component
const LivePreview: FC<{
  children: React.ReactNode;
  code: string;
  title: string;
}> = ({ children, code, title }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-theme-border rounded-xl overflow-hidden my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-theme-secondary border-b border-theme-border">
        <span className="text-sm font-medium text-theme-primary">{title}</span>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs px-3 py-1 rounded bg-theme-tertiary hover:bg-theme-hover text-theme-secondary transition-colors"
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
      <div className="p-6 bg-theme-primary">
        {children}
      </div>
      {showCode && code && (
        <div className="border-t border-theme-border">
          <CodeBlock code={code} filename="example.tsx" />
        </div>
      )}
    </div>
  );
};

export const TableDocContent: FC<TableDocContentProps> = ({ page }) => {
  const doc = TABLE_DOCS[page];

  if (!doc) {
    return <div className="text-red-500">Documentation for "{page}" not found.</div>;
  }

  const isOverview = page === 'overview';

  return (
    <article className="max-w-none">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4" style={{ color: TABLE_COLOR }}>{doc.title}</h1>
        <p className="text-lg text-theme-secondary leading-relaxed">
          {doc.description}
        </p>
      </div>

      {isOverview && doc.sections[0] && (
        <LivePreview title="Basic Table" code={doc.sections[0].code || ''}>
          <MockTable />
        </LivePreview>
      )}

      {isOverview && doc.features && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {doc.features.map((feature) => (
            <div
              key={feature.title}
              className="p-4 rounded-lg border border-theme-border bg-theme-secondary hover:border-opacity-50 transition-colors"
              style={{ borderColor: `${TABLE_COLOR}30` }}
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="font-medium text-theme-primary">{feature.title}</h3>
              <p className="text-sm text-theme-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      )}

      {page === 'quick-start' && (
        <>
          {doc.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-xl font-semibold text-theme-primary mb-4">{section.title}</h2>
              <p className="text-theme-secondary mb-4 whitespace-pre-line">{section.content}</p>
              {section.code && (
                <CodeBlock code={section.code} filename={section.filename} language={section.language} />
              )}
            </div>
          ))}
          <LivePreview title="Result" code="">
            <MockTable showSelection />
          </LivePreview>
        </>
      )}

      {page === 'selection' && (
        <>
          {doc.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-xl font-semibold text-theme-primary mb-4">{section.title}</h2>
              <p className="text-theme-secondary mb-4 whitespace-pre-line">{section.content}</p>
              {section.code && (
                <CodeBlock code={section.code} filename={section.filename} language={section.language} />
              )}
            </div>
          ))}
          <LivePreview title="Selectable Rows" code="">
            <MockTable showSelection />
          </LivePreview>
        </>
      )}

      {page === 'sticky' && (
        <>
          {doc.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-xl font-semibold text-theme-primary mb-4">{section.title}</h2>
              <p className="text-theme-secondary mb-4 whitespace-pre-line">{section.content}</p>
              {section.code && (
                <CodeBlock code={section.code} filename={section.filename} language={section.language} />
              )}
            </div>
          ))}
          <LivePreview title="Sticky Name (left) & Actions (right)" code="">
            <MockTable stickyName stickyActions />
          </LivePreview>
        </>
      )}

      {!isOverview && page !== 'quick-start' && page !== 'selection' && page !== 'sticky' && (
        doc.sections.map((section) => (
          <div key={section.id} className="mb-8">
            <h2 className="text-xl font-semibold text-theme-primary mb-4">{section.title}</h2>
            <p className="text-theme-secondary mb-4 whitespace-pre-line">{section.content}</p>
            {section.code && (
              <CodeBlock code={section.code} filename={section.filename} language={section.language} />
            )}
          </div>
        ))
      )}

      {doc.apiTable && (
        <div className="overflow-x-auto">
          <table className="w-full border border-theme-border rounded-lg text-sm">
            <thead>
              <tr className="bg-theme-secondary">
                {doc.apiTable.headers.map((header) => (
                  <th key={header} className="px-4 py-3 text-left font-medium text-theme-primary border-b border-theme-border">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {doc.apiTable.rows.map((row, idx) => (
                <tr key={idx} className="border-b border-theme-border hover:bg-theme-hover">
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className={`px-4 py-3 ${
                        cellIdx === 0 ? 'font-mono' : ''
                      } ${cellIdx === 0 ? '' : 'text-theme-secondary'}`}
                      style={cellIdx === 0 ? { color: TABLE_COLOR } : undefined}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
};

