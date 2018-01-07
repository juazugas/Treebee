
const ns = 'Treebee::';

const nsAction = (action) => {
  return `${ns}${action}`;
};

// Editing queries.
export const UPDATE_QUERY = nsAction('update-query');
export const UPDATE_PROCESS = nsAction('update-process');

// Performing queries.
export const QUERY_ELASTIC = nsAction('query-elastic');
export const QUERY_PROCESS = nsAction('query-process');
export const QUERY_ERROR = nsAction('query-error');

// Server memoization
export const SERVER_ADD = nsAction('server-change');
