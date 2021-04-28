import styles from "../css/CategoryPage.module.css";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"


const CategoryPage = (props) => {
    const location = useLocation();
    const { categoryPrograms, setActiveCategory } = useContext(ChannelContext);

    

    useEffect(() => {
      setActiveCategory(location.state.category.id); 
       console.log(location.state.category.id);
    }, [location]);

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    

    const renderCategoryPrograms = (props) => {
  
      return  categoryPrograms.map((categoryProgram) => (
        <div 
        onClick={() => openInNewTab(categoryProgram.programurl)}
        className={styles.program}
        key={categoryProgram.id}>
          <p>{categoryProgram.name}</p> 
        </div>
        
      ));
      }
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
      {renderCategoryPrograms()}
     
    </div>
  );
};

export default CategoryPage;
