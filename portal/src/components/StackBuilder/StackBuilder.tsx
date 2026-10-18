import { FC, FormEvent, useState } from 'react';
import { Markdown } from '../Markdown/Markdown';

const ASK_LIMIT = 5;
const PLACEHOLDER = 'Ask how Bear, Harbor, and Compass fit together';

interface AskSource {
  label: string;
  href: string;
}

interface AskResponse {
  answer?: string;
  error?: string;
  remaining?: number;
  sources?: AskSource[];
}

export const StackBuilder: FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [remaining, setRemaining] = useState(ASK_LIMIT);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [sources, setSources] = useState<AskSource[]>([]);

  const locked = remaining === 0;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (pending || locked || question.trim().length === 0) return;
    setPending(true);
    setError('');
    setAnswer('');
    setSources([]);
    try {
      const response = await fetch('/api/stack-ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim() }),
      });
      const payload = (await response.json()) as AskResponse;
      if (typeof payload.remaining === 'number') setRemaining(payload.remaining);
      if (payload.answer) {
        setAnswer(payload.answer);
        setSources(payload.sources ?? []);
        setQuestion('');
      }
      if (payload.error) setError(payload.error);
    } catch {
      setError('The portal could not reach Stack Builder.');
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="fs-builder" id="stack-builder">
      <form className="fs-builder-inner" onSubmit={onSubmit}>
        <label htmlFor="stack-builder-input">Ask a question about the Forge stack</label>
        <div className={pending ? 'fs-ask-field is-running' : 'fs-ask-field'}>
          <textarea
            id="stack-builder-input"
            value={question}
            placeholder={PLACEHOLDER}
            disabled={locked || pending}
            maxLength={600}
            onChange={(event) => setQuestion(event.target.value)}
          />
          {pending ? (
            <div className="fs-ask-running" aria-live="polite">
              <span className="fs-ask-running-scan" />
              <span className="fs-ask-running-label">
                Searching
                <i />
                <i />
                <i />
              </span>
            </div>
          ) : null}
        </div>
        <div className="row">
          <small>{locked ? '5 questions used for this address' : `${remaining} questions left for this address`}</small>
          <button className="fs-btn green" type="submit" disabled={locked || pending || question.trim().length === 0}>
            {pending ? 'Searching' : 'Ask'}
          </button>
        </div>
        {error ? <p className="fs-ask-error">{error}</p> : null}
        {answer ? (
          <div className="fs-ask-answer">
            <Markdown content={answer} />
            {sources.length > 0 ? (
              <div className="fs-ask-sources">
                {sources.map((source) => (
                  <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </form>
    </section>
  );
};
