export function logGreen(msg: string) {
    console.log(`\x1b[32m${msg}\x1b[0m`)
}

export function logRed(msg: string) {
    console.log(`\x1b[31m${msg}\x1b[0m`)
}

export function logJSONWhite(Data: any) {
    console.log(JSON.stringify(Data, null, 2))
}
