function getAllUsers(){
    try {
        const response =fetch('https://gist.github.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0.js')
        console.log(response)
        const data = response.json()
        console.log(data)
    } catch (error) {
        console.log(`E:${error}`)
    }
}

getAllUsers()
