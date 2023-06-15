import NavigationCard from "../components/NavigationCard";
import Search from "../components/Search"

export default function Layout({children,hideNavigation}) {

  let centerColumn = '';
 if (hideNavigation) {
  centerColumn += 'w-full'; 
  
 }else {
  centerColumn += 'w-full';
 }


  return (
    <>
      <div className="md:flex mt-4 max-w-6xl mx-auto gap-5"> 
        {!hideNavigation&& (
          
          <div className="fixed md:static w-full bottom-0 md:w-1/4 -mb-5">
            <NavigationCard/>
          </div>
        )}
          <div className={centerColumn ? 'w-full' : "Md-w-3/4"}>
            {children}
          </div>

          <div className="md:hide w-3/12">
            <Search/>
            
          </div>

      </div>
    </>
  )
}

