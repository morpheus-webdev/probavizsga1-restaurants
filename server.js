const restaurants = [
    {
      id: "1",
      name: "The Gourmet Spot",
      description: "A fine dining experience with exquisite dishes from around the world.",
      address: "123 Main St, New York, NY",
      rating: 4.8,
      phone: "(123) 456-7890",
      email: "contact@gourmetspot.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/11/27/c9/beerstro14.jpg?w=600&h=-1&s=1",
      url: "https://gourmetspot.com"
    },
    {
      id: "2",
      name: "Urban Bites",
      description: "Trendy and casual, offering a variety of fusion cuisine.",
      address: "456 Elm St, San Francisco, CA",
      rating: 4.5,
      phone: "(987) 654-3210",
      email: "info@urbanbites.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/50/c3/0c/enterieur.jpg?w=600&h=-1&s=1",
      url: "https://urbanbites.com"
    },
    {
      id: "3",
      name: "Cozy Corner Cafe",
      description: "A small and cozy cafe with great coffee and homemade pastries.",
      address: "789 Oak St, Chicago, IL",
      rating: 4.7,
      phone: "(555) 123-4567",
      email: "hello@cozycorner.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/ea/8a/14/baalbek-lebanese-restaurant.jpg?w=600&h=-1&s=1",
      url: "https://cozycorner.com"
    },
    {
      id: "4",
      name: "Sushi Haven",
      description: "Authentic Japanese sushi and sashimi with fresh ingredients.",
      address: "101 Sushi St, Los Angeles, CA",
      rating: 4.9,
      phone: "(222) 333-4444",
      email: "contact@sushihaven.com",
      img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/greenbaywi/GreenBay_HouseAd_ROS_Restaurants_23MAR2022_c3c4259f-68ef-4ddb-b674-837b2fe08c94.jpg",
      url: "https://sushihaven.com"
    },
    {
      id: "5",
      name: "BBQ Bliss",
      description: "The best barbecue in town with slow-cooked meats and rich flavors.",
      address: "202 Grill Ave, Houston, TX",
      rating: 4.6,
      phone: "(888) 777-6666",
      email: "info@bbqbliss.com",
      img: "https://northwoodoffice-assets.imgix.net/goBallantyne/images/heroes/NORTHITALIA156-2.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-debug=&fp-x=0.4993&fp-y=0.7915&fp-z=1&h=1080&ixlib=php-3.1.0&q=80&v=1718293452&w=1920",
      url: "https://bbqbliss.com"
    },
    {
      id: "6",
      name: "Pasta Paradise",
      description: "Delicious Italian pasta dishes made with love and fresh ingredients.",
      address: "303 Pasta Ln, Miami, FL",
      rating: 4.8,
      phone: "(333) 222-1111",
      email: "hello@pastaparadise.com",
      img: "https://www.omnihotels.com/-/media/images/hotels/daldtn/restaurants/texas-spice/daldtn_texasspice_kathytran_img.jpg?h=660&iar=0&w=1170",
      url: "https://pastaparadise.com"
    },
    {
      id: "7",
      name: "Vegan Delights",
      description: "Healthy and tasty vegan dishes made with organic ingredients.",
      address: "404 Green St, Seattle, WA",
      rating: 4.7,
      phone: "(777) 888-9999",
      email: "info@vegandelights.com",
      img: "https://www.omnihotels.com/-/media/images/hotels/daldtn/restaurants/black-ship-katana/daldtn-omni-dallas-black-ship-katana-sushi.jpg",
      url: "https://vegandelights.com"
    },
    {
      id: "8",
      name: "Taco Fiesta",
      description: "Authentic Mexican tacos with fresh and vibrant flavors.",
      address: "505 Fiesta Rd, San Diego, CA",
      rating: 4.9,
      phone: "(666) 555-4444",
      email: "contact@tacofiesta.com",
      img: "https://www.geneve.com/fileadmin/_processed_/7/1/csm_starred_restaurants_2_header_05562c509f.webp",
      url: "https://tacofiesta.com"
    },
    {
      id: "9",
      name: "Burger Barn",
      description: "Juicy burgers with a variety of delicious toppings.",
      address: "606 Burger St, Dallas, TX",
      rating: 4.5,
      phone: "(111) 222-3333",
      email: "hello@burgerbarn.com",
      img: "https://www.foxrc.com/wp-content/uploads/2024/09/restaurants-concept-cdo-00.jpg",
      url: "https://burgerbarn.com"
    },
    {
      id: "10",
      name: "Dim Sum Delight",
      description: "Traditional Chinese dim sum with a modern twist.",
      address: "707 Dim Sum Ave, San Francisco, CA",
      rating: 4.8,
      phone: "(444) 555-6666",
      email: "info@dimsumdelight.com",
      img: "https://budapestbylocals.b-cdn.net/wp-content/uploads/2014/03/terraced_restaurants_budapest.jpg",
      url: "https://dimsumdelight.com"
    },
    {
      id: "11",
      name: "Steakhouse Supreme",
      description: "Premium quality steaks grilled to perfection.",
      address: "808 Steak Rd, Denver, CO",
      rating: 4.9,
      phone: "(999) 888-7777",
      email: "contact@steakhousesupreme.com",
      img: "https://www.visitphilly.com/wp-content/uploads/2023/06/Zahav-Dining-Room-Wide-by-D.Knoll-for-vp-2200x1237px.jpg",
      url: "https://steakhousesupreme.com"
    },
    {
      id: "12",
      name: "Seafood Shack",
      description: "Fresh seafood dishes served with a seaside view.",
      address: "909 Ocean Dr, Miami, FL",
      rating: 4.7,
      phone: "(222) 111-0000",
      email: "hello@seafoodshack.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHw0h041zYwsKaE6HQm4Dg5zxlvEsvPWDQw&s",
      url: "https://seafoodshack.com"
    }
    
  ];
  
/* console.log(restaurants); */
  
import express, { json } from 'express'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(json());

app.get('/api/restaurants', async (req, res) => {
    res.status(200).send(restaurants);
})
app.post('/api/restaurants', async (req, res) => {
    try {
        const newRestaurant = req.body;
        restaurants.push({
          id: (restaurants.length+1).toString(),
          name: newRestaurant.name,
          description: newRestaurant.description,
          address: newRestaurant.address,
          rating: Math.round(newRestaurant.rating * 10) / 10,
          phone: newRestaurant.phone,
          email: newRestaurant.email,
          img: newRestaurant.img,
          url: newRestaurant.url
      });
        res.status(201).send({success: true, message: "Restaurant successfully added"})
    }
    catch(e){
        console.error(e);
        res.status(500).send({success: false, message: "Internal Server Error"})
    }
})

app.listen(3001, () => {
    console.log("Server is waiting requests on port 3001...")
})