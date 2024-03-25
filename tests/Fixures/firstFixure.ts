import {test as bastTets } from "@playwright/test"
type myfix= {
    firstvar: string
}

const fixture= bastTets.extend<myfix>({
    firstvar:"I am Sakib",
})