// PAGE STYLE
import SplashScreen from '../hoc/SplashScreen/SplashScreen'
import '../styles/home.scss'
import illustration from '../assets/illustration.svg'
import Button from '../components/Loader/Button/Button'
const Home = () => {
    return (
        <main className='home flex justify-evenly items-center'>
            <section className="texts w-2/5 h-96 flex flex-col justify-center items-start">
                <p className='text-gray-500'>Manage daily product inventory easily</p>
                <h1>evosoftInventory</h1>
                <p>Your ultimate solution for managing daily product inventory with ease! Designed for efficiency, our app provides a seamless way to track and organize your stock in real time. With intuitive features, you can effortlessly add, update, and monitor your products, ensuring you never run out of essentials.</p>
                <Button text='Try it today!'/>
            </section>
            <section className="w-2/5 illustration h-96">
                <img src={illustration} alt="illustration" className='w-full h-full'/>
            </section>
        </main>
    )
}

// export default Home
export default SplashScreen(Home)