const FORMAT_PRICE = new Intl.NumberFormat(undefined,{
    currency:"USD" , style: "currency"
})

export function FormatPrice(number : number){
    return FORMAT_PRICE.format(number)
}