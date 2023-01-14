export enum registerName {
    name = "name",
    number = "number",
    MM = "month",
    YY = "year",
    CVC = "cvc"
}

export const errorMessage = {
    required: "Can't be blank!",
    patternNum: "Wrong format, numbers only!",
    patternStr: "Cardholder name must not contain numbers",
    length: [
        "The field must contain 2 characters!",
        "The field must contain 3 characters!",
        "The field must contain 16 characters!",
        "The field must contain max 22 characters!"
    ]
}

export const cardName = {
    title: "cardholder name",
    type: "text",
    placeholder: "e.g. Jane Appleseed",
}

export const cardNumber = {
    title: "card number",
    type: "tel",
    placeholder: "e.g. 1234 5678 9123 0000",
}

export const cardDate = {
    title: "exp. date (mm/yy)",
    type: "tel",
    placeholder: [
        "MM",
        "YY"
    ]
}

export const cardCvc = {
    title: "cvc",
    type: "tel",
    placeholder: "e.g. 123",
}


