import React from 'react'
import vg from '../assets/ba.jpg.png';
import {AiFillGoogleCircle , AiFillAmazonCircle ,AiFillYoutube , AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id="home">
    
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems </p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />


        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="Home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam maxime deleniti autem ad unde, quis eaque perspiciatis exercitationem debitis officiis blanditiis rerum ducimus optio sequi, et dolor veniam reiciendis nobis accusamus dignissimos. Aut inventore, dignissimos nihil aliquid esse commodi eos optio quis at, dolorem earum illo? Laborum suscipit repudiandae veniam pariatur vitae in eius, tempore aliquam iure quidem id porro eum ducimus nihil debitis error sequi ea deleniti sit. Facilis ad saepe dicta incidunt ratione nisi sequi explicabo iusto perspiciatis eveniet, autem minima cumque animi tenetur rerum, molestiae expedita architecto quam? Sit nihil voluptatibus rerum laboriosam consectetur corporis pariatur consequuntur incidunt alias, repellat aliquam unde eveniet modi nesciunt sapiente minus ex. Fugiat, neque amet. Veniam ex eaque eius provident.</p>
      </div>
    </div>

    <div className="Home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay : "0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay : "0.5s",
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay : "0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay : "0.1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>


    </>
  )
}

export default Home;