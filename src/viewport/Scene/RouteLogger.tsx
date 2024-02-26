import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children?: ReactNode;
};

const RouteLogger = ({ children }: Props) => {
  const { pathname, search, state, hash } = useLocation();

  useEffect(() => {
    console.log(
      `Route: ${pathname}${search}${hash}, State: ${JSON.stringify(state)}`,
    );
  });
  return children;
};

export default RouteLogger;
