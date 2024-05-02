type APYCountryFlag = {
  png?: string;
  svg?: string;
};

type APICountryName = {
  common: string;
  official: string;
};

export type APICountry = {
  name: APICountryName;
  flags: APYCountryFlag;
};

export type Country = {
  name: string;
  officialName?: string;
  flag: string;
};

export function parseCountry(apiContry: APICountry): Country {
  return {
    name: apiContry.name.common,
    officialName: apiContry.name.official,
    // TODO: handle default flag
    flag: apiContry.flags.svg ?? apiContry.flags.png ?? "",
  };
}
