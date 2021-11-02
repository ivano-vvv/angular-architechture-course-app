export interface DbCollectionItemBase {
  name: string;
}

export function isDbCollection(data: unknown): data is DbCollectionItemBase {
  if (!data) {
    return false;
  }

  const truthyData = data as Dictionary<unknown>;

  if (!truthyData.name || typeof truthyData.name !== 'string') {
    return false;
  }

  return true;
}
