import { Link } from 'react-router-dom';

function Chicago() {
     return (
          <>
          <div class="hero bg-green h-3/6  w-3/5 tablet:w-4/5 mx-auto">
               <div class="hero-content flex-col lg:flex-row w-3/5 tablet:w-4/5 mx-auto">
                    
                    <div>
                         <h2 class="font-heading text-yellow text-5xl tablet:text-4xl mobile:text-3xl mt-3">Little Lemon Restaurant!</h2>
                         <p class="py-6">
                         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                         quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
               </div>
          </div>
          <div class="hero bg-grey h-3/6  w-3/5 tablet:w-4/5 mx-auto">
               <div class="hero-content flex-col lg:flex-row">
                    <img
                         src="chefs.jpg"
                         class="max-w-64 rounded-lg shadow-2xl" />
                    <div>
                         <h3 class="font-heading text-3xl tablet:text-4xl mobile:text-3xl mt-3">Mario and Adrian</h3>
                         <p class="py-6">
                         Mario and Adrian founded Little Lemon Restaurant 15 year ago. They both have several years experience in gastronomy. 
                         </p>
                         <button class="btn rounded-lg bg-yellow mt-3 font-abc"><Link to="/reservation">Reserve a Table</Link></button>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Chicago;