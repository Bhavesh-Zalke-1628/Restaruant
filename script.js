function getAllData(){
    try {
        const response =fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
        console.log(response)
        const data = response.json()
        console.log(data)
    } catch (error) {
        console.log(`E:${error}`)
    }
}

getAllData()
