import React from 'react';
import styles from '../../../styles/Center.module.css'

function Center() {
    return (
        <div className={styles.container}>
            <div className={styles.carrousel}>
                <div className={styles.wrapper}>
                    <img className={styles.firstImage} src="images/scale2.jpg"></img>
                    <img className={styles.Image2} src="images/scale.png"></img>
                </div>
            </div>



            <div className={styles.Logos}>
               <div>
               <img src="images/viewers-disney.png"/>

                <video className={styles.VideoHover1}  loop autoPlay="autoPlay" playsInline muted> 
                    <source src="videos/1564674844-disney.mp4"/>
                </video>

               </div>

               <div>
               <img src="images/viewers-pixar.png"/>

               <video className={styles.VideoHover1} loop autoPlay playsInline muted> 
                    <source src="videos/1564676714-pixar.mp4"></source>
                </video>
               </div>

               <div>
               <img src="images/viewers-marvel.png"/>
               <video className={styles.VideoHover1} loop autoPlay playsInline muted> 
                    <source src="videos/1564676115-marvel.mp4"></source>
                </video>
               </div>

               <div>
               <img src="images/viewers-starwars.png"/>
               <video className={styles.VideoHover1} loop autoPlay playsInline muted> 
                    <source src="videos/1608229455-star-wars.mp4"></source>
                </video>
               </div>

               <div>
               <img src="images/viewers-national.png"/>
               <video className={styles.VideoHover1} loop autoPlay playsInline muted> 
                    <source src="videos/1564676296-national-geographic.mp4"></source>
                </video>
               </div>


               
                
            </div>
        </div>



    );
}

export default Center;