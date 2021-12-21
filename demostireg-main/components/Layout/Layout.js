import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Layout({children}) {
    return(
        <div style={{margin: '0 auto'}}>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}