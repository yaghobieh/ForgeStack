// Code syntax highlighting constants

export const TOKEN_COLORS: Record<string, string> = {
  keyword: 'text-purple-400',
  string: 'text-green-400',
  comment: 'text-gray-500',
  number: 'text-orange-400',
  function: 'text-blue-400',
  property: 'text-red-400',
  operator: 'text-pink-400',
  punctuation: 'text-gray-400',
  text: 'text-gray-300',
};

export const KEYWORDS = [
  'import', 'export', 'from', 'const', 'let', 'var', 'function', 'async', 'await',
  'return', 'if', 'else', 'new', 'true', 'false', 'null', 'undefined', 'type',
  'interface', 'class', 'extends', 'implements', 'default', 'throw', 'try', 'catch',
  'finally', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'typeof',
  'instanceof', 'in', 'of', 'this', 'super', 'static', 'public', 'private', 'protected',
] as const;

// Copy button timing
export const COPY_FEEDBACK_DURATION = 2000;

