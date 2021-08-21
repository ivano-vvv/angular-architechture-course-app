type Dictionary<T> = Record<string, T>;

type primitive = string | number | boolean;

type HTMLElementEvent<E extends HTMLElement> = Event & {
  target: E;
  currentTarget: E;
};
