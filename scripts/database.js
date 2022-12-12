
const database = {
     fishes: [
        {
            image: "https://mystickermania.com/cdn/stickers/simpsons-stickers/sticker_5006-512x512.png",
            name: "Bart",
            species: "Simpson's Fish",
            length: 3,
            location: "Spring Ocean",
            food: "crustaceans"
        },
        
        {
            image: "https://static.wikia.nocookie.net/animals/images/6/62/1_RAY_461.jpg",
            name: "Ray",
            species:"Ornate Sleeper Ray",
            length: 10,
            location:"South Africa", 
            food: "lobster"
        },
   
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Cyprinodon_diabolis%2C_males.jpg",
            name: "Lou",
            species:"Devil's Hole Pupfish",
            length: 1.2,
            location:"Nevada",
            food: "goldfish"
        },

        {
            image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Paddlefish-USFWS-Fish-and-Aquatic-Conservation-2160x1440.jpg",
            name: "Paddy",
            species: "American Paddlefish",
            length: 57,
            location: "Montana",
            food: "puffer fish"
        },

        {
            image: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS--jFTm2rFLDBquyYF1Dcpbp87KP4ZuFpp5RbXXtntYBEn_1zGOST6M-9CR6kqdSsaZp5lIVEyqfGPICc",
            name: "Pep",
            species:"Peppermint Angelfish",
            length: 2.8,
            location: "Cook Island",
            food: "candy"
        },

        {
            image: "https://fishingbooker.com/blog/media/Bluefin-Tuna-e1551478845735-1200x675.jpg",
            name: "Blueface",
            species:"Bluefin Tuna",
            length: 59,
            location: "California" ,
            food: "iguanas"
        },
    
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/CSIRO_ScienceImage_2535_The_Red_Handfish.jpg",
            name: "Ol Red",
            species:"Red Handfish",
            length: 13.2,
            location: "Tasmania",
            food: "stuff"
        }
    
    ]
}

//check to see if data base worked
console.log(database)
/*
 const getFish = () => {
    return database.fishes.map(fish => ({...fish}))
}
*/
export const getFish = () => {
    return database.fishes.map(fish => ({...fish}))
}

//console.log(getFish())

//module.exports = { getFish }