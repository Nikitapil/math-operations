export const equationsSolver = (a: number, b: number, c: number) => {
    const discriminant = (b**2) - (4*a*c)

    if (discriminant < 0 || a === 0) {
        return 'No roots'
    }

    if (discriminant === 0) {
        const root = -b/(2*a)
        return `Single root: ${root}`
    }

    const root1 = (-b-(Math.sqrt(discriminant)))/(2*a)
    const root2 = (-b+(Math.sqrt(discriminant)))/(2*a)

    return `Roots: ${root1}, ${root2}`
}
