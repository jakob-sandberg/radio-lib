import styles from "../css/ChannelPage.module.css";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"


const CategoryPage = (props) => {
    const location = useLocation();
    const { setActiveCategory } = useContext(ChannelContext);

    useEffect(() => {
      setActiveCategory(location.state.category.id); 
       console.log(location.state.category.id);
    }, [location]);

  

   


      const renderCategory = () => {
        return (
          <div className={styles.channelPage}>
            <div className={styles.container}>
            <h2>Välkommen till {location.state.category.name}</h2>
            <p>{location.state.category.id}</p>
            </div>
           </div> 
        )
      };
  return  (
    <div className={styles.channelPage}>
      {renderCategory()}
     
    </div>
  );
};

export default CategoryPage;
