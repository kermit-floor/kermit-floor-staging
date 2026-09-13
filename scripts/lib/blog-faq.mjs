// Explicit FAQ fences keep answer boundaries independent of translated heading text.
export function configureFaqRenderer(markdown) {
  const defaultFence = markdown.renderer.rules.fence;

  markdown.renderer.rules.fence = (tokens, index, options, env, renderer) => {
    const fence = tokens[index];
    if (fence.info.trim() !== 'faq') {
      return defaultFence(tokens, index, options, env, renderer);
    }
    if (fence.level !== 0 || env.faqItems) {
      throw new Error('Use one top-level faq fence per article.');
    }
    const closingLine = env.source.split('\n')[fence.map[1] - 1].trim();
    if (!new RegExp(`^${fence.markup[0]}{${fence.markup.length},}$`).test(closingLine)) {
      throw new Error('Close the faq fence before any following article content.');
    }

    const faqTokens = markdown.parse(fence.content, env);
    if (faqTokens[0]?.type !== 'heading_open' || faqTokens[0].tag !== 'h2') {
      throw new Error('Start the faq fence with an H2 section heading.');
    }
    const questions = [];
    for (let i = 3; i < faqTokens.length; i += 1) {
      const token = faqTokens[i];
      if (token.type === 'fence' && token.info.trim() === 'faq') {
        throw new Error('FAQ fences cannot be nested.');
      }
      if (token.type === 'heading_open' && ['h1', 'h2', 'h3'].includes(token.tag)) {
        if (token.tag !== 'h3' || token.level !== 0) {
          throw new Error('Use top-level H3 question headings inside the FAQ section.');
        }
        questions.push(i);
      }
    }
    if (questions[0] !== 3) {
      throw new Error('Place an H3 question immediately after the FAQ section heading.');
    }

    const names = new Set();
    env.faqItems = questions.map((start, questionIndex) => {
      const inline = faqTokens[start + 1];
      const question = (inline.children ?? [])
        .map((token) => {
          if (['text', 'code_inline'].includes(token.type)) return token.content;
          if (['softbreak', 'hardbreak'].includes(token.type)) return ' ';
          return '';
        })
        .join('')
        .trim();
      const answerTokens = faqTokens.slice(start + 3, questions[questionIndex + 1] ?? faqTokens.length);
      if (!question || !answerTokens.some((token) => token.type === 'inline' && token.content.trim())) {
        throw new Error('Every FAQ question needs a non-empty question and a complete text answer.');
      }
      if (names.has(question)) {
        throw new Error(`Duplicate FAQ question: ${question}`);
      }
      names.add(question);
      return {
        question,
        answer: renderer.render(answerTokens, options, env).trim(),
      };
    });

    return renderer.render(faqTokens, options, env);
  };
}
