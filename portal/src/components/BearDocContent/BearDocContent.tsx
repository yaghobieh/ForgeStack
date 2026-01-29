import { FC, useState } from 'react';
import { BEAR_DOCS, BEAR_COLOR } from '../../constants/bear-docs.const';
import { CodeBlock } from '../CodeBlock';
import { LivePreview } from '../LivePreview';
import { LinesOfCode } from '../LinesOfCode';

interface BearDocContentProps {
  page: keyof typeof BEAR_DOCS;
}

// Preview Components for each section
const ButtonVariantsPreview: FC = () => (
  <div className="flex flex-wrap gap-3 items-center justify-center">
    <button className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-colors font-medium">Primary</button>
    <button className="px-4 py-2 rounded-lg bg-zinc-600 text-white hover:bg-zinc-500 transition-colors font-medium">Secondary</button>
    <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500 transition-colors font-medium">Success</button>
    <button className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-500 transition-colors font-medium">Warning</button>
    <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors font-medium">Danger</button>
    <button className="px-4 py-2 rounded-lg text-amber-400 hover:bg-amber-500/10 transition-colors font-medium">Ghost</button>
    <button className="px-4 py-2 rounded-lg border border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors font-medium">Outline</button>
  </div>
);

const ButtonSizesPreview: FC = () => (
  <div className="flex flex-wrap gap-3 items-center justify-center">
    <button className="px-2 py-1 text-xs rounded bg-amber-600 text-white font-medium">Extra Small</button>
    <button className="px-3 py-1.5 text-sm rounded-md bg-amber-600 text-white font-medium">Small</button>
    <button className="px-4 py-2 text-base rounded-lg bg-amber-600 text-white font-medium">Medium</button>
    <button className="px-5 py-2.5 text-lg rounded-lg bg-amber-600 text-white font-medium">Large</button>
    <button className="px-6 py-3 text-xl rounded-xl bg-amber-600 text-white font-medium">Extra Large</button>
  </div>
);

const ButtonLoadingPreview: FC = () => (
  <div className="flex flex-wrap gap-3 items-center justify-center">
    <button className="px-4 py-2 rounded-lg bg-amber-600 text-white flex items-center gap-2 opacity-80 cursor-wait font-medium">
      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Saving...
    </button>
    <button className="px-4 py-2 rounded-lg bg-amber-600/50 text-white flex items-center gap-2 opacity-60 cursor-not-allowed font-medium" disabled>
      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing
    </button>
  </div>
);

const ModalPreview: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button 
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-colors font-medium"
      >
        Open Modal
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-zinc-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl border border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Confirm Action</h3>
              <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white text-xl">&times;</button>
            </div>
            <p className="text-zinc-300 mb-6">Are you sure you want to proceed?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-700 transition-colors">Cancel</button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-colors">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DrawerPreview: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button 
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-colors font-medium"
      >
        Open Drawer
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative ml-auto bg-zinc-800 w-80 h-full shadow-2xl border-l border-zinc-700 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Menu</h3>
              <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white text-xl">&times;</button>
            </div>
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-2 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-colors">Dashboard</a>
              <a href="#" className="block px-4 py-2 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-colors">Settings</a>
              <a href="#" className="block px-4 py-2 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-colors">Profile</a>
              <a href="#" className="block px-4 py-2 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-colors">Logout</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

const TooltipPreview: FC = () => (
  <div className="flex flex-wrap gap-6 items-center justify-center">
    <div className="relative group">
      <button className="px-4 py-2 rounded-lg bg-amber-600 text-white font-medium">Hover me</button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-zinc-700">
        This is a tooltip
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900"></div>
      </div>
    </div>
    <div className="relative group">
      <button className="px-4 py-2 rounded-lg border border-amber-500 text-amber-500 font-medium">Copy Link</button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-zinc-700">
        Click to copy
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900"></div>
      </div>
    </div>
  </div>
);

const InputPreview: FC = () => (
  <div className="flex flex-col gap-4 max-w-sm mx-auto">
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email</label>
      <input 
        type="email"
        placeholder="you@example.com" 
        className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Password</label>
      <input 
        type="password"
        placeholder="••••••••" 
        className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
      />
      <p className="mt-1 text-xs text-zinc-500">Must be at least 8 characters</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Username</label>
      <input 
        type="text"
        defaultValue="johndoe" 
        className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-red-500 text-white outline-none"
      />
      <p className="mt-1 text-xs text-red-400">This username is taken</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Search</label>
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text"
          placeholder="Search..." 
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
        />
      </div>
    </div>
  </div>
);

const SelectPreview: FC = () => (
  <div className="flex flex-col gap-4 max-w-sm mx-auto">
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Country</label>
      <select className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-600 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors cursor-pointer appearance-none">
        <option>Select a country...</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Germany</option>
        <option>France</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Language</label>
      <select className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-600 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors cursor-pointer appearance-none" defaultValue="en">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
      <p className="mt-1 text-xs text-zinc-500">Choose your preferred language</p>
    </div>
  </div>
);

const SwitchPreview: FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-white font-medium">Notifications</span>
          <p className="text-sm text-zinc-400">Receive push notifications</p>
        </div>
        <button 
          onClick={() => setNotifications(!notifications)}
          className={`relative w-11 h-6 rounded-full transition-colors ${notifications ? 'bg-amber-600' : 'bg-zinc-600'}`}
        >
          <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${notifications ? 'translate-x-5' : ''}`} />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-white font-medium">Marketing emails</span>
          <p className="text-sm text-zinc-400">Receive promotional content</p>
        </div>
        <button 
          onClick={() => setMarketing(!marketing)}
          className={`relative w-11 h-6 rounded-full transition-colors ${marketing ? 'bg-amber-600' : 'bg-zinc-600'}`}
        >
          <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${marketing ? 'translate-x-5' : ''}`} />
        </button>
      </div>
      <div className="flex items-center justify-between opacity-50">
        <div>
          <span className="text-white font-medium">Beta features</span>
          <p className="text-sm text-zinc-400">Try experimental features</p>
        </div>
        <button 
          className="relative w-11 h-6 rounded-full bg-zinc-600 cursor-not-allowed"
          disabled
        >
          <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

const BadgePreview: FC = () => (
  <div className="flex flex-wrap gap-3 items-center justify-center">
    <span className="px-2.5 py-0.5 text-sm rounded-full bg-green-500/20 text-green-400 font-medium">Active</span>
    <span className="px-2.5 py-0.5 text-sm rounded-full bg-yellow-500/20 text-yellow-400 font-medium">Beta</span>
    <span className="px-2.5 py-0.5 text-sm rounded-full bg-blue-500/20 text-blue-400 font-medium">Info</span>
    <span className="px-2.5 py-0.5 text-sm rounded-full bg-red-500/20 text-red-400 flex items-center gap-1.5 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
      Error
    </span>
    <span className="px-3 py-1 text-base rounded-full bg-amber-500/20 text-amber-400 font-medium">New</span>
  </div>
);

const SpinnerPreview: FC = () => (
  <div className="flex gap-6 items-center justify-center">
    <svg className="animate-spin w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <svg className="animate-spin w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <svg className="animate-spin w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <svg className="animate-spin w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
);

const CardPreview: FC = () => (
  <div className="flex flex-wrap gap-4 justify-center">
    <div className="w-64 bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
      <div className="px-4 py-3 border-b border-zinc-700">
        <h4 className="font-semibold text-white">Card Title</h4>
      </div>
      <div className="p-4">
        <p className="text-zinc-400 text-sm">This is a basic card component with header and body sections.</p>
      </div>
    </div>
    <div className="w-64 bg-zinc-800 rounded-xl border border-zinc-700 shadow-xl overflow-hidden">
      <div className="p-4">
        <h4 className="font-semibold text-white mb-2">Elevated Card</h4>
        <p className="text-zinc-400 text-sm">A card with elevation shadow for depth.</p>
      </div>
      <div className="px-4 py-3 border-t border-zinc-700 flex justify-end gap-2">
        <button className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors">Cancel</button>
        <button className="px-3 py-1.5 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors">Save</button>
      </div>
    </div>
  </div>
);

const GridPreview: FC = () => (
  <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <div key={n} className="h-16 bg-amber-600/20 border border-amber-600/40 rounded-lg flex items-center justify-center text-amber-500 font-mono text-sm">
        {n}
      </div>
    ))}
  </div>
);

const FlexPreview: FC = () => (
  <div className="space-y-4 max-w-md mx-auto">
    <div className="flex gap-3">
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex-1 h-12 bg-amber-600/20 border border-amber-600/40 rounded-lg flex items-center justify-center text-amber-500 font-mono text-sm">
          {n}
        </div>
      ))}
    </div>
    <div className="flex gap-3 justify-between">
      <div className="w-16 h-12 bg-green-600/20 border border-green-600/40 rounded-lg flex items-center justify-center text-green-500 font-mono text-sm">L</div>
      <div className="w-16 h-12 bg-green-600/20 border border-green-600/40 rounded-lg flex items-center justify-center text-green-500 font-mono text-sm">R</div>
    </div>
  </div>
);

const ContainerPreview: FC = () => (
  <div className="space-y-3 max-w-lg mx-auto">
    <div className="bg-blue-600/20 border border-blue-600/40 rounded-lg p-4 text-center text-blue-400 text-sm">
      <code>max-w-sm</code> - Small container
    </div>
    <div className="bg-blue-600/20 border border-blue-600/40 rounded-lg p-4 text-center text-blue-400 text-sm">
      <code>max-w-md</code> - Medium container
    </div>
    <div className="bg-blue-600/20 border border-blue-600/40 rounded-lg p-4 text-center text-blue-400 text-sm">
      <code>max-w-lg</code> - Large container
    </div>
  </div>
);

const MultiSelectPreview: FC = () => {
  const [selected, setSelected] = useState<string[]>(['react', 'typescript']);
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'typescript', label: 'TypeScript' },
  ];
  
  return (
    <div className="max-w-md mx-auto">
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Skills</label>
      <div className="relative flex flex-wrap gap-1.5 min-h-[42px] px-3 py-2 rounded-lg border border-zinc-600 bg-zinc-900">
        {selected.map((val) => (
          <span key={val} className="inline-flex items-center gap-1 px-2 py-0.5 text-sm rounded-md bg-pink-500/20 text-pink-300">
            {options.find(o => o.value === val)?.label}
            <button onClick={() => setSelected(s => s.filter(v => v !== val))} className="text-pink-400 hover:text-pink-200">&times;</button>
          </span>
        ))}
        <input 
          type="text" 
          placeholder={selected.length === 0 ? 'Select skills...' : ''}
          className="flex-1 min-w-[80px] bg-transparent outline-none text-sm text-white placeholder:text-zinc-500"
        />
      </div>
      <p className="mt-1.5 text-xs text-zinc-500">Click tags to remove them</p>
    </div>
  );
};

const AutocompletePreview: FC = () => {
  const [value, setValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const options = [
    { label: 'United States', desc: 'North America' },
    { label: 'United Kingdom', desc: 'Europe' },
    { label: 'Germany', desc: 'Europe' },
    { label: 'Japan', desc: 'Asia' },
    { label: 'Australia', desc: 'Oceania' },
  ];
  const filtered = options.filter(o => o.label.toLowerCase().includes(value.toLowerCase()));
  
  return (
    <div className="max-w-md mx-auto relative">
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Country</label>
      <div className="relative">
        <input 
          type="text" 
          value={value}
          onChange={(e) => { setValue(e.target.value); setShowOptions(true); }}
          onFocus={() => setShowOptions(true)}
          placeholder="Search countries..."
          className="w-full px-4 py-2.5 pr-10 rounded-lg border border-zinc-600 bg-zinc-900 text-sm text-white placeholder:text-zinc-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none"
        />
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {showOptions && value && filtered.length > 0 && (
        <div className="absolute z-50 w-full mt-1 py-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg max-h-48 overflow-auto">
          {filtered.map((opt) => (
            <button
              key={opt.label}
              onClick={() => { setValue(opt.label); setShowOptions(false); }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-pink-500/10 text-white"
            >
              <div className="font-medium">{opt.label}</div>
              <div className="text-xs text-zinc-400">{opt.desc}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DataTablePreview: FC = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'pending' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
  ];
  
  return (
    <div className="max-w-2xl mx-auto overflow-hidden rounded-lg border border-zinc-700">
      <table className="w-full text-sm">
        <thead className="bg-zinc-800">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-zinc-300">Name</th>
            <th className="px-4 py-3 text-left font-semibold text-zinc-300">Email</th>
            <th className="px-4 py-3 text-left font-semibold text-zinc-300">Status</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-900 divide-y divide-zinc-800">
          {data.map((row, i) => (
            <tr key={row.id} className={i % 2 === 1 ? 'bg-zinc-800/50' : ''}>
              <td className="px-4 py-3 text-white">{row.name}</td>
              <td className="px-4 py-3 text-zinc-400">{row.email}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  row.status === 'active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CarouselPreview: FC = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { bg: 'bg-pink-500', text: 'Slide 1' },
    { bg: 'bg-purple-500', text: 'Slide 2' },
    { bg: 'bg-blue-500', text: 'Slide 3' },
  ];
  
  return (
    <div className="max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className={`shrink-0 w-full h-32 ${s.bg} flex items-center justify-center text-white font-medium rounded-lg`}>
              {s.text}
            </div>
          ))}
        </div>
        <button 
          onClick={() => setCurrent((p) => (p > 0 ? p - 1 : slides.length - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700"
        >
          ‹
        </button>
        <button 
          onClick={() => setCurrent((p) => (p < slides.length - 1 ? p + 1 : 0))}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700"
        >
          ›
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-pink-500 w-6' : 'bg-zinc-600'}`}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionPreview: FC = () => {
  const [open, setOpen] = useState<string | null>('faq-1');
  const items = [
    { id: 'faq-1', title: 'What is Bear?', content: 'Bear is a modern UI component library for React.' },
    { id: 'faq-2', title: 'Is it free?', content: 'Yes! Bear is open source and free to use.' },
    { id: 'faq-3', title: 'Dark mode support?', content: 'Absolutely! Full light/dark mode included.' },
  ];
  
  return (
    <div className="max-w-md mx-auto border border-zinc-700 rounded-lg overflow-hidden divide-y divide-zinc-700">
      {items.map((item) => (
        <div key={item.id} className="bg-zinc-800">
          <button 
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            {item.title}
            <span className={`transform transition-transform ${open === item.id ? 'rotate-180' : ''}`}>▼</span>
          </button>
          <div className={`overflow-hidden transition-all ${open === item.id ? 'max-h-32' : 'max-h-0'}`}>
            <p className="px-4 py-3 text-sm text-zinc-400 bg-zinc-900/50">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const TabsPreview: FC = () => {
  const [active, setActive] = useState('overview');
  const tabs = ['Overview', 'Features', 'Pricing'];
  
  return (
    <div className="max-w-md mx-auto">
      <div className="flex gap-1 border-b border-zinc-700">
        {tabs.map((tab) => {
          const id = tab.toLowerCase();
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                active === id 
                  ? 'border-pink-500 text-pink-400' 
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="py-4 text-zinc-300 text-sm">
        {active === 'overview' && 'Bear is a modern, accessible UI library.'}
        {active === 'features' && '25+ components, dark mode, TypeScript support.'}
        {active === 'pricing' && 'Free and open source. Forever.'}
      </div>
    </div>
  );
};

const AvatarPreview: FC = () => (
  <div className="flex items-center justify-center gap-4 flex-wrap">
    <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium">JD</div>
    <div className="relative">
      <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">AB</div>
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
    </div>
    <div className="flex -space-x-2">
      {['pink', 'purple', 'blue', 'green'].map((c, i) => (
        <div key={c} className={`w-10 h-10 rounded-full bg-${c}-500 ring-2 ring-zinc-900 flex items-center justify-center text-white text-sm font-medium`} style={{ backgroundColor: ['#ec4899', '#a855f7', '#3b82f6', '#22c55e'][i] }}>
          {String.fromCharCode(65 + i)}
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-zinc-700 ring-2 ring-zinc-900 flex items-center justify-center text-zinc-300 text-sm font-medium">+3</div>
    </div>
  </div>
);

const ProgressPreview: FC = () => (
  <div className="max-w-md mx-auto space-y-4">
    <div>
      <div className="flex justify-between text-xs text-zinc-400 mb-1">
        <span>Progress</span>
        <span>75%</span>
      </div>
      <div className="h-2.5 bg-zinc-700 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-pink-500 rounded-full" />
      </div>
    </div>
    <div className="h-2.5 bg-zinc-700 rounded-full overflow-hidden">
      <div className="h-full w-1/2 bg-green-500 rounded-full" />
    </div>
    <div className="h-2.5 bg-zinc-700 rounded-full overflow-hidden">
      <div 
        className="h-full w-1/3 bg-yellow-500 rounded-full"
        style={{ 
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
          backgroundSize: '1rem 1rem',
          animation: 'stripe 1s linear infinite',
        }}
      />
    </div>
  </div>
);

// NEW COMPONENT PREVIEWS

const RatingPreview: FC = () => {
  const [value, setValue] = useState(3);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setValue(star)}
            className="text-2xl transition-colors"
          >
            <span style={{ color: star <= value ? '#ec4899' : '#52525b' }}>★</span>
          </button>
        ))}
      </div>
      <span className="text-zinc-400 text-sm">Rating: {value}/5</span>
    </div>
  );
};

const RatingSizesPreview: FC = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex gap-1 text-lg">{[1,2,3].map(i => <span key={i} style={{ color: '#ec4899' }}>★</span>)}{[4,5].map(i => <span key={i} style={{ color: '#52525b' }}>★</span>)}</div>
    <div className="flex gap-1 text-2xl">{[1,2,3,4].map(i => <span key={i} style={{ color: '#ec4899' }}>★</span>)}{[5].map(i => <span key={i} style={{ color: '#52525b' }}>★</span>)}</div>
    <div className="flex gap-1 text-3xl">{[1,2,3,4,5].map(i => <span key={i} style={{ color: '#ec4899' }}>★</span>)}</div>
  </div>
);

const RadioPreview: FC = () => {
  const [selected, setSelected] = useState('option1');
  return (
    <div className="flex flex-col gap-3">
      {['option1', 'option2', 'option3'].map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <div 
            onClick={() => setSelected(opt)}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              selected === opt ? 'border-pink-500' : 'border-zinc-500'
            }`}
          >
            {selected === opt && <div className="w-3 h-3 rounded-full bg-pink-500" />}
          </div>
          <span className="text-zinc-300">Option {opt.slice(-1)}</span>
        </label>
      ))}
    </div>
  );
};

const RadioVariantsPreview: FC = () => (
  <div className="flex flex-col gap-3">
    {[
      { label: 'Primary', color: '#ec4899' },
      { label: 'Success', color: '#22c55e' },
      { label: 'Danger', color: '#ef4444' },
    ].map((opt, i) => (
      <label key={opt.label} className="flex items-center gap-2">
        <div 
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: opt.color }}
        >
          {i === 0 && <div className="w-3 h-3 rounded-full" style={{ backgroundColor: opt.color }} />}
        </div>
        <span className="text-zinc-300">{opt.label}</span>
      </label>
    ))}
  </div>
);

const CheckboxPreview: FC = () => {
  const [checked, setChecked] = useState([true, false, true]);
  return (
    <div className="flex flex-col gap-3">
      {['Accept terms', 'Subscribe to newsletter', 'Remember me'].map((label, i) => (
        <label key={label} className="flex items-center gap-2 cursor-pointer">
          <div 
            onClick={() => {
              const newChecked = [...checked];
              newChecked[i] = !newChecked[i];
              setChecked(newChecked);
            }}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              checked[i] ? 'bg-pink-500 border-pink-500' : 'border-zinc-500'
            }`}
          >
            {checked[i] && <span className="text-white text-xs">✓</span>}
          </div>
          <span className="text-zinc-300">{label}</span>
        </label>
      ))}
    </div>
  );
};

const ButtonGroupPreview: FC = () => (
  <div className="flex justify-center">
    <div className="inline-flex rounded-lg overflow-hidden border border-pink-500">
      <button className="px-4 py-2 bg-pink-500 text-white border-r border-pink-600">Left</button>
      <button className="px-4 py-2 bg-pink-500/20 text-pink-400 border-r border-pink-500/30 hover:bg-pink-500/30">Center</button>
      <button className="px-4 py-2 bg-pink-500/20 text-pink-400 hover:bg-pink-500/30">Right</button>
    </div>
  </div>
);

const ButtonGroupVariantsPreview: FC = () => (
  <div className="flex justify-center">
    <div className="inline-flex rounded-lg overflow-hidden">
      <button className="px-4 py-2 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 rounded-l-lg">One</button>
      <button className="px-4 py-2 border-t border-b border-zinc-600 text-zinc-300 hover:bg-zinc-700">Two</button>
      <button className="px-4 py-2 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 rounded-r-lg">Three</button>
    </div>
  </div>
);

const FabPreview: FC = () => (
  <div className="flex justify-center gap-4 items-center">
    <button className="w-14 h-14 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 flex items-center justify-center text-2xl">
      +
    </button>
    <button className="px-5 py-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 flex items-center gap-2">
      <span>✏️</span> Edit
    </button>
  </div>
);

const TransferListPreview: FC = () => {
  const [left, setLeft] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [right, setRight] = useState(['Item 4']);
  const [selectedLeft, setSelectedLeft] = useState<string[]>([]);
  
  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="border border-zinc-700 rounded-lg p-3 min-w-[140px]">
        <div className="text-xs text-zinc-400 mb-2">Available</div>
        {left.map(item => (
          <label key={item} className="flex items-center gap-2 text-sm text-zinc-300 py-1 cursor-pointer">
            <input 
              type="checkbox" 
              checked={selectedLeft.includes(item)}
              onChange={(e) => setSelectedLeft(e.target.checked ? [...selectedLeft, item] : selectedLeft.filter(i => i !== item))}
              className="accent-pink-500"
            />
            {item}
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <button 
          onClick={() => {
            setRight([...right, ...selectedLeft]);
            setLeft(left.filter(i => !selectedLeft.includes(i)));
            setSelectedLeft([]);
          }}
          className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-sm hover:bg-zinc-600"
        >→</button>
        <button className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-sm hover:bg-zinc-600">←</button>
      </div>
      <div className="border border-zinc-700 rounded-lg p-3 min-w-[140px]">
        <div className="text-xs text-zinc-400 mb-2">Selected</div>
        {right.map(item => (
          <div key={item} className="text-sm text-zinc-300 py-1">{item}</div>
        ))}
      </div>
    </div>
  );
};

const DividerPreview: FC = () => (
  <div className="max-w-md mx-auto space-y-6">
    <hr className="border-zinc-700" />
    <div className="flex items-center">
      <hr className="flex-1 border-zinc-700" />
      <span className="px-3 text-zinc-400 text-sm">OR</span>
      <hr className="flex-1 border-zinc-700" />
    </div>
    <div className="flex items-center">
      <span className="pr-3 text-zinc-400 text-sm">Section</span>
      <hr className="flex-1 border-zinc-700" />
    </div>
  </div>
);

const TypographyPreview: FC = () => (
  <div className="space-y-2">
    <h1 className="text-4xl font-bold text-white">Heading 1</h1>
    <h2 className="text-3xl font-bold text-white">Heading 2</h2>
    <h3 className="text-2xl font-semibold text-white">Heading 3</h3>
    <p className="text-base text-zinc-300">Body text 1</p>
    <p className="text-sm text-zinc-400">Body text 2</p>
    <span className="text-xs text-zinc-500">Caption text</span>
    <span className="text-xs uppercase tracking-wider text-zinc-500 block">OVERLINE</span>
  </div>
);

const TypographyColorsPreview: FC = () => (
  <div className="flex flex-wrap gap-4">
    <span style={{ color: '#ec4899' }}>Primary</span>
    <span style={{ color: '#6b7280' }}>Secondary</span>
    <span style={{ color: '#22c55e' }}>Success</span>
    <span style={{ color: '#ef4444' }}>Error</span>
  </div>
);

const ListPreview: FC = () => (
  <div className="max-w-sm mx-auto bg-zinc-800 rounded-lg overflow-hidden">
    {[
      { primary: 'Inbox', secondary: 'You have 3 new messages' },
      { primary: 'Drafts', secondary: null },
      { primary: 'Sent', secondary: 'Last sent: 2 days ago' },
    ].map((item, i) => (
      <div key={item.primary} className={`px-4 py-3 hover:bg-zinc-700/50 cursor-pointer ${i > 0 ? 'border-t border-zinc-700' : ''}`}>
        <div className="text-white">{item.primary}</div>
        {item.secondary && <div className="text-sm text-zinc-400">{item.secondary}</div>}
      </div>
    ))}
  </div>
);

const ListWithIconsPreview: FC = () => (
  <div className="max-w-sm mx-auto bg-zinc-800 rounded-lg overflow-hidden">
    {[
      { icon: '📥', label: 'Inbox' },
      { icon: '📤', label: 'Sent' },
      { icon: '⚙️', label: 'Settings' },
    ].map((item, i) => (
      <div key={item.label} className={`px-4 py-3 flex items-center gap-3 hover:bg-zinc-700/50 cursor-pointer ${i > 0 ? 'border-t border-zinc-700' : ''}`}>
        <span className="text-xl">{item.icon}</span>
        <span className="text-white">{item.label}</span>
      </div>
    ))}
  </div>
);

const AlertPreview: FC = () => (
  <div className="space-y-3 max-w-md mx-auto">
    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/20 border border-green-500/30">
      <span className="text-green-400">✓</span>
      <span className="text-green-300">Operation completed successfully!</span>
    </div>
    <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
      <span className="text-blue-400">ℹ</span>
      <span className="text-blue-300">This is an informational message.</span>
    </div>
    <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
      <span className="text-yellow-400">⚠</span>
      <span className="text-yellow-300">Warning: Check your input.</span>
    </div>
    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/20 border border-red-500/30">
      <span className="text-red-400">✕</span>
      <span className="text-red-300">Error: Something went wrong.</span>
    </div>
  </div>
);

const AlertWithTitlePreview: FC = () => (
  <div className="max-w-md mx-auto">
    <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span>
          <span className="font-semibold text-green-300">Success</span>
        </div>
        <button className="text-green-400 hover:text-green-300">✕</button>
      </div>
      <p className="text-green-300/80 mt-1 ml-6">Your changes have been saved.</p>
    </div>
  </div>
);

const PaperPreview: FC = () => (
  <div className="flex gap-4 justify-center flex-wrap">
    <div className="p-4 bg-zinc-800 rounded-lg">Default paper</div>
    <div className="p-4 bg-zinc-800 rounded-lg shadow-md">Elevated paper</div>
    <div className="p-4 bg-zinc-800 rounded-lg shadow-xl">Higher elevation</div>
    <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-600">Outlined paper</div>
  </div>
);

const LinkPreview: FC = () => (
  <div className="flex gap-6 justify-center flex-wrap">
    <a href="#" className="text-zinc-300 hover:underline">Default Link</a>
    <a href="#" className="text-pink-400 hover:text-pink-300">Primary Link</a>
    <a href="#" className="text-zinc-400 hover:text-zinc-300">Secondary Link</a>
    <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
      External Link <span className="text-xs">↗</span>
    </a>
  </div>
);

const MenuPreview: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center relative">
      <button 
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors"
      >
        Open Menu
      </button>
      {open && (
        <>
          <div className="fixed inset-0" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl overflow-hidden min-w-[160px] z-10">
            <button className="w-full px-4 py-2 text-left text-zinc-300 hover:bg-zinc-700">Profile</button>
            <button className="w-full px-4 py-2 text-left text-zinc-300 hover:bg-zinc-700">Settings</button>
            <hr className="border-zinc-700" />
            <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-700">Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

const DropdownPreview: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center relative">
      <button 
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition-colors flex items-center gap-2"
      >
        Options <span className="text-xs">▼</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl overflow-hidden min-w-[160px] z-10">
            <button className="w-full px-4 py-2 text-left text-zinc-300 hover:bg-zinc-700">Edit</button>
            <button className="w-full px-4 py-2 text-left text-zinc-300 hover:bg-zinc-700">Duplicate</button>
            <hr className="border-zinc-700" />
            <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-700">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

const SpeedDialPreview: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center relative h-32">
      <div className="absolute bottom-0">
        {open && (
          <div className="flex flex-col-reverse gap-2 mb-2">
            {['✏️ Edit', '📤 Share', '🗑️ Delete'].map((action) => (
              <button key={action} className="px-3 py-2 rounded-full bg-zinc-700 text-sm text-white shadow-lg hover:bg-zinc-600">
                {action}
              </button>
            ))}
          </div>
        )}
        <button 
          onClick={() => setOpen(!open)}
          className={`w-14 h-14 rounded-full bg-pink-500 text-white shadow-lg flex items-center justify-center text-2xl transition-transform ${open ? 'rotate-45' : ''}`}
        >
          +
        </button>
      </div>
    </div>
  );
};

const ToastPreview: FC = () => {
  const [toasts, setToasts] = useState<Array<{id: number, type: string, message: string}>>([]);
  const addToast = (type: string, message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };
  
  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 justify-center">
        <button onClick={() => addToast('success', 'Saved successfully!')} className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm">Success</button>
        <button onClick={() => addToast('error', 'Something went wrong')} className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm">Error</button>
        <button onClick={() => addToast('warning', 'Please check input')} className="px-3 py-2 rounded-lg bg-yellow-600 text-white text-sm">Warning</button>
        <button onClick={() => addToast('info', 'New update available')} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm">Info</button>
      </div>
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(t => (
          <div key={t.id} className={`px-4 py-3 rounded-lg shadow-lg text-white text-sm animate-pulse ${
            t.type === 'success' ? 'bg-green-600' : t.type === 'error' ? 'bg-red-600' : t.type === 'warning' ? 'bg-yellow-600' : 'bg-blue-600'
          }`}>
            {t.message}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkeletonPreview: FC = () => (
  <div className="flex flex-col gap-4 items-center">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-zinc-700 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-32 bg-zinc-700 rounded animate-pulse" />
        <div className="h-3 w-24 bg-zinc-700 rounded animate-pulse" />
      </div>
    </div>
    <div className="w-full max-w-xs space-y-2">
      <div className="h-4 w-full bg-zinc-700 rounded animate-pulse" />
      <div className="h-4 w-3/4 bg-zinc-700 rounded animate-pulse" />
      <div className="h-4 w-5/6 bg-zinc-700 rounded animate-pulse" />
    </div>
    <div className="h-24 w-40 bg-zinc-700 rounded-lg animate-pulse" />
  </div>
);

const PaginationPreview: FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1">
        <button 
          onClick={() => setPage(1)} 
          disabled={page === 1}
          className="px-2 py-1 rounded text-sm text-zinc-400 hover:bg-zinc-700 disabled:opacity-50"
        >
          ««
        </button>
        <button 
          onClick={() => setPage(p => Math.max(1, p - 1))} 
          disabled={page === 1}
          className="px-2 py-1 rounded text-sm text-zinc-400 hover:bg-zinc-700 disabled:opacity-50"
        >
          ‹
        </button>
        {[...Array(5)].map((_, i) => {
          const pageNum = Math.max(1, Math.min(page - 2, totalPages - 4)) + i;
          if (pageNum > totalPages) return null;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`w-8 h-8 rounded text-sm font-medium ${
                pageNum === page ? 'bg-pink-500 text-white' : 'text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button 
          onClick={() => setPage(p => Math.min(totalPages, p + 1))} 
          disabled={page === totalPages}
          className="px-2 py-1 rounded text-sm text-zinc-400 hover:bg-zinc-700 disabled:opacity-50"
        >
          ›
        </button>
        <button 
          onClick={() => setPage(totalPages)} 
          disabled={page === totalPages}
          className="px-2 py-1 rounded text-sm text-zinc-400 hover:bg-zinc-700 disabled:opacity-50"
        >
          »»
        </button>
      </div>
      <span className="text-zinc-400 text-sm">Page {page} of {totalPages}</span>
    </div>
  );
};

const SliderPreview: FC = () => {
  const [value, setValue] = useState(50);
  
  return (
    <div className="max-w-sm mx-auto space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-zinc-400">
          <span>0</span>
          <span>{value}</span>
          <span>100</span>
        </div>
        <div className="relative h-2 bg-zinc-700 rounded-full">
          <div className="absolute h-full bg-pink-500 rounded-full" style={{ width: `${value}%` }} />
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
            style={{ left: `calc(${value}% - 8px)` }}
          />
        </div>
      </div>
    </div>
  );
};

const SliderRangePreview: FC = () => {
  const [range] = useState([20, 80]);
  
  return (
    <div className="max-w-sm mx-auto space-y-4">
      <div className="flex justify-between text-sm text-zinc-400">
        <span>Min: {range[0]}</span>
        <span>Max: {range[1]}</span>
      </div>
      <div className="relative h-2 bg-zinc-700 rounded-full">
        <div 
          className="absolute h-full bg-pink-500 rounded-full"
          style={{ left: `${range[0]}%`, width: `${range[1] - range[0]}%` }}
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"
          style={{ left: `calc(${range[0]}% - 8px)` }}
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"
          style={{ left: `calc(${range[1]}% - 8px)` }}
        />
      </div>
    </div>
  );
};

const BearLoaderPreview: FC = () => (
  <div className="flex justify-center">
    <div className="relative w-24 h-24">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-bounce">
        <ellipse cx="50" cy="72" rx="26" ry="20" fill="#db2777" />
        <ellipse cx="50" cy="73" rx="16" ry="12" fill="#fde68a" />
        <ellipse cx="32" cy="88" rx="12" ry="9" fill="#db2777" />
        <ellipse cx="68" cy="88" rx="12" ry="9" fill="#db2777" />
        <ellipse cx="24" cy="68" rx="8" ry="12" fill="#db2777" transform="rotate(-15 24 68)" />
        <ellipse cx="76" cy="68" rx="8" ry="12" fill="#db2777" transform="rotate(15 76 68)" />
        <ellipse cx="50" cy="36" rx="26" ry="24" fill="#db2777" />
        <ellipse cx="28" cy="16" rx="10" ry="10" fill="#db2777" />
        <ellipse cx="28" cy="16" rx="6" ry="6" fill="#fcd34d" />
        <ellipse cx="72" cy="16" rx="10" ry="10" fill="#db2777" />
        <ellipse cx="72" cy="16" rx="6" ry="6" fill="#fcd34d" />
        <ellipse cx="50" cy="44" rx="14" ry="10" fill="#fde68a" />
        <ellipse cx="50" cy="40" rx="6" ry="4" fill="#7c3aed" />
        <path d="M32 24 Q38 21 44 25" stroke="#581c87" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M68 24 Q62 21 56 25" stroke="#581c87" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="38" cy="32" rx="6" ry="7" fill="#ffffff" />
        <ellipse cx="39" cy="33" rx="4" ry="5" fill="#78350f" />
        <ellipse cx="62" cy="32" rx="6" ry="7" fill="#ffffff" />
        <ellipse cx="61" cy="33" rx="4" ry="5" fill="#78350f" />
      </svg>
      <div className="text-center mt-2 text-pink-400 text-sm animate-pulse">Loading...</div>
    </div>
  </div>
);

// New component previews
const DatePickerPreview: FC = () => (
  <div className="max-w-xs mx-auto">
    <input type="date" className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white" />
  </div>
);

const TimePickerPreview: FC = () => (
  <div className="max-w-xs mx-auto">
    <input type="time" className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white" />
  </div>
);

const ColorPickerPreview: FC = () => {
  const [color, setColor] = useState('#ec4899');
  const presets = ['#ec4899', '#3B82F6', '#10B981', '#8B5CF6', '#EF4444'];
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {presets.map(c => (
          <button key={c} onClick={() => setColor(c)} className={`w-8 h-8 rounded-full border-2 ${color === c ? 'border-white' : 'border-transparent'}`} style={{ background: c }} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded" style={{ background: color }} />
        <code className="text-zinc-400 text-sm">{color}</code>
      </div>
    </div>
  );
};

const FileUploadPreview: FC = () => (
  <div className="max-w-sm mx-auto border-2 border-dashed border-zinc-600 rounded-lg p-8 text-center hover:border-pink-500 transition-colors cursor-pointer">
    <div className="text-4xl mb-2">📁</div>
    <p className="text-zinc-400">Drag files here or click to browse</p>
  </div>
);

const NumberInputPreview: FC = () => {
  const [value, setValue] = useState(5);
  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={() => setValue(v => v - 1)} className="w-10 h-10 bg-zinc-700 rounded-lg hover:bg-zinc-600 text-xl">−</button>
      <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} className="w-16 text-center py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white" />
      <button onClick={() => setValue(v => v + 1)} className="w-10 h-10 bg-zinc-700 rounded-lg hover:bg-zinc-600 text-xl">+</button>
    </div>
  );
};

const OTPInputPreview: FC = () => (
  <div className="flex justify-center gap-2">
    {[1, 2, 3, 4, 5, 6].map(i => (
      <input key={i} type="text" maxLength={1} className="w-12 h-14 text-center text-xl font-bold bg-zinc-800 border-2 border-zinc-600 rounded-lg text-white focus:border-pink-500" />
    ))}
  </div>
);

const ChipPreview: FC = () => {
  const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind']);
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {chips.map(chip => (
        <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-sm">
          {chip}
          <button onClick={() => setChips(c => c.filter(x => x !== chip))} className="w-4 h-4 rounded-full hover:bg-pink-800 flex items-center justify-center">×</button>
        </span>
      ))}
    </div>
  );
};

const TreeViewPreview: FC = () => {
  const [expanded, setExpanded] = useState(['1']);
  return (
    <div className="max-w-sm mx-auto text-left">
      <div className="py-1">
        <button onClick={() => setExpanded(e => e.includes('1') ? e.filter(x => x !== '1') : [...e, '1'])} className="flex items-center gap-2 hover:bg-zinc-700 px-2 py-1 rounded w-full text-left">
          <span>{expanded.includes('1') ? '▼' : '▶'}</span>
          <span>📁 Documents</span>
        </button>
        {expanded.includes('1') && (
          <div className="ml-6 border-l border-zinc-700">
            <div className="py-1 px-4 hover:bg-zinc-700 rounded-r">📄 Report.pdf</div>
            <div className="py-1 px-4 hover:bg-zinc-700 rounded-r">📄 Notes.txt</div>
          </div>
        )}
      </div>
      <div className="py-1 px-2 hover:bg-zinc-700 rounded">📁 Downloads</div>
    </div>
  );
};

const TimelinePreview: FC = () => (
  <div className="max-w-sm mx-auto">
    {['Project Started', 'Development Phase', 'Testing Complete'].map((event, i) => (
      <div key={i} className="flex gap-4 pb-6 last:pb-0">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-pink-500" />
          {i < 2 && <div className="w-0.5 flex-1 bg-zinc-700 mt-2" />}
        </div>
        <div>
          <p className="font-medium text-white">{event}</p>
          <p className="text-sm text-zinc-400">Description text</p>
        </div>
      </div>
    ))}
  </div>
);

const StatisticPreview: FC = () => (
  <div className="grid grid-cols-3 gap-4">
    {[{ label: 'Users', value: '1,234', trend: '+12%' }, { label: 'Revenue', value: '$45K', trend: '+8%' }, { label: 'Orders', value: '892', trend: '+5%' }].map(stat => (
      <div key={stat.label} className="p-4 bg-zinc-800 rounded-lg text-center">
        <p className="text-zinc-400 text-sm">{stat.label}</p>
        <p className="text-2xl font-bold text-white">{stat.value}</p>
        <p className="text-green-400 text-sm">{stat.trend}</p>
      </div>
    ))}
  </div>
);

const EmptyStatePreview: FC = () => (
  <div className="p-8 bg-zinc-800 rounded-lg text-center">
    <div className="text-4xl mb-4">📭</div>
    <h3 className="text-lg font-medium text-white mb-2">No data found</h3>
    <p className="text-zinc-400 mb-4">Try adjusting your filters</p>
    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">Clear Filters</button>
  </div>
);

const ImagePreview: FC = () => (
  <div className="flex justify-center">
    <div className="w-48 h-32 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-500">Image Placeholder</div>
  </div>
);

const PopoverPreview: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center relative">
      <button onClick={() => setOpen(!open)} className="px-4 py-2 bg-pink-500 text-white rounded-lg">Open Popover</button>
      {open && (
        <>
          <div className="fixed inset-0" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-2 p-4 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-10 min-w-[200px]">
            <h4 className="font-medium text-white mb-2">Popover Title</h4>
            <p className="text-zinc-400 text-sm">Content goes here</p>
          </div>
        </>
      )}
    </div>
  );
};

const AppBarPreview: FC = () => (
  <div className="w-full bg-pink-600 text-white px-4 py-3 flex items-center justify-between rounded-lg">
    <span className="font-semibold">My App</span>
    <nav className="flex gap-4 text-sm">
      <a href="#" className="hover:opacity-80">Home</a>
      <a href="#" className="hover:opacity-80">About</a>
    </nav>
  </div>
);

const BottomNavigationPreview: FC = () => {
  const [active, setActive] = useState(0);
  const items = [{ icon: '🏠', label: 'Home' }, { icon: '🔍', label: 'Search' }, { icon: '❤️', label: 'Favorites' }, { icon: '👤', label: 'Profile' }];
  return (
    <div className="max-w-xs mx-auto bg-zinc-800 rounded-2xl overflow-hidden">
      <div className="h-24 bg-zinc-700 flex items-center justify-center text-zinc-500">Content</div>
      <div className="flex justify-around py-3 border-t border-zinc-700">
        {items.map((item, i) => (
          <button key={i} onClick={() => setActive(i)} className={`flex flex-col items-center gap-1 ${active === i ? 'text-pink-400' : 'text-zinc-400'}`}>
            <span>{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ScrollAreaPreview: FC = () => (
  <div className="max-w-xs mx-auto h-32 overflow-y-auto border border-zinc-700 rounded-lg p-2">
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="py-2 border-b border-zinc-800 text-zinc-300">Item {i + 1}</div>
    ))}
  </div>
);

const CollapsiblePreview: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="max-w-sm mx-auto">
      <button onClick={() => setOpen(!open)} className="w-full px-4 py-3 bg-zinc-700 rounded-lg text-left flex items-center justify-between">
        <span>Toggle Content</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="p-4 bg-zinc-800 rounded-b-lg border-t-0 border border-zinc-700">
          <p className="text-zinc-400">Collapsible content here</p>
        </div>
      )}
    </div>
  );
};

const KbdPreview: FC = () => (
  <div className="flex items-center justify-center gap-2">
    <kbd className="px-2 py-1 bg-zinc-700 border border-zinc-600 rounded text-sm">⌘</kbd>
    <span className="text-zinc-400">+</span>
    <kbd className="px-2 py-1 bg-zinc-700 border border-zinc-600 rounded text-sm">K</kbd>
    <span className="text-zinc-500 ml-2">to search</span>
  </div>
);

const CopyButtonPreview: FC = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center justify-center gap-2 p-4 bg-zinc-800 rounded-lg">
      <code className="text-zinc-300 text-sm">npm install @forgedevstack/bear</code>
      <button onClick={handleCopy} className={`p-2 rounded ${copied ? 'text-green-400' : 'text-zinc-400 hover:text-white'}`}>
        {copied ? '✓' : '📋'}
      </button>
    </div>
  );
};

const BreadcrumbsPreview: FC = () => (
  <div className="flex items-center gap-2 text-sm">
    <a href="#" className="text-pink-400 hover:underline">Home</a>
    <span className="text-zinc-500">/</span>
    <a href="#" className="text-pink-400 hover:underline">Products</a>
    <span className="text-zinc-500">/</span>
    <span className="text-zinc-400">Current</span>
  </div>
);

const StepperPreview: FC = () => {
  const steps = ['Account', 'Details', 'Complete'];
  const active = 1;
  return (
    <div className="flex items-center justify-center gap-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
            i < active ? 'bg-pink-500 text-white' : i === active ? 'border-2 border-pink-500 text-pink-500' : 'bg-zinc-700 text-zinc-400'
          }`}>
            {i < active ? '✓' : i + 1}
          </div>
          <span className={i <= active ? 'text-white' : 'text-zinc-500'}>{step}</span>
          {i < steps.length - 1 && <div className={`w-12 h-0.5 ${i < active ? 'bg-pink-500' : 'bg-zinc-700'}`} />}
        </div>
      ))}
    </div>
  );
};

// Map of section previews
const SECTION_PREVIEWS: Record<string, FC> = {
  // Existing
  'button:variants': ButtonVariantsPreview,
  'button:sizes': ButtonSizesPreview,
  'button:loading': ButtonLoadingPreview,
  'modal:basic': ModalPreview,
  'drawer:basic': DrawerPreview,
  'tooltip:basic': TooltipPreview,
  'input:basic': InputPreview,
  'select:basic': SelectPreview,
  'switch:basic': SwitchPreview,
  'badge:basic': BadgePreview,
  'spinner:basic': SpinnerPreview,
  'card:basic': CardPreview,
  'grid:basic': GridPreview,
  'flex:basic': FlexPreview,
  'container:basic': ContainerPreview,
  'multiselect:basic': MultiSelectPreview,
  'autocomplete:basic': AutocompletePreview,
  'datatable:basic': DataTablePreview,
  'carousel:basic': CarouselPreview,
  'accordion:basic': AccordionPreview,
  'tabs:basic': TabsPreview,
  'avatar:basic': AvatarPreview,
  'progress:basic': ProgressPreview,
  // New components
  'rating:basic': RatingPreview,
  'rating:sizes': RatingSizesPreview,
  'radio:basic': RadioPreview,
  'radio:variants': RadioVariantsPreview,
  'checkbox:basic': CheckboxPreview,
  'button-group:basic': ButtonGroupPreview,
  'button-group:variants': ButtonGroupVariantsPreview,
  'fab:basic': FabPreview,
  'transfer-list:basic': TransferListPreview,
  'divider:basic': DividerPreview,
  'typography:variants': TypographyPreview,
  'typography:colors': TypographyColorsPreview,
  'list:basic': ListPreview,
  'list:with-icons': ListWithIconsPreview,
  'alert:severities': AlertPreview,
  'alert:with-title': AlertWithTitlePreview,
  'paper:basic': PaperPreview,
  'link:basic': LinkPreview,
  'menu:basic': MenuPreview,
  'dropdown:basic': DropdownPreview,
  'speed-dial:basic': SpeedDialPreview,
  'toast:basic': ToastPreview,
  'skeleton:basic': SkeletonPreview,
  'pagination:basic': PaginationPreview,
  'slider:basic': SliderPreview,
  'slider:range': SliderRangePreview,
  'bear-loader:basic': BearLoaderPreview,
  // New component previews
  'date-picker:basic': DatePickerPreview,
  'time-picker:basic': TimePickerPreview,
  'color-picker:basic': ColorPickerPreview,
  'file-upload:basic': FileUploadPreview,
  'number-input:basic': NumberInputPreview,
  'otp-input:basic': OTPInputPreview,
  'chip:basic': ChipPreview,
  'tree-view:basic': TreeViewPreview,
  'timeline:basic': TimelinePreview,
  'statistic:basic': StatisticPreview,
  'empty-state:basic': EmptyStatePreview,
  'image:basic': ImagePreview,
  'popover:basic': PopoverPreview,
  'app-bar:basic': AppBarPreview,
  'bottom-navigation:basic': BottomNavigationPreview,
  'scroll-area:basic': ScrollAreaPreview,
  'collapsible:basic': CollapsiblePreview,
  'kbd:basic': KbdPreview,
  'copy-button:basic': CopyButtonPreview,
  'breadcrumbs:basic': BreadcrumbsPreview,
  'stepper:basic': StepperPreview,
};

/**
 * BearDocContent - Renders Bear documentation pages
 */
export const BearDocContent: FC<BearDocContentProps> = ({ page }) => {
  const doc = BEAR_DOCS[page];

  if (!doc) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-theme-primary mb-2">Page Not Found</h2>
        <p className="text-theme-secondary">The requested documentation page doesn't exist.</p>
      </div>
    );
  }

  // Get preview for section
  const getPreview = (sectionId: string) => {
    const key = `${page}:${sectionId}`;
    const PreviewComponent = SECTION_PREVIEWS[key];
    if (PreviewComponent) {
      return <PreviewComponent />;
    }
    return null;
  };

  return (
    <article className="max-w-none">
      <header className="mb-8 pb-8 border-b border-theme-border">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-theme-primary">
            {doc.title}
          </h1>
          {doc.linesOfCode && <LinesOfCode lines={doc.linesOfCode} />}
        </div>
        <p className="text-lg text-theme-secondary">{doc.description}</p>
      </header>

      <div className="space-y-10">
        {doc.sections.map((section) => {
          const preview = section.livePreview ? getPreview(section.id) : null;
          
          return (
            <section key={section.id} id={section.id}>
              <h2 className="text-xl font-semibold text-theme-primary mb-3">
                {section.title}
              </h2>

              {section.content && (
                <div className="text-theme-secondary whitespace-pre-line mb-4">
                  {section.content}
                </div>
              )}

              {section.code && (
                section.livePreview && preview ? (
                  <LivePreview
                    code={section.code}
                    accentColor={BEAR_COLOR}
                    background="dark"
                  >
                    {preview}
                  </LivePreview>
                ) : (
                  <CodeBlock 
                    code={section.code} 
                    language="tsx"
                    filename={section.filename}
                  />
                )
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
};
