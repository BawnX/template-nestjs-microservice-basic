export function removeUnderscore(str: string): string
{
    return str.replace(/_/g, ' ');
}

export function capitalizeAfterPeriod(str: string): string
{
    if (!str)
        return '';

    return str.replace(/([.!?-]+\s*)([a-z])/g, (_, $1, $2) => $1 + $2.toUpperCase());
}

export function capitalizeEvery(str: string): string
{
    if (!str)
        return '';

    return capitalizeAfterPeriod(str.replace(/\w\S*/g, (txt) =>
    {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }));
}

export function removeDiacritics(str: string): string
{
    if (!str)
        return '';

    return str.toString().normalize('NFD').replace(/[\p{Diacritic}|\u0142|\u0027]/gu, '');
}

export function empathize(str: string): string
{
    if (!str)
        return '';

    return Array.from<string>(str.toUpperCase())
        .reduce((result: string, char: string, index: number): string =>
        {
            result += char;

            if (index !== (str.length - 1))
                result += ' ';

            return result;
        }, '');
}
