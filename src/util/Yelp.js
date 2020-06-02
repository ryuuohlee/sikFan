const apiKey = 'UclNeIxzXh06nCAo_0o_e1cR7rIG02Lj9nkTlzEGie_6JCVI3YF3gUNHuBBNBesvewsulhB8Ogq1Gq2gL2R5Inzm8pAG0ND2l2c3MuKtqy4r99YHnDarHSFc55fWXnYx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
        response.json()
      }).then(jsonResponse => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            id: business.id,
            imageSrc: business.imageSrc,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
          })
        }
    });
  }
};

export default Yelp;