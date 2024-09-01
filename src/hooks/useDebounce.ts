import { useEffect, useCallback, DependencyList } from 'react';

type EffectCallback = () => void | (() => void | undefined);

const useDebounce = (effect: EffectCallback, dependencies: DependencyList): void => {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, 2000);

    return () => clearTimeout(timeout);
  }, [callback]);
};

export default useDebounce;
