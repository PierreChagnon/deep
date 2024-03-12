export default function calcDeepScore(formValues) {

    const discoveringSum = formValues.discovering_1 + formValues.discovering_2 + formValues.discovering_3 + formValues.discovering_4 + formValues.discovering_5
    const expandingSum = formValues.expanding_1 + formValues.expanding_2 + formValues.expanding_3 + formValues.expanding_4 + formValues.expanding_5
    const experimentingSum = formValues.experimenting_1 + formValues.experimenting_2 + formValues.experimenting_3 + formValues.experimenting_4 + formValues.experimenting_5
    const performingSum = formValues.performing_1 + formValues.performing_2 + formValues.performing_3 + formValues.performing_4 + formValues.performing_5

    const discoveringMean = discoveringSum / 5
    const expandingMean = expandingSum / 5
    const experimentingMean = experimentingSum / 5
    const performingMean = performingSum / 5

    const res = [discoveringMean, expandingMean, experimentingMean, performingMean]

    return res
}