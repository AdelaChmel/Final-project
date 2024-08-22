function HomePage() {
     return (
      <>
        <div class="bg-green">
          <div class="container w-3/5 mx-auto flex justify-between relative h-72">
             <div class="flex flex-col items-start ">
              <h2 class="font-heading text-yellow text-5xl text-left mt-3">Little Lemon</h2>
              <h3 class="font-heading text-grey text-4xl text-left ">Chicago</h3>
              <p class="text-grey text-left w-2/5 font-abc">We are a family owned Mediterranenan restaurant, focused on 
                 traditional recipes served with a modern twist.
              </p>
              <button class="btn rounded-lg bg-yellow mt-3 font-abc">Reserve a Table</button>
             </div>
             <img src="restaurantfood.jpg" class="rounded-lg mb-3 translate-y-10 translate-x-3 w-80 h-80"></img>
          </div>
        </div> 

       <div class="container w-3/5 mx-auto mt-28">
        <div class="flex justify-between mb-6">
          <h2 class="font-heading text-5xl">This weeks specials!</h2>
          <button class="btn rounded-lg bg-yellow font-abc">Online Menu</button>
        </div>
        <div class="container flex gap-5">
          <div class="flex-1 bg-grey rounded-t-lg">
             <img src="greek_salad.jpg" class="rounded-t-lg mb-3 h-52"></img>
             <div class="flex flex-col gap-5 px-5">
              <div class="flex justify-between">
                <h3 class="font-semibold font-abc">Greek salad</h3>
                <p class="text-orange font-abc">$12.99</p>
              </div>
              <p class="text-left font-abc">The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta
                cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
              <div class="flex justify-between">
                <btn class="font-abc">Order a delivery</btn>
                <img src="motorbike.png" />
              </div>
            </div>
          </div>
          <div class="flex-1 bg-grey rounded-t-lg">
            <img src="Bruchetta.jpg" class="rounded-t-lg mb-3 h-52"></img>
            <div class="flex flex-col gap-5 px-5">
              <div class="flex justify-between">
                <h3 class="font-semibold font-abc">Bruchetta</h3>
                <p class="text-orange font-abc">$5.99</p>
              </div>
              <p class="text-left font-abc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned
                with salt and olive oil.
              </p>
              <div class="flex justify-between">
                <btn class="font-abc">Order a delivery</btn>
                <img src="motorbike.png" />
               </div>
            </div>
          </div>
          <div class="flex-1 bg-grey rounded-t-lg">
             <div>
               <img src="lemon_dessert.jpg" class="rounded-t-lg mb-3 h-52"></img>
              </div>
             <div class="flex flex-col gap-5 px-5 "> 
              <div class="flex justify-between">
                <h3 class="font-semibold font-abc">Lemon dessert</h3>
                <p class="text-orange font-abc">$5.00</p>
              </div>
              <p class="text-left font-abc">This comes straight from grandma's recipe book, every last ingredient has been sourced
                  and is as authentic as can be imagined.
              </p>
              <div class="flex justify-between">
                <btn class="font-abc">Order a delivery</btn>
                <img src="motorbike.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
     )
}

export default HomePage;

/*<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>*/