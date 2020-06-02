const apiKey = 'UclNeIxzXh06nCAo_0o_e1cR7rIG02Lj9nkTlzEGie_6JCVI3YF3gUNHuBBNBesvewsulhB8Ogq1Gq2gL2R5Inzm8pAG0ND2l2c3MuKtqy4r99YHnDarHSFc55fWXnYx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
        return response.json()
      }).then((jsonResponse) => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map(((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          }));
        }
    });
  }
};

export default Yelp;