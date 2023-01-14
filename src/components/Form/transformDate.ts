export const transformDate = (val: string): string => {
        const newVal = val.split('')
            .reverse()
            .join('')
            .replace(/\B(?=(\d{4})+(?!\d))/g, " ")
            .split('')
            .reverse()
            .join('')
            .trim()

        return newVal
    }




