import { format, parseISO } from 'date-fns'
import { id as indonesianLocale } from 'date-fns/locale'

export function formatDate(isoTimestamp: string): string {
    return format(parseISO(isoTimestamp), 'dd MMM yyyy', {
        locale: indonesianLocale,
    })
}

export function formatFullDate(isoTimestamp: string): string {
    return format(parseISO(isoTimestamp), 'dd MMMM yyyy', {
        locale: indonesianLocale,
    })
}
