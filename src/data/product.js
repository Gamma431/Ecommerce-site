const products = [
    {
        id:1,
        name:"Mechanic Keyboard",
        price: 23.30,
        image: "https://images.unsplash.com/photo-1697022976768-2fd7f4e4c399?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Anodized Gray WK keyboard with GMK Modo 2 Keycups"
    },
    {
        id:2,
        name:"Wierless Mouse",
        price: 15.90,
        image:"https://images.unsplash.com/photo-1658070429465-848c0796abf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Superlight wierless & wiered mode / Bluetooth "
    },
    {
        id:3,
        name:"Wierless Headphone",
        price: 9.70,
        image:"https://images.unsplash.com/photo-1698296725423-9ede5de2d624?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Premium Wierless Headphones with noise cancellation"
    },
    {
        id:4,
        name:"Wiered Headphone",
        price: 4.90,
        image:"https://images.unsplash.com/photo-1583343894790-5cff219de28a?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Light and friendly-usable wiered headphone "
    },
    {
        id:5,
        name:"Thin notebook",
        price: 199.70,
        image:"https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "ThinkPad wiht new gen complectation superlight notebook"
    },
    {
        id:6,
        name:"Tablet Fold",
        price: 156.90,
        image:"https://images.unsplash.com/photo-1756487564693-5d5f4c196fd5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Foldable tablet with nwe gen complectation and keyboard"
    },
    {
        id:7,
        name:"Thin Monitor",
        price: 64.90,
        image:"https://images.unsplash.com/photo-1666771410003-8437c4781d49?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Thin and wide monitor with 15 degree angle OLED "
    },
    {
        id:8,
        name:"Smart watch",
        price: 75.70,
        image:"https://images.unsplash.com/photo-1658993376064-dd47b2da0e97?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Smartwatch with featured options like fitness-tracking and other"
    },
]

export function getProducts(){
    return products
}