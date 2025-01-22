import { format, parseISO } from 'date-fns'

export function formatDate(isoTimestamp: string): string {
    return format(parseISO(isoTimestamp), 'dd MMM yyyy')
}
