import * as countryList from '@src/assets/countries.json';
import { Icon, Item } from '@app/models/frontend';

type CountrySource = {
  name: string;
  code: string;
};

export function getMappedCountryList(): Item[] {
  return ((countryList as any).default as CountrySource[]).map((c) => ({
    id: c.code,
    name: c.name,
    icon: parseIconFromCountry(c),
  }));
}

function parseIconFromCountry(country: CountrySource): Icon {
  return {
    cssClass: `fflag fflag-${country.code.toUpperCase()}`,
  };
}
