// Real code examples pulled from each library's README — do not invent APIs

export interface LibraryCodeExample {
  id: string;
  label: string;
  icon: string;
  accentColor: string;
  filename: string;
  code: string;
}

export const CODE_EXAMPLES_TITLE = 'Real code, real APIs';
export const CODE_EXAMPLES_SUBTITLE =
  'Straight from the READMEs — this is what building with ForgeStack looks like.';

export const LIBRARY_CODE_EXAMPLES: LibraryCodeExample[] = [
  {
    id: 'harbor',
    label: 'Harbor',
    icon: '⚓',
    accentColor: '#3b82f6',
    filename: 'server.ts',
    code: `import { createServer, router, route } from '@forgestack/harbor';

const server = createServer({ port: 3000 });

const users = router('/api/users', [
  route.get('/', async () => ({ users: [] })),
  route.post('/', async (req) => ({ id: '123', ...req.body })),
  route.delete('/:id', async (req) => ({ deleted: req.params.id })),
]);

server.use(users);
server.listen(3000, () => console.log('Server running!'));`,
  },
  {
    id: 'bear',
    label: 'Bear',
    icon: '🐻',
    accentColor: '#d946ef',
    filename: 'App.tsx',
    code: `import { Button, Card, CardHeader, CardBody } from '@forgedevstack/bear';
import '@forgedevstack/bear/styles.css';

function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome to Bear</h2>
      </CardHeader>
      <CardBody>
        <Button variant="primary">Get Started</Button>
      </CardBody>
    </Card>
  );
}`,
  },
  {
    id: 'rail',
    label: 'Rail',
    icon: '🚃',
    accentColor: '#6366f1',
    filename: 'Carousel.tsx',
    code: `import { Rail, RailSlide, Navigation, Pagination } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';

function App() {
  return (
    <Rail
      slidesPerView={1}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
    </Rail>
  );
}`,
  },
  {
    id: 'lingo',
    label: 'Lingo',
    icon: '🌐',
    accentColor: '#14b8a6',
    filename: 'i18n.tsx',
    code: `import { createLingo, LingoProvider, useLingo } from '@forgedevstack/lingo';

const lingo = createLingo({
  defaultLocale: 'en',
  fallbackLocale: 'en',
  locales: ['en', 'es', 'fr', 'ar'],
  source: {
    type: 'local',
    translations: {
      en: {
        greeting: 'Hello, {{name}}!',
        items: { one: '{{count}} item', other: '{{count}} items' },
      },
    },
  },
});

function MyPage() {
  const { t, setLocale } = useLingo();

  return (
    <div>
      <h1>{t('greeting', { name: 'John' })}</h1>
      <p>{t('items', { count: 5 })}</p>
      <button onClick={() => setLocale('es')}>Español</button>
    </div>
  );
}`,
  },
];
