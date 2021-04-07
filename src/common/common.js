import { useHistory, useLocation } from 'react-router-dom';

const useParam = () => {
  const query = new URLSearchParams(useLocation().search);
  let params = {};
  query.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

export { useParam };
