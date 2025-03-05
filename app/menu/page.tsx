import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
import Card from "../components/Card";
import './menu.css';

const data = [
    { name: "Americano", price: 100, imgSrc: "/assets/Cafe Assets/coffee_2.webp" },
    { name: "Latte", price: 140, imgSrc: "/assets/Cafe Assets/coffee_4.webp" },
    { name: "Mocha", price: 150, imgSrc: "/assets/Cafe Assets/coffee_5.webp" },
    { name: "Flat White", price: 140, imgSrc: "/assets/Cafe Assets/coffee_7.webp" },
    { name: "Ristretto", price: 90, imgSrc: "/assets/coffee/11.webp"  },
    { name: "Cortado", price: 110, imgSrc: "/assets/coffee/212.webp"  },
    { name: "Breve", price: 150, imgSrc: "/assets/coffee/5.webp"  },
    { name: "Turkish Coffee", price: 160, imgSrc: "/assets/coffee/11.webp"  },
    { name: "Vietnamese Egg Coffee", price: 170, imgSrc: "/assets/coffee/12.webp"  },
    { name: "Irish Coffee", price: 200, imgSrc: "/assets/coffee/19.webp"  },
    { name: "Affogato", price: 180, imgSrc: "/assets/coffee/121.webp"  },
    { name: "Café de Olla", price: 150, imgSrc: "/assets/coffee/212.webp"  },
    { name: "Cold Brew", price: 160, imgSrc: "/assets/coffee/12334.webp"  },
    { name: "Iced Latte", price: 140, imgSrc: "/assets/coffee/45444.webp"  },
    { name: "Frappe", price: 160, imgSrc: "/assets/coffee/download.webp"  },
    { name: "Nitro Coffee", price: 190, imgSrc: "/assets/coffee/Hot-Coffee.webp"  },
    { name: "Dalgona Coffee", price: 150, imgSrc: "/assets/coffee/sip.webp"  },
  ];


export default function page() {
    return (
        <>
        <NavBar />
        <div className=" bg-[#eed6b7] flex flex-wrap justify-center fonty py-10">
            {data.map((item, index) => (
                <Card key={index} name={item.name} price={item.price.toString()} imgSrc={item.imgSrc || "/assets/Cafe Assets/coffee_2.webp"} />
            ))}
        </div>
        <Footer />
        </>
    )
}