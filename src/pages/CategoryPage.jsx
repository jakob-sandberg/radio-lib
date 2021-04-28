import styles from "../css/ChannelPage.module.css";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"


const CategoryPage = (props) => {
    const location = useLocation();
    const { categoryPrograms, setActiveCategory } = useContext(ChannelContext);

    useEffect(() => {
      setActiveCategory(location.state.category.id);
    }, [location]);


     const renderCategoryPrograms = (props) => {
      return  categoryPrograms.map((program) => (
        <div 
        className={styles.program}
        key={program.id}>
          <p>{program.name}</p>          
        </div>
      ));
      } 


      const renderCategory = (props) => {
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
      <p>{renderCategory()}</p>
      <span>{renderCategoryPrograms()}</span>
    </div>
  );
};

export default CategoryPage;
