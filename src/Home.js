import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATERUTExIVFhMQFxIYExEXFxUWExwVFRIYGBUXGBUYHCkgGBolHRMTITEhJSkrMC4uGB8/ODMvNygtLisBCgoKDg0OFRAQGjUlHyYtNzYrNzUtNzE3Nzc3NzI3ODQrMDcxNy0tKy8rKzUtKyw0LDc3Ky03NysuLS4rLS0rLP/AABEIAL0BCwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwYCBAcBBQj/xABEEAACAQIDBAUICAMGBwAAAAAAARECIQMxQQRRYXEGEoGR8AUHIjJCobHREzRysrPB4fEkUoMVIzOCksIUU2JzotPi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EACsRAQACAQEFBQkAAAAAAAAAAAABAhExAxKRofATITKx4RQiQVGSwdHS4v/aAAwDAQACEQMRAD8A7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYY2NTRS6q6qaaVnVU1TSubdkaHSHyjVs+z4mLTT1qqV6FLy6zcKeCz7D82eXfLW1bXiOvacSqtpuKHaijhTRlTGWUmt33d6euss70b27GvX4d68oecXyVhW/4lYj3YVNWIv9VK6vvPhbT54djXqbPj1cavo6F95v3HF9kw8N1JYlVVKbzWSW/Jv3E3lLAwKamsHErxEvba6qfY4aI1h1PF88v8uxrtx/lhhedvHalbFhxxxv8A5OQdUyprqSaVTSeaTaT5rUZHW155Kk4q2KnjGO//AFm7geePZvb2XFX2aqK/j1TivUM8KmmfS60cIn3jI7/sPnQ8lYkJ4teE3/zMOqO2qjrJd5afJ3lPAx6evgY2Hi0/zYddNa7Ydj8u7Vh4K9Sqt2V3ETuukyPZMfEwq1iYddVFdOVdFTpqXarjuR+sQUrzX9JNo2vZ2toviYcRiRHXplqWlabK6zlF1Las1nEpS0WjMAAMtAAAAAAAAAAAAAAAAAAAAAAAAAAAr/Tlv/hHGfXw/icy2zo/gYrl0w37SnfGdN+xpnTenT/g6nurw/iUPZVHJcou1p2u2XM67Pa2pmI04w532NL4mdfnpPFVdp6F1K9FcrSeq57ZT9xo4nRTal7K/wDJfepRf6qZpvNnvpebfizn80bqrJN5Varddxfle0XZrtNnOtOEz98s9ltI8N+MRPlhz/D6JbdVajAdXKvC/Oo+jh9F/LCULZao/o/lXBbNoqr63rurqrSprXd2/KINL6Sqbdbf62sWsl44O5zma/COfo1Wu1jWY4T+yrYvQvynd1bNUuPWwEu5VkD6K7UvWppp51T91Ms+LVU2pqd2/abcS+PP9zWqu+3VPfTx8cy1mkaxz9Emu2nS0fT/AE+NhdGH7eLSt6Sn4tPXcb+y+Rdmolumqt061Q1+S9zNylLdMNe9olSStd55tvV78u5nTtojwViOfn3cmfZ5t47zPLy7+a4+bapvFxNyw1CWV613vIv5QfNv/i4v/bpv/mRfjja02mZnV2rWKxFaxiAAGVAAAAAAAAAAAAAAAAAAAAAAAAAAB8Dpz9Tq+1h/eKBg5cUr7vWW4v8A05+p1/awvxEUXZ6fRbSUw9y1S+DWqKsM4bVt+Tme3gZOmW7qqLRKye5u+S8WRLXTNMdXN2dleErz8+wVpdaJcysuUaZae/UK0Gk9LpOZhu9VP6/oQVUUp3Wl+Uazz+ZsYzq1pWVV76VJqzbjT9bIgxpVVlqlppO7np8wNXFiVzm9nm85W78iCqm6ca8YzW5ePeTVuq2ScPfun4J/sYO9oteXnu7MvDQEeut1TvXcZrPi5zmcn3+Mg1lKyatllGm49ohretLcHut8ALp5tV/eYv2KfvF+KF5tfXxfsU/eL6RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfB6b/U6/tYX4lJRcOmymyvOTXHulZF66b/U6+FWF+JTBR8Cp9XKVHZnr3alWGzQle+qTutYd2/geQob4vJLikrdpjXbXilNKtKb3SZ1w8t7lQ59VPTVzktIyQVoYtCzTq9qFNTtaLc/i4ggxsNupX9p/Fxfs8Mn2nCS1yTzT18fsQ10L38dzW7jl+VwNRpa6TkklaePH3rUidVP3Yz/AFJ1TCt/LnEblquRA6PSe+VOSfq72s7vxcDxVKFrG7lku7d8jNVWXK/bS87Z8zDqvK9oSnk3rw/UlU2jRLxIF083K/vMb7FH3mXoovm3p9PG+zR96ovRGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8Lpv9SxOeF+LSUHZ3F04lOVOvZy13cy/9NV/B4nPC/FpKBs1LhRxy07PkVYbmJU2nMRCmMp3pX9/ZoeY9KU6WqacOnKlTw0mO/cYYWbbzSps1dX1jtzPa25vF6XO6OpOuV3P6hWvtUpvN2azv4iM/0NZpe/g3lkreOVjY2pKX357s7b/F8jXxIsutV7XBet9rxzA1ZSSu7pLKNzWS3a91iCi1V1GTyeap7b57+1E6pqiLuMnpPe2QNPrPgmpm0xkrRZT+uQGeHTDXYnEaJpJdxkqoXd71eDCbKI0hdtXeZtuO7n6uYF283C9LG+zR96ovJRvNt62M/wDpw13OovJGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8Tpn9TxOeF+LSUHZarT49VxbxoX7pmv4PE54X4tJQMCLK6/bjfX4FWG3S/SjLhnK6z0iztvmx5jYvo6LnZqaXHDf3vizylNpJXzlRD9rf8O88xMP1dL5qbymlMPWAqGvWG+XpRw9/6XRr10SlKt1t1WinRLgv1utnFw6p3pq+vtteI7DWxsJx6u5qZ/ljVePeBpVNXTzyhp84vnl7r3I271PNxVlfRZtX9xLiKqMkr1Wsn63KMu4irbhubu2dU5PtAypotEzl2+k27OLHtFLcJd+evjee0OWuWcTm6u/xJ7lHJcdOOXIC6+bl+ljcsL41l3KP5u6r43LD+NfyLumRl6AAAAAAAAAAAAAAAAAAAAAAAAAAAAA+L0y+p4nPC/FoOe7Plyha3lb1danQumX1LF/p/i0nPdnUUxu8Z5xw+RVhuYdK14vKd6lRwi3OSOqr0aW2ldcN8Z/lx0uSUuOKqf5OIy7u8wpslOUJR602l/Lv3NhWvtFaXW1haQ7VVRw92fA1K67wr5zx9JL55fA2Kqm1b0ev1XwzWijPxY1sTJObuN+96eO4COtcN86KYWq4bzXxk4a3rkrRx5+Lk0Snd6ubfzUyQ20z3e7szf7Aeqtp6WynP16rvsgkTTanRZRD9VR4W8joiHCU789Xv0uF60b813aLW77wLv5vKr43LB+OIXallH83ueNywfjiF1pZGU6Z6R0skAAAAAAAAAAAAAAAAAAAAAAAAAAAD43TD6li/0/xaSg7LTKto/nqX7pf9Txf6f4tBQNmqinOLv3N5p80u8qwlxsPvi9odk5yjdqR1Ju2afV16yl09nBfsSVxZPSUrN50xafDPMSGsm23lDavnF+Hu3Zla13DTbslFmoW5zG79jWqlOYTtGV73+PHjkbWJTChxaLPK8Puv4RpNKdPW4b8suPeBHS/R3ZZTlPDs4biKi1nGbtbe73usvCJIeUzCpsuUZr4xyg121F87+jrMN6LfcCVOzWsKc+O+2mmWgWdtV+1sjBYkzxhWVmnMJd+89roacTu/f9gLr0AUfS8VhfHELnSyldA6rYvLC/3FwoqIy2aWS0s16WSUsCYHlLPQAAAAAAAAAAAAAAAAAAAAAAAAPh9Mav4TF/yfiUlAwF7rppdvb++Z0vyts6rw6qGpVSaa4M57ibLVh1dSpZZPRq2nZkFhjVpVFu1PjdW789TBNO27S0298OGS0VLJcYhNK2V0pStNu086ilQ03U7y6XDibJXvM9hVfB/ttVUz9HL61vTU9VdRp+lSpfpZcO7WxvKdPWS6r9LrNzUoTo6zhvJf4VV9bdn1sbZ6XClUvjDWmcqHMTNnGp817B1qvSdEXvThdWuJbqU1VuPWentTqBpLy1T1VOF7NOtObpqqWlrUNzvaW8mwtpVVKqdKUqtNZ3TqpcO1pW7Unw9noohJUylDbzs2887vQjxFecvCmE9bvxcIkwMWzerVstzee89pbm6zl+J7LxoYU9WUvEW0vfxoS4WHVU1TSm3VolvX5Wz3vtKt3Qqu+Jx+j/3lww6j4vRjyNVRRfOq9XMtOFs9KIyhw6WzYpwyQAeJHoAAAAAAAAAAAAAAAAAAAAAAAAAGGJRJ8byl5JprWR9w8aA55tvkLGpc0V33VJVrjOTfeaGPTtSd8KlxrTW0/wDS6eC9o6bXgJmvibBS9AOT14uMrVbNjcaqfoer3PFl9xrKvFi+BjTNrU773618zrVXkqjcYf2PRuC5ciqp2htxsuK5nXCWazfWxEzPC8jbXU7YVKTn1q791NNXxOuU+SaNxNR5OpWgMuabB0Rxao69dt1FPV7Jbc9yLj5H6PUYeVPbm+9lio2ZLQmVKCI8DChEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;