export const removeUnnecessarySymbols = (str: string): string => {
  const unnecessarySymbols: string[] = [
    '<p>',
    '</p>',
    '&lt;p&gt;',
    '&lt;/p&gt;',
    '&amp;',
    '$',
    '<li>',
    '</li>',
    '&nbsp;',
    '<br/>',
    '<br>',
    '<ul>',
    '</ul>',
  ];

  let copyString: string = str;

  unnecessarySymbols.forEach(item => {
    copyString = copyString.replace(item, '');
  });

  return copyString.replace(/\s+/g, ' ').trim();
};

export const getTruncatedString = (originString: string, maxlength: number) => {
  if (originString.length > maxlength) {
    return `${originString.substring(0, maxlength)}...`;
  }

  return originString;
};
