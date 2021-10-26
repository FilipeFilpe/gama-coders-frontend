export const convertCurrent = (f: any) => {
    return f.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export const dateFormatter = (isoDate: string) => {
    const [dateString, hourString] = isoDate.split('T')
    const [year, month, day] = dateString.split('-')
    const formattedDate = `${day}/${month}/${year}`
    const [formattedHour] = hourString.split('.');

    return `${formattedDate} ${formattedHour}`;
}