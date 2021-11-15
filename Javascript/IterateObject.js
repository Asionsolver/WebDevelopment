var obj = {
        x: 40,
        y: 54,
        z: 34
    }
    // console.log('x' in obj1)
    // console.log('u' in obj1)

for (var i in obj) {
    console.log(i)
    console.log(i + ':' + obj[i])
}