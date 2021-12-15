
export function isEmpty(obj: any | undefined): boolean
{
  return !obj || Object.keys(obj).length === 0;
}

export function reduceEmptiness(obj: any | undefined): any | undefined
{
  return isEmpty(obj) ? undefined : obj;
}

export function callSafe(func: (obj: any, args: Array<any>)=> any, obj: any, def: any, ...args: Array<any>): boolean
{
  return (obj && func(obj, args)) ?? def;
}

export function filter(obj: any, func: (value: string, index: number, array: string[])=> unknown): any
{
  return !obj ? obj : Object.keys(obj)
    .filter(func)
    .reduce((mapper, key) =>
    {
      mapper[key] = obj[key];

      return mapper;
    }, {});
}
