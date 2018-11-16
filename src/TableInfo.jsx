import React, { Component } from 'react';

class Tables extends Component {
  //Tables of the employee information
  render(){
    return(
      <div>
         <table>
          <thead>
           <tr>
             <th>id</th>
             <th>name</th>
             <th>company</th>
             <th>salary</th>
             <th>age</th>
             <th>phone</th>
             <th>email</th>
           </tr>
          </thead>
          <tbody>
           <tr>
             <td>0</td>
             <td>Eduardo González</td>
             <td>América Móvil</td>
             <td>5400</td>
             <td>57</td>
             <td>(886)271 4211</td>
             <td>eduardo@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>1</td>
             <td>Miguel Ángel Rodríguez</td>
             <td>FEMSA</td>
             <td>11000</td>
             <td>40</td>
             <td>(197)651 8811</td>
             <td>miguel@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>2</td>
             <td>Mariana Gómez</td>
             <td>Banorte</td>
             <td>16900</td>
             <td>34</td>
             <td>(396)702 3554 </td>
             <td>mariana@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>3</td>
             <td>Alejandro Fernández</td>
             <td>Grupo México</td>
             <td>17700</td>
             <td>41</td>
             <td>(542)591 3978</td>
             <td>alejandro@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>4</td>
             <td>Gabriela López</td>
             <td>Grupo Inbursa</td>
             <td>10100</td>
             <td>65</td>
             <td>(783)560 4847</td>
             <td>gabriela@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>5</td>
             <td>Alejandra Díaz</td>
             <td>Cemex</td>
             <td>6500</td>
             <td>27</td>
             <td>(862)721 8605</td>
             <td>alejandra@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>6</td>
             <td>Juan Carlos Martínez</td>
             <td>Grupo Televisa</td>
             <td>14000</td>
             <td>38</td>
             <td>(973)322 3993</td>
             <td>juan@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>7</td>
             <td>José Luis Pérez</td>
             <td>Alfa</td>
             <td>20400</td>
             <td>50</td>
             <td>(226)806 3427</td>
             <td>jose@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>8</td>
             <td>María Carmen García</td>
             <td>Grupo Bimbo</td>
             <td>23700</td>
             <td>29</td>
             <td>(907)702 7639</td>
             <td>maria@gmail.com</td>
           </tr>
          </tbody>
          <tbody>
           <tr>
             <td>9</td>
             <td>Adriana Sánchez</td>
             <td>Liverpool</td>
             <td>33800</td>
             <td>23</td>
             <td>(248)255 7702</td>
             <td>adrian@gmail.com</td>
           </tr>
          </tbody>
         </table>
      </div>
    )
  }
}

export default Tables;
