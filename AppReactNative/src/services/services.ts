export const removeUnnecessarySymbols = (str: string): string => {
  const unnecessarySymbols: string[] = [
    '<p>',
    '</p>',
    '&lt;p&gt;',
    '&lt;/p&gt;',
    '&amp;',
  ];

  let copyString: string = str;

  unnecessarySymbols.forEach(item => {
    copyString = copyString.replace(item, '');
  });

  return copyString.trim();
};
