export const useCurrencyFormat = (amount, currency) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
      })
    return formatter.format(amount)
    }

export const translateCondition = (condition) => 
    condition === 'new' ? 'Nuevo' : condition === 'used' ? 'Usado' : 'Reacondicionado'