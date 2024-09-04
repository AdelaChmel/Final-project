import { Link } from 'react-router-dom';

function Menu() {
     return (
          <>
               <div class="overflow-x-auto w-3/5 tablet:w-4/5 mx-auto">
                    <table class="table bg-grey">
                         <thead class="bg-green">
                              <tr>
                                   <th class="text-yellow">Drinks</th>
                                   <th></th>
                                   <th></th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                              <td>Mineral water</td>
                              <td>0.33 l</td>
                              <td>3.99 $</td>
                              </tr>
                            
                              <tr>
                              <td>Orange Juice</td>
                              <td>0.33 l</td>
                              <td>3.99 $</td>
                              </tr>
              
                              <tr>
                              <td>Coca-Cola</td>
                              <td>0.33 l</td>
                              <td>4.29 $</td>
                              </tr>

                              <tr>
                              <td>Apfelschorle</td>
                              <td>0.5 l</td>
                              <td>4.59 $</td>
                              </tr>
                         </tbody>
                    </table>
                    <table class="table bg-grey">
                         <thead class="bg-green">
                              <tr>
                                   <th class="text-yellow">Main Dishes</th>
                                   <th></th>
                                   <th></th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td>Grilled Salmon</td>
                                   <td>Salmon filets grilled with lemon sauce</td>
                                   <td>20 $</td>
                              </tr>
                              <tr>
                                   <td>Beef tacos</td>
                                   <td>Seasoned ground beef cocked with onions and garlic</td>
                                   <td>19 $</td>
                              </tr>
                              <tr>
                                   <td>Eggplant Parmesan</td>
                                   <td>Broaded and fried eggplant layerd with suace</td>
                                   <td>18 $</td>
                              </tr>
                         </tbody>
                    </table>
                     <table class="table bg-grey">
                         <thead class="bg-green">
                              <tr>
                                   <th class="text-yellow">Salads</th>
                                   <th></th>
                                   <th></th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td>Greek salad</td>
                                   <td>Chopped tomatoes, cucumber, onion and bio feta cheese</td>
                                   <td>17 $</td>
                              </tr>
                              <tr>
                                   <td>Ceasar</td>
                                   <td>Romain lettuce, parmesan, crutons, grilled chicken</td>
                                   <td>19 $</td>
                              </tr>
                              <tr>
                                   <td>Caprese</td>
                                   <td>Mozzarela, tomatoes, basil and balsamico glaze</td>
                                   <td>18 $</td>
                              </tr>
                         </tbody>
                    </table>
                         
               </div>
                         </>
                    )
               }

               export default Menu;