export function formatCurrency(value: number): string {
    return value.toLocaleString('id-ID', { minimumFractionDigits: 0 })
}
