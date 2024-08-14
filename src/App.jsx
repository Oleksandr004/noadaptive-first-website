import './App.css'
import Header from './components/Header/Header.jsx'
import Welcome from './components/Welcome/Welcome.jsx'
import Programs from './components/Programs/Programs.jsx'
import Nutritions from './components/Nutritions/Nutritions.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import About from './components/About/About.jsx'
import BecomeMember from './components/BecomeMember/BecomeMember.jsx'
import Footer from './components/Footer/Footer.jsx'
export default function App() {
	return (
		<>
			<Header />
			<main>
				<Welcome />
				<Programs />
				<Nutritions />
				<Pricing />
				<About />
				<BecomeMember />
			</main>
			<Footer />
		</>
	)
}
