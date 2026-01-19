// Code tokenizer utility for syntax highlighting

import { KEYWORDS } from '@constants/code.const';

export interface Token {
  type: 'keyword' | 'string' | 'comment' | 'number' | 'function' | 'property' | 'operator' | 'punctuation' | 'text';
  value: string;
}

export function tokenize(code: string): Token[][] {
  const lines = code.split('\n');
  
  return lines.map(line => {
    const tokens: Token[] = [];
    let remaining = line;
    
    while (remaining.length > 0) {
      // Comments
      if (remaining.startsWith('//')) {
        tokens.push({ type: 'comment', value: remaining });
        break;
      }
      
      // Strings (single, double, backtick)
      const stringMatch = remaining.match(/^(['"`])((?:\\.|(?!\1)[^\\])*?)\1/);
      if (stringMatch) {
        tokens.push({ type: 'string', value: stringMatch[0] });
        remaining = remaining.slice(stringMatch[0].length);
        continue;
      }
      
      // Numbers
      const numberMatch = remaining.match(/^\b\d+(\.\d+)?\b/);
      if (numberMatch) {
        tokens.push({ type: 'number', value: numberMatch[0] });
        remaining = remaining.slice(numberMatch[0].length);
        continue;
      }
      
      // Function calls (word followed by parenthesis)
      const funcMatch = remaining.match(/^(\w+)(\s*)\(/);
      if (funcMatch) {
        const word = funcMatch[1];
        if (KEYWORDS.includes(word as typeof KEYWORDS[number])) {
          tokens.push({ type: 'keyword', value: word });
        } else {
          tokens.push({ type: 'function', value: word });
        }
        tokens.push({ type: 'text', value: funcMatch[2] });
        tokens.push({ type: 'punctuation', value: '(' });
        remaining = remaining.slice(funcMatch[0].length);
        continue;
      }
      
      // Property access (. followed by word)
      const propMatch = remaining.match(/^\.(\w+)/);
      if (propMatch) {
        tokens.push({ type: 'punctuation', value: '.' });
        tokens.push({ type: 'property', value: propMatch[1] });
        remaining = remaining.slice(propMatch[0].length);
        continue;
      }
      
      // Object property (word followed by colon)
      const objPropMatch = remaining.match(/^(\w+)(\s*):/);
      if (objPropMatch) {
        tokens.push({ type: 'property', value: objPropMatch[1] });
        tokens.push({ type: 'text', value: objPropMatch[2] });
        tokens.push({ type: 'punctuation', value: ':' });
        remaining = remaining.slice(objPropMatch[0].length);
        continue;
      }
      
      // Keywords and identifiers
      const wordMatch = remaining.match(/^\w+/);
      if (wordMatch) {
        const word = wordMatch[0];
        if (KEYWORDS.includes(word as typeof KEYWORDS[number])) {
          tokens.push({ type: 'keyword', value: word });
        } else {
          tokens.push({ type: 'text', value: word });
        }
        remaining = remaining.slice(word.length);
        continue;
      }
      
      // Operators
      const opMatch = remaining.match(/^(=>|===|!==|==|!=|<=|>=|&&|\|\||[+\-*/%<>=!&|^~?])/);
      if (opMatch) {
        tokens.push({ type: 'operator', value: opMatch[0] });
        remaining = remaining.slice(opMatch[0].length);
        continue;
      }
      
      // Punctuation
      const punctMatch = remaining.match(/^[{}[\]();,]/);
      if (punctMatch) {
        tokens.push({ type: 'punctuation', value: punctMatch[0] });
        remaining = remaining.slice(1);
        continue;
      }
      
      // Whitespace and other characters
      tokens.push({ type: 'text', value: remaining[0] });
      remaining = remaining.slice(1);
    }
    
    return tokens;
  });
}

