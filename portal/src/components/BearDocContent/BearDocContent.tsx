import { FC, useState } from 'react';
import { BEAR_DOCS, BEAR_COLOR } from '../../constants/bear-docs.const';
import { CodeBlock } from '../CodeBlock';
import { LivePreview } from '../LivePreview';

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

// Map of section previews
const SECTION_PREVIEWS: Record<string, FC> = {
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
      {/* Header */}
      <header className="mb-8 pb-8 border-b border-theme-border">
        <h1 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-3">
          {doc.title}
        </h1>
        <p className="text-lg text-theme-secondary">{doc.description}</p>
      </header>

      {/* Sections */}
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
