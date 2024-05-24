const agecounter = (age1, age2) => {
    let agee1 = Array.from(age1)
    let agee2 = Array.from(age2)

    let umar1 = agee1.join("").split("-")
    let umar2 = agee2.join("").split("-")

    if (umar1[1] < 13 && umar2[1] < 13 && umar1[2] < 32 && umar2[2] < 32) {
        let year = umar1[0] - umar2[0] > 0 ? umar1[0] - umar2[0] : umar2[0] - umar1[0]
        let month = umar1[1] - umar2[1] > 0 ? umar1[1] - umar2[1] : umar2[1] - umar1[1]
        let date = umar1[2] - umar2[2] > 0 ? umar1[2] - umar2[2] : umar2[2] - umar1[2]
        return `${year} Years ${month} Months ${date} Days`
    }
    else if (umar1[1] > 13 || umar2[1] > 13) {
        return "check your Month , Your Month should be between 1 and 12 !"
    }
    else if (umar1[2] > 31 || umar2[2] > 31) {
        return "check your Date , Your Date should be between 1 and 31 !"
    }
    else {
        return 'This is not valid please enter correct birthdate in this type yyyy-mm-dd'
    }
}

// Write a Date like this
console.log(agecounter("2003-05-21", "2002-11-21"));